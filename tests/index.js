'use strict';

const ENV = {
    USERNAME: process.env['ICOMFORT_USERNAME'],
    PASSWORD: process.env['ICOMFORT_PASSWORD'],
    GATEWAY_SN: process.env['ICOMFORT_GATEWAY_SERIAL'],
};
const auth = {username: ENV.USERNAME, password: ENV.PASSWORD};

const iComfortClient = require('../index');
const icomfort = new iComfortClient(auth);

const getBuildingsInfoParams = {UserId:ENV.USERNAME};
icomfort.getBuildingsInfo(getBuildingsInfoParams)
    .then(console.log)
    .catch(console.error);

const getGatewayInfoParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};
icomfort.getGatewayInfo(getGatewayInfoParams)
    .then(console.log)
    .catch(console.error);

const getGatewaysAlertsParams = {gatewaysn:ENV.GATEWAY_SN};
icomfort.getGatewaysAlerts(getGatewaysAlertsParams)
    .then(console.log)
    .catch(console.error);

const getSystemsInfoParams = {UserId:ENV.USERNAME};
icomfort.getSystemsInfo(getSystemsInfoParams)
    .then(console.log)
    .catch(console.error);

const getThermostatInfoListParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};
icomfort.getThermostatInfoList(getThermostatInfoListParams)
    .then(console.log)
    .catch(console.error);

const getThermostatLookupInfoParams = {gatewaysn:ENV.GATEWAY_SN, name: 'all'};
icomfort.getThermostatLookupInfo(getThermostatLookupInfoParams)
    .then(console.log)
    .catch(console.error);

const getThermostatScheduleInfoParams = {gatewaysn:ENV.GATEWAY_SN};
icomfort.getThermostatScheduleInfo(getThermostatScheduleInfoParams)
    .then(console.log)
    .catch(console.error);

const validateUserData = {UserName:ENV.USERNAME,lang_nbr:0};
icomfort.validateUser(validateUserData)
    .then(console.log)
    .catch(console.error);
