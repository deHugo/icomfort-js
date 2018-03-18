'use strict';

const base        = require('./lib/base');
const definitions = require('./lib/definitions');
const request     = require('superagent');

module.exports = iComfortClient;

function iComfortClient (auth) {
    if (!(this instanceof iComfortClient)) {
        return new iComfortClient(auth);
    }

    this.agent = request.agent().auth(auth.username, auth.password);
}

iComfortClient.prototype.getBuildingsInfo          = function(params) {
    return this.agent.get(base.getFullUri(definitions.getBuildingsInfo.path))
        .query(params)
        .then(resToBody)
        .then(body => body.Buildings);
};
iComfortClient.prototype.getGatewayInfo            = function(params) {
    return this.agent.get(base.getFullUri(definitions.getGatewayInfo.path))
        .query(params)
        .then(resToBody);
};
iComfortClient.prototype.getGatewaysAlerts         = function(params) {
    return this.agent.get(base.getFullUri(definitions.getGatewaysAlerts.path))
        .query(params)
        .then(resToBody)
        .then(body => body.Alerts);
};
iComfortClient.prototype.getSystemsInfo            = function(params) {
    return this.agent.get(base.getFullUri(definitions.getSystemsInfo.path))
        .query(params)
        .then(resToBody)
        .then(body => body.Systems);
};
iComfortClient.prototype.getThermostatInfoList     = function(params) {
    return this.agent.get(base.getFullUri(definitions.getThermostatInfoList.path))
        .query(params)
        .then(resToBody)
        .then(body => body.tStatInfo);
};
iComfortClient.prototype.getThermostatLookupInfo   = function(params) {
    return this.agent.get(base.getFullUri(definitions.getThermostatLookupInfo.path))
        .query(params)
        .then(resToBody)
        .then(body => body.tStatlookupInfo);
};
iComfortClient.prototype.getThermostatScheduleInfo = function(params) {
    return this.agent.get(base.getFullUri(definitions.getThermostatScheduleInfo.path))
        .query(params)
        .then(resToBody)
        .then(body => body.tStatScheduleInfo);
};
iComfortClient.prototype.validateUser              = function(params) {
    return this.agent.put(base.getFullUri(definitions.validateUser.path))
        .query(params)
        .then(resToBody);
};
iComfortClient.prototype.setThermostatInfo         = function(data) {
    return this.agent.put(base.getFullUri(definitions.setThermostatInfo.path))
        .send(data)
        .then(resToBody);
};

function resToBody (res) {
    function Body (data) {
        Object.assign(this,data);
    }
    Body.prototype.getRes = () => res;
    Body.prototype.getReq = () => res.req;

    return new Body(res.body);
}