const {doGet, doPut} = require('./base');
const DEFS = require('./definitions');


const ICOMFORT = {
    baseHost: 'https://services.myicomfort.com',
    basePath: '/DBAcessService.svc',
};


module.exports = cachedAuth => ({
    getBuildingsInfo:          params => doGet(ICOMFORT, DEFS.getBuildingsInfo.path, cachedAuth, params),
    getGatewayInfo:            params => doGet(ICOMFORT, DEFS.getGatewayInfo.path, cachedAuth, params),
    getGatewaysAlerts:         params => doGet(ICOMFORT, DEFS.getGatewaysAlerts.path, cachedAuth, params),
    getSystemsInfo:            params => doGet(ICOMFORT, DEFS.getSystemsInfo.path, cachedAuth, params),
    getThermostatInfoList:     params => doGet(ICOMFORT, DEFS.getThermostatInfoList.path, cachedAuth, params),
    getThermostatLookupInfo:   params => doGet(ICOMFORT, DEFS.getThermostatLookupInfo.path, cachedAuth, params),
    getThermostatScheduleInfo: params => doGet(ICOMFORT, DEFS.getThermostatScheduleInfo.path, cachedAuth, params),
    validateUser:              params => doPut(ICOMFORT, DEFS.validateUser.path, cachedAuth, params, ''),
    setThermostatInfo:         data   => doPut(ICOMFORT, DEFS.setThermostatInfo.path, cachedAuth, '', data),
});