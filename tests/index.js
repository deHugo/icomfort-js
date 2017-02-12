'use strict';

const assert = require('assert');
const iComfortClient = require('../index');

describe('tests the iComfort client', () => {
    const ENV = {
        USERNAME: process.env['ICOMFORT_USERNAME'],
        PASSWORD: process.env['ICOMFORT_PASSWORD'],
        GATEWAY_SN: process.env['ICOMFORT_GATEWAY_SERIAL'],
    };
    const auth = {username: ENV.USERNAME, password: ENV.PASSWORD};

    let icomfort;

    before('creates an iComfort client', () => icomfort = new iComfortClient(auth));

    it('gets buildings info (getBuildingsInfo)', () => {
        const getBuildingsInfoParams = {UserId:ENV.USERNAME};

        return icomfort.getBuildingsInfo(getBuildingsInfoParams);
    });

    it('gets gateway info (getGatewayInfo)', () => {
        const getGatewayInfoParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        return icomfort.getGatewayInfo(getGatewayInfoParams);
    });

    it('gets gateway alerts (getGatewaysAlerts)', () => {
        const getGatewaysAlertsParams = {gatewaysn:ENV.GATEWAY_SN};

        return icomfort.getGatewaysAlerts(getGatewaysAlertsParams);
    });

    it('gets system info (getSystemsInfo)', () => {
        const getSystemsInfoParams = {UserId:ENV.USERNAME};

        return icomfort.getSystemsInfo(getSystemsInfoParams);
    });

    it('gets thermostat info list (getThermostatInfoList)', () => {
        const getThermostatInfoListParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        return icomfort.getThermostatInfoList(getThermostatInfoListParams);
    });

    it('gets thermostat lookup info (getThermostatLookupInfo)', () => {
        const getThermostatLookupInfoParams = {gatewaysn:ENV.GATEWAY_SN, name: 'all'};

        return icomfort.getThermostatLookupInfo(getThermostatLookupInfoParams);
    });

    it('gets thermostat schedule info (getThermostatScheduleInfo)', () => {
        const getThermostatScheduleInfoParams = {gatewaysn:ENV.GATEWAY_SN};

        return icomfort.getThermostatScheduleInfo(getThermostatScheduleInfoParams);
    });

    it('validates user (validateUser)', () => {
        const validateUserData = {UserName:ENV.USERNAME,lang_nbr:0};

        return icomfort.validateUser(validateUserData);
    });

    describe('updates thermostat settings (setThermostatInfo)', () => {
        let currentSettings;

        before(done => {
            const getThermostatInfoListParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

            icomfort.getThermostatInfoList(getThermostatInfoListParams)
                .then(res => {
                    currentSettings = res.tStatInfo.find(tStat => tStat.GatewaySN === ENV.GATEWAY_SN);

                    done();
                })
                .catch(done);
        });

        it('updates the temperature', () => {
            const newOptions = {
                Cool_Set_Point: currentSettings.Cool_Set_Point+2,
                Heat_Set_Point: currentSettings.Heat_Set_Point+2
            };
            const newSettings = Object.assign({}, currentSettings, newOptions);

            return icomfort.setThermostatInfo(newSettings);
        });

        after(() => icomfort.setThermostatInfo(currentSettings));
    });
});

