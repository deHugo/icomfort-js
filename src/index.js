'use strict';

const DEFS      = require('./lib/definitions');
const base      = require('./lib/base');
const newClient = require('./lib/newClient');

module.exports = iComfortClient;

function iComfortClient (auth={}, homeOpts={}) {
    const cachedAuth = {username:null, password: null, ...auth};
    const homeOptions = {thermostatSerial: null, zoneNumber: null, ...homeOpts};

    return {
        getBuildingsInfo:          params => base.doGet(DEFS.getBuildingsInfo.path, cachedAuth, params),
        getGatewayInfo:            params => base.doGet(DEFS.getGatewayInfo.path, cachedAuth, params),
        getGatewaysAlerts:         params => base.doGet(DEFS.getGatewaysAlerts.path, cachedAuth, params),
        getSystemsInfo:            params => base.doGet(DEFS.getSystemsInfo.path, cachedAuth, params),
        getThermostatInfoList:     params => base.doGet(DEFS.getThermostatInfoList.path, cachedAuth, params),
        getThermostatLookupInfo:   params => base.doGet(DEFS.getThermostatLookupInfo.path, cachedAuth, params),
        getThermostatScheduleInfo: params => base.doGet(DEFS.getThermostatScheduleInfo.path, cachedAuth, params),
        validateUser:              params => base.doPut(DEFS.validateUser.path, cachedAuth, params, ''),
        setThermostatInfo:         data   => base.doPut(DEFS.setThermostatInfo.path, cachedAuth, '', data),
        /**
         * @deprecated since version 1.2.2
         */
        setProgramMode:            data   => base.doDashboardPost(DEFS.setModeChange.path, cachedAuth, '', data),
        setAwayMode:               data   => base.doPut(DEFS.setAwayMode.path, cachedAuth, data),

        /**
         * NEW, SIMPLER API SECTION
         **/
        ...newClient.makeInstance(cachedAuth, homeOptions)
    };
}
