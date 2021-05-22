'use strict';

const assert = require('assert');

const iComfortClient = require('../src/index');
const { stringToBase64 } = require('../src/lib/utils');

const debugging = Boolean((process.env['NODE_DEBUG'] == 1));

const logResponse = source => res => {
    if (debugging) {
        console.log(`[${source}]`, JSON.stringify(res, null, 2));
    }

    return res;
};

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
        assert(Object.hasOwnProperty.call(icomfortClient, 'setAwayMode'),               'icomfortClient does not have property \'setAwayMode\'');
    });

    it.only('new manual info (newManualInfo)', async () => {
        const client = await iComfortClient.iComfortClient({
            username: ENV.USERNAME,
            password: ENV.PASSWORD,
            serial: ENV.GATEWAY_SN,
            units: 'f',
            zone: 0,
            type: 'wifi'
        });

        return client.getStatus()
            .then(logResponse('newManualInfo'));
    });

    it('get buildings info (getBuildingsInfo)', () => {
        const getBuildingsInfoParams = {UserId:ENV.USERNAME};

        return icomfort.getBuildingsInfo(getBuildingsInfoParams).then(logResponse('getBuildingsInfo'));
    });

    it('get gateway info (getGatewayInfo)', () => {
        const getGatewayInfoParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        return icomfort.getGatewayInfo(getGatewayInfoParams).then(logResponse('getGatewayInfo'));
    });

    it('get gateway alerts (getGatewaysAlerts)', () => {
        const getGatewaysAlertsParams = {gatewaysn:ENV.GATEWAY_SN};

        return icomfort.getGatewaysAlerts(getGatewaysAlertsParams).then(logResponse('getGatewaysAlerts'));
    });

    it('get system info (getSystemsInfo)', () => {
        const getSystemsInfoParams = {UserId:ENV.USERNAME};

        return icomfort.getSystemsInfo(getSystemsInfoParams).then(logResponse('getSystemsInfo'));
    });

    it('get thermostat info list (getThermostatInfoList)', () => {
        const getThermostatInfoListParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        return icomfort.getThermostatInfoList(getThermostatInfoListParams).then(logResponse('getThermostatInfoList'));
    });

    it('get thermostat lookup info (getThermostatLookupInfo)', () => {
        const getThermostatLookupInfoParams = {gatewaysn:ENV.GATEWAY_SN, name: 'all'};

        return icomfort.getThermostatLookupInfo(getThermostatLookupInfoParams).then(logResponse('getThermostatLookupInfo'));
    });

    it('get thermostat schedule info (getThermostatScheduleInfo)', () => {
        const getThermostatScheduleInfoParams = {gatewaysn:ENV.GATEWAY_SN};

        return icomfort.getThermostatScheduleInfo(getThermostatScheduleInfoParams).then(logResponse('getThermostatScheduleInfo'));
    });

    it('validate user (validateUser)', () => {
        const validateUserData = {UserName:ENV.USERNAME};

        return icomfort.validateUser(validateUserData).then(logResponse('validateUser'));
    });

    describe('update thermostat settings (setThermostatInfo)', () => {
        let currentSettings;

        before('get current settings',() => {
            return getCurrentSettings(icomfort, ENV.GATEWAY_SN)
                .then(res => currentSettings=res)
                .then(logResponse('before setThermostatInfo'));
        });

        it('update the temperature', () => {
            const newOptions = {
                Cool_Set_Point: currentSettings.Cool_Set_Point+2,
                Heat_Set_Point: currentSettings.Heat_Set_Point+2
            };
            const newSettings = Object.assign({}, currentSettings, newOptions);

            return icomfort.setThermostatInfo(newSettings).then(logResponse('setThermostatInfo'));
        });

        after(() => icomfort.setThermostatInfo(currentSettings).then(logResponse('after setThermostatInfo')));
    });

    describe('change away mode setting',() => {
        let currentSettings, currentAwayMode;

        before('get current settings',() => {
            return getCurrentSettings(icomfort, ENV.GATEWAY_SN)
                .then(res => currentSettings=res)
                .then(logResponse('before away mode'));
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

            return icomfort.setAwayMode(newSettings).then(logResponse('away mode'));
        });

        after(() => icomfort.setAwayMode(currentAwayMode).then(logResponse('after away mode')));
    });
});

function getCurrentSettings (icomfortClient, serialnumber) {
    const getThermostatInfoListParams = {GatewaySN:serialnumber, TempUnit: 0};

    return icomfortClient.getThermostatInfoList(getThermostatInfoListParams)
        .then(res => {
            return res.tStatInfo.find(tStat => tStat.GatewaySN === serialnumber);
        });
}