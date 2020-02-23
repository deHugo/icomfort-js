'use strict';

const assert = require('assert');

const iComfortClient = require('../src/index.js');

const debugging = Boolean((process.env['NODE_DEBUG'] == 1));

function logResponse (res) {
    if (debugging) {
        console.log(JSON.stringify(res, null, 2));
    }

    return res;
}

describe('base http client wrapper', () => {
    const base = require('../src/lib/base.js');

    it('get full dashboard uri from endpoint', () => {
        const endpoint = '/test';

        const uri = base.getFullDashboardUri(endpoint);

        assert(typeof uri === 'string', 'uri is not a string');
        assert(uri.includes('test'), 'uri does not contain endpoint');
    });

    it('get full uri for dashboard', () => {
        const type = 'DASHBOARD';
        const endpoint = '/test';

        const uri = base.getFullUri(endpoint, type);

        assert(typeof uri === 'string', 'uri is not a string');
        assert(uri.includes('test'), 'uri does not contain endpoint');
        assert(uri.includes('/Dashboard.aspx'), 'uri does not point to Dashboard endpoint');
    });
});

describe('exported iComfort client', () => {
    const ENV = {
        USERNAME: process.env['ICOMFORT_USERNAME'],
        PASSWORD: process.env['ICOMFORT_PASSWORD'],
        GATEWAY_SN: process.env['ICOMFORT_GATEWAY_SERIAL'],
    };
    const auth = {username: ENV.USERNAME, password: ENV.PASSWORD};

    let icomfort;

    before('creates an iComfort client', () => icomfort = new iComfortClient(auth));

    it('instantiate the client without the \'new\' keyword', () => {
        const icomfortClient = iComfortClient(auth);

        assert((typeof icomfortClient === 'object'), 'icomfortClient is not an object');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getBuildingsInfo'),          'icomfortClient does not have property \'getBuildingsInfo\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getGatewayInfo'),            'icomfortClient does not have property \'getGatewayInfo\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getGatewaysAlerts'),         'icomfortClient does not have property \'getGatewaysAlerts\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getSystemsInfo'),            'icomfortClient does not have property \'getSystemsInfo\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getThermostatInfoList'),     'icomfortClient does not have property \'getThermostatInfoList\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getThermostatLookupInfo'),   'icomfortClient does not have property \'getThermostatLookupInfo\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'getThermostatScheduleInfo'), 'icomfortClient does not have property \'getThermostatScheduleInfo\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'validateUser'),              'icomfortClient does not have property \'validateUser\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'setThermostatInfo'),         'icomfortClient does not have property \'setThermostatInfo\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'setProgramMode'),            'icomfortClient does not have property \'setProgramMode\'');
        assert(Object.hasOwnProperty.call(icomfortClient, 'setAwayMode'),               'icomfortClient does not have property \'setAwayMode\'');
    });

    it('get buildings info (getBuildingsInfo)', () => {
        const getBuildingsInfoParams = {UserId:ENV.USERNAME};

        return icomfort.getBuildingsInfo(getBuildingsInfoParams).then(logResponse);
    });

    it('get gateway info (getGatewayInfo)', () => {
        const getGatewayInfoParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        return icomfort.getGatewayInfo(getGatewayInfoParams).then(logResponse);
    });

    it('get gateway alerts (getGatewaysAlerts)', () => {
        const getGatewaysAlertsParams = {gatewaysn:ENV.GATEWAY_SN};

        return icomfort.getGatewaysAlerts(getGatewaysAlertsParams).then(logResponse);
    });

    it('get system info (getSystemsInfo)', () => {
        const getSystemsInfoParams = {UserId:ENV.USERNAME};

        return icomfort.getSystemsInfo(getSystemsInfoParams).then(logResponse);
    });

    it('get thermostat info list (getThermostatInfoList)', () => {
        const getThermostatInfoListParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        return icomfort.getThermostatInfoList(getThermostatInfoListParams).then(logResponse);
    });

    it('get thermostat lookup info (getThermostatLookupInfo)', () => {
        const getThermostatLookupInfoParams = {gatewaysn:ENV.GATEWAY_SN, name: 'all'};

        return icomfort.getThermostatLookupInfo(getThermostatLookupInfoParams).then(logResponse);
    });

    it('get thermostat schedule info (getThermostatScheduleInfo)', () => {
        const getThermostatScheduleInfoParams = {gatewaysn:ENV.GATEWAY_SN};

        return icomfort.getThermostatScheduleInfo(getThermostatScheduleInfoParams).then(logResponse);
    });

    it('validate user (validateUser)', () => {
        const validateUserData = {UserName:ENV.USERNAME};

        return icomfort.validateUser(validateUserData).then(logResponse);
    });

    describe('update thermostat settings (setThermostatInfo)', () => {
        let currentSettings;

        before('get current settings',() => {
            return getCurrentSettings(icomfort, ENV.GATEWAY_SN)
                .then(res => currentSettings=res)
                .then(logResponse);
        });

        it('update the temperature', () => {
            const newOptions = {
                Cool_Set_Point: currentSettings.Cool_Set_Point+2,
                Heat_Set_Point: currentSettings.Heat_Set_Point+2
            };
            const newSettings = Object.assign({}, currentSettings, newOptions);

            return icomfort.setThermostatInfo(newSettings).then(logResponse);
        });

        xit('sets the program schedule mode', () => {
            const programModeOptions = {
                hidden_gateway_SN:          ENV.GATEWAY_SN,
                zoneNumber:                 currentSettings.Zone_Number,
                Current_HeatPoint:          currentSettings.Heat_Set_Point+2,
                Current_CoolPoint:          currentSettings.Cool_Set_Point+2,
                Current_FanValue:           currentSettings.Fan_Mode,
                Program_Schedule_Mode:      (parseInt(currentSettings.Program_Schedule_Mode)) === 1 ? 0 : 1,
                Operation_Mode:             currentSettings.Operation_Mode,
                Program_Schedule_Selection: currentSettings.Program_Schedule_Selection,
                Pref_Temp_Units:            currentSettings.Pref_Temp_Units,
            };

            return icomfort.setProgramMode(programModeOptions).then(logResponse);
        });

        after(() => icomfort.setThermostatInfo(currentSettings));
    });

    describe('change away mode setting',() => {
        let currentSettings, currentAwayMode;

        before('get current settings',() => {
            return getCurrentSettings(icomfort, ENV.GATEWAY_SN)
                .then(res => currentSettings=res)
                .then(logResponse);
        });

        it('update the away mode', () => {
            currentAwayMode = {
                'awaymode': currentSettings.Away_Mode,
                'coolsetpoint': currentSettings.Cool_Set_Point,
                'fanmode': currentSettings.Fan_Mode,
                'gatewaysn': currentSettings.GatewaySN,
                'heatsetpoint': currentSettings.Heat_Set_Point,
                'zonenumber': currentSettings.Zone_Number,
            };
            const newOptions = {
                'awaymode': currentSettings.Away_Mode ? 0 : 1 ,
                'coolsetpoint': currentSettings.Cool_Set_Point-10,
                'heatsetpoint': currentSettings.Heat_Set_Point+6,
            };
            const newSettings = Object.assign({}, currentAwayMode, newOptions);

            return icomfort.setAwayMode(newSettings).then(logResponse);
        });

        after(() => icomfort.setAwayMode(currentAwayMode).then(logResponse));
    });
});

function getCurrentSettings (icomfortClient, serialnumber) {
    const getThermostatInfoListParams = {GatewaySN:serialnumber, TempUnit: 0};

    return icomfortClient.getThermostatInfoList(getThermostatInfoListParams)
        .then(res => {
            return res.tStatInfo.find(tStat => tStat.GatewaySN === serialnumber);
        });
}