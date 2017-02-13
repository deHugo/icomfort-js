'use strict';

const base = require('./lib/base');

const definitions = require('./lib/definitions');

module.exports = iComfortClient;

function iComfortClient (auth={username:null, password:null}) {
    this.auth = auth;
}

iComfortClient.prototype.getBuildingsInfo          = function(params) {
    return base.doGet(definitions.getBuildingsInfo.path, this.auth, params);
};
iComfortClient.prototype.getGatewayInfo            = function(params) {
    return base.doGet(definitions.getGatewayInfo.path, this.auth, params);
};
iComfortClient.prototype.getGatewaysAlerts         = function(params) {
    return base.doGet(definitions.getGatewaysAlerts.path, this.auth, params);
};
iComfortClient.prototype.getSystemsInfo            = function(params) {
    return base.doGet(definitions.getSystemsInfo.path, this.auth, params);
};
iComfortClient.prototype.getThermostatInfoList     = function(params) {
    return base.doGet(definitions.getThermostatInfoList.path, this.auth, params);
};
iComfortClient.prototype.getThermostatLookupInfo   = function(params) {
    return base.doGet(definitions.getThermostatLookupInfo.path, this.auth, params);
};
iComfortClient.prototype.getThermostatScheduleInfo = function(params) {
    return base.doGet(definitions.getThermostatScheduleInfo.path, this.auth, params);
};
iComfortClient.prototype.validateUser              = function(params) {
    return base.doPut(definitions.validateUser.path, this.auth, params, '');
};
iComfortClient.prototype.setThermostatInfo         = function(data) {
    return base.doPut(definitions.setThermostatInfo.path, this.auth, '', data);
};