'use strict';

const httpClient = require('./httpClient');
const LegacyiComfortClient = require('./legacyClient');
const { stringToBase64, toIntString } = require('./utils');

module.exports = async options => {
    const config = optionsToConfig(options);
    const currentStatus = {};

    const legacyiComfortClient = LegacyiComfortClient(config);

    const {tStatInfo: legacyThermostatsStatuses} = await legacyiComfortClient.getThermostatInfoList({GatewaySN:config.serial, TempUnit: config.units});
    const matchThermostat = thermostat => thermostat.GatewaySN === config.serial && toIntString(thermostat.Zone_Number) === toIntString(config.zone);
    const legacyThermostatStatus = legacyThermostatsStatuses.find(matchThermostat);
    if (!legacyThermostatStatus) throw new Error(`Matching thermostat '${config.serial}' and zone '${config.zone}' not found`);
    legacyThermostatStatus.thermostatIndex = legacyThermostatsStatuses.findIndex(matchThermostat);

    const manualInfoParams = getManualInfoParamsFromLegacyStatus(config, legacyThermostatStatus);
    Object.assign(currentStatus, await getManualInfo({config}, manualInfoParams));

    return {
        getStatus: async () => getManualInfo({config}, getManualInfoParamsFromStatus(config, currentStatus))
            .then(newStatus => Object.assign(currentStatus, newStatus))
    };
};

/**
 * Client config.
 * @typedef {Object} Config
 * @property {string} username - Username used to login to https://www.myicomfort.com/.
 * @property {string} password - Password used to login to https://www.myicomfort.com/.
 * @property {string} serial - Serial number of the iComfort WiFi thermostat.
 * @property {string} units - Units to use for temperature display. `0`, `f`, `F`, and `fahrenheit` will be set to `Fahrenheit`. `1`, `c`, `C`, and `celsius` will be set to `Celsius`
 * @property {number} zone - Integer ID representing the zone for the system.
 * @property {string} [type='wifi'] - Type of thermostat. Currently the only suported value is 'wifi'.
 */

/**
 * @param {object} options
 * @returns {Config}
 */
const optionsToConfig = options => ({
    username: options.username,
    password: options.password,
    serial: options.serial.toUpperCase(),
    units: unitToString(options.units),
    zone: parseInt(options.zone, 10),
    type: (options.type||'wifi').toLowerCase(),
});

const unitToString = unit => {
    if (['0', 'f', 'fahrenheit'].includes(String(unit).toLowerCase())) return 'Fahrenheit';
    else if (['1', 'c', 'celsius'].includes(String(unit).toLowerCase())) return 'Celsius';
    else throw new Error('Unknown unit passed');
};

const unitStringToId = unit => {
    if (unit && unit.toLowerCase() === 'fahrenheit') return 0;
    else if (unit && unit.toLowerCase() === 'celsius') return 1;
    else throw new Error('Unknown unit passed');
};

const getManualInfo = ({config}, params) => {
    const baseUrl = 'https://www.myicomfort.com/Dashboard.aspx';
    const creds = {username: config.username, password: config.password};

    return httpClient.jsonRequest(
        'POST',
        `${baseUrl}/NewGetManualInfo`,
        params,
        {
            creds,
            headers: {
                'Cookie': `iComfort=ic2; RegisteredUserCookie=username=${stringToBase64(creds.username)}`,
                'Referer': baseUrl
            }
        }
    )
        .then(({d}) => JSON.parse(d))
        .then(statusFromDto);
};

const getManualInfoParamsFromConfig = config => ({
    'hidden_gateway_SN': config.serial,
    'pref_temp_units': unitStringToId(config.units),
    'userid': config.username,
    'Cancel_Away': '-1', // Request will fail without this value, but it doesn't seem to be used.
    // 'current_prg': '2', // This is sent by the website client, but does not seem to be needed.
    // 'current_mode': '1', // This is sent by the website client, but does not seem to be needed.
    'CurrentBrowser': 'chrome', // Doesn't really matter. Ideally it's something realistic like `chrome` or `firefox`.
    'zoneNumber': config.zone,

    // Active Alerts
    // 'alertViewTypes': '0',
    // 'alertTypes': '1',

    // Cleared alerts
    // 'alertViewTypes': '1',
    // 'alertTypes': '1',

    // All alerts
    'alertViewTypes': '1',
    'alertTypes': '-1',

    'reminderTypes': '0', // TODO: Find a source to get this value.
    'authorizationToken': stringToBase64(config.username)
});

const getManualInfoParamsFromLegacyStatus = (config, legacyThermostatStatus) => ({
    ...getManualInfoParamsFromConfig(config),
    'Central_Zoned_Away': toIntString(legacyThermostatStatus.Central_Zoned_Away),
    'Current_Thermostat': toIntString(legacyThermostatStatus.thermostatIndex),
});

const getManualInfoParamsFromStatus = (config, status) => ({
    ...getManualInfoParamsFromConfig(config),
    'Central_Zoned_Away': toIntString(status.thermostats.find(tstat => tstat.serial === config.serial).centralZonedAway),
    'Current_Thermostat': toIntString(status.thermostats.findIndex(tstat => tstat.serial === config.serial)),
});

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
    const manualModes = dto.manualSetting
        .split('&')
        .map(str => {
            if (str) {
                return {
                    number: parseInt(str.split(',')[1], 10),
                    name: str.split(',')[0]
                };
            }
        })
        .filter(m => m);
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
                serial: t.GatewaySN, // str
                zone: {
                    number: t.Zone_Number, // int
                    name: t.Zone_Name, // str
                },
                selectedProgramSchedule: schedules.find(s => s.number===t.Program_Schedule_Selection), // int
                schedules,
                programScheduleModeEnabled: Boolean(parseInt(t.Program_Schedule_Mode, 10)), // str<int>
                awayModeEnabled: Boolean(t.Away_Mode), // int
                preferredTemperatureUnits: unitToString(t.Pref_Temp_Units), // enum<str('0': 'Fahrenheit', '1': 'Celsius')>
                lastCommunicationAt: extractDateFromDto(t.DateTime_Mark), // str<date>
                zoneEnabled: Boolean(t.Zone_Enabled), // int
                systemStatus: t.System_Status, // int
                indoorTemperature: t.Indoor_Temp, // int
                indoorHumidity: t.Indoor_Humidity, // int
                manualOperationMode: manualModes.find(m => m.number===t.Operation_Mode), // int
                heatSetPoint: t.Heat_Set_Point, // int
                coolSetPoint: t.Cool_Set_Point, // int
                fanMode: {
                    number: t.Fan_Mode, // int
                    name: fanModeIdToString(t.Fan_Mode)
                },
                goldenTableUpdated: t.Golden_Table_Updated, // bool
                connectionStatus: t.ConnectionStatus, // str
                centralZonedAway: t.Central_Zoned_Away, // int
                zonesInstalled: t.Zones_Installed, // int
                offsetToGMT: t.GMT_To_Local, // int : -25200
            };
        }),

        manualModes,
        fanModes,
        // _rawData: {...dto}
    };

    return status;
};

const fanModes = [
    {
        number: 0,
        name: 'auto'
    },
    {
        number: 1,
        name: 'on'
    },
    {
        number: 2,
        name: 'circulate'
    },
];

const fanModeIdToString = id => fanModes.find(mode => mode.number === id);