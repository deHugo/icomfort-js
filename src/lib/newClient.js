const bent      = require('bent');
const CookieJar = require('cookiejar');

module.exports = {
    makeInstance,
};

function makeInstance (
    auth = {username: null, password: null},
    homeOpts = {thermoStatSerial: null, zoneNumber: null}
) {
    const cachedAuth = {username: null, password: null, ...auth};
    const homeOptions = {thermostatSerial: null, zoneNumber: null, ...homeOpts};
    const cookieJar = new CookieJar.CookieJar();

    return {
        getCurrentStatus: () => POST('/NewGetManualInfo',
            currentStatusPayload(cachedAuth, homeOptions),
            getHeaders('https://www.myicomfort.com', '/Dashboard.aspx/NewGetManualInfo', cachedAuth, cookieJar)
        )
            .then(checkResponseStatus())
            .then(getJsonBody)
            .then(storeCookies(cookieJar))
            .then(extractDashboardResponseBody)
            .then(statusFromDto)
    };
}

const POST = bent('POST', 200, 'https://www.myicomfort.com/Dashboard.aspx');

const base64 = data => Buffer.from(data).toString('base64');
const authToBase64 = auth => auth&&base64(`${auth.username}:${auth.password}`);
const getAuthHeader = auth => auth&&`Basic ${authToBase64(auth)}`;

const getHeaders = (domain, path, auth, cookieJar) => {
    const headers = {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9,es;q=0.8,pt;q=0.7',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.myicomfort.com/Dashboard.aspx',// TODO: This value is required for the dashboard status call. However, it should probably be calculated
    };

    const cookieAccessInfo = CookieJar.CookieAccessInfo(domain, path);
    const cookies = cookieJar.getCookies(cookieAccessInfo);

    if (Array.isArray(cookies) && cookies.length) {
        const cookieHeaderValue = cookies.toValueString(cookieAccessInfo);

        headers['Cookie'] = cookieHeaderValue;
    }
    else {
        headers['Authorization'] = getAuthHeader(auth);
    }

    return headers;
};

const currentStatusPayload = (auth, homeOptions) => ({
    hidden_gateway_SN: homeOptions.thermostatSerial,
    pref_temp_units: '0',
    userid: auth.username,
    Central_Zoned_Away: '2',
    Cancel_Away: '-1',
    // current_prg: '2',
    // current_mode: '1',
    CurrentBrowser: 'chrome',
    zoneNumber: '0',
    Current_Thermostat: '0',
    alertViewTypes: '0',
    alertTypes: '1',
    reminderTypes: '0',
    authorizationToken: base64(auth.username),
});

const getJsonBody = res => {
    let body;

    if (typeof res.headers['content-type'] === 'string' && res.headers['content-type'].startsWith('application/json')) {
        body = JSON.parse(res._readableState.buffer.head.data.toString('utf8'));
    }

    return {...res, body};
};

const storeCookies = cookieJar => res => {
    if (Array.isArray(res.headers['set-cookie'])) {
        res.headers['set-cookie'].forEach(setCookie => cookieJar.setCookie(setCookie, 'https://www.myicomfort.com', res._response.req.path));
    }

    return res;
};

const checkResponseStatus = (acceptableStatus=200) => res => {
    if (res.statusCode === acceptableStatus) return res;
    else {
        const err = new Error('Unexpected status code');
        err.res = res;
        throw err;
    }
};

const extractDashboardResponseBody = ({body}) => JSON.parse(body.d);

const extractDateFromDtoRegExp = RegExp('-?\\d+');
const extractDateFromDto = str => {
    let date = null;

    const extractedValue = extractDateFromDtoRegExp.exec(str);

    if (Array.isArray(extractedValue) && extractedValue.length) {
        date = new Date(parseInt(extractedValue[0], 10));
    }

    return date;
};

const statusFromDto = dto => {
    const manualModes = dto.manualSetting.split('&').map(str => {
        if (str) {
            return {
                number: parseInt(str.split(',')[1], 10),
                name: str.split(',')[0]
            };
        }
    });
    const status = {
        equipment: dto.Equipment_List.map(e => ({
            systemId: e.SystemID,
            friendlyName: e.Friendly_Name,
            deviceDescriptor: e.Device_Descriptor,
            controlModelNbr: e.Control_Model_Nbr,
            controlSerialNumber: e.Control_Serial_Number,
            returnStatus: e.ReturnStatus,
        })),
        alerts: dto.AlertInfo_List.map(a => ({
            created: extractDateFromDto(a.DateTime_Set),
            expires: extractDateFromDto(a.DateTime_Reset),
            alert: {
                type: a.Alarm_Type,
                nbr: a.Alarm_Nbr,
                description: a.Alarm_Description,
                value: a.Alarm_Value,
            },
            status: a.Status
        })),
        thermostats: dto.TStatInfo_List.map(t => {
            const schedules = t.Schedule_Name.split('^').map(str => ({
                number: parseInt(str.split('|')[0], 10),
                name: str.split('|')[1],
            }));

            return {
                serial:                  t.GatewaySN, // str
                zone: {
                    number:                t.Zone_Number, // int
                    name:                  t.Zone_Name, // str
                },
                selectedProgramSchedule: schedules.find(s => s.number===t.Program_Schedule_Selection), // int
                schedules,
                programScheduleModeEnabled:      Boolean(parseInt(t.Program_Schedule_Mode, 10)), // str<int>
                awayModeEnabled:                  Boolean(t.Away_Mode), // int
                preferredTemperatureUnits:            t.Pref_Temp_Units ? 'farenheit' : 'celsius', // enum<str('0': 'farenheit', '1': 'celsius')>
                lastCommunicationAt:              extractDateFromDto(t.DateTime_Mark), // str<date>
                zoneEnabled:               Boolean(t.Zone_Enabled), // int
                systemStatus:              t.System_Status, // int
                indoorTemperature:                t.Indoor_Temp, // int
                indoorHumidity:            t.Indoor_Humidity, // int
                manualOperationMode:             manualModes.find(m => m.number===t.Operation_Mode), // int
                heatSetPoint:             t.Heat_Set_Point, // int
                coolSetPoint:             t.Cool_Set_Point, // int
                fanMode:                   t.Fan_Mode, // int
                goldenTableUpdated:       t.Golden_Table_Updated, // bool
                connectionStatus:           t.ConnectionStatus, // str
                centralZonedAway:         t.Central_Zoned_Away, // int
                zonesInstalled:            t.Zones_Installed, // int
                offsetToGMT:               t.GMT_To_Local, // int : -25200
            };
        }),

        manualModes,
    };

    return status;
};