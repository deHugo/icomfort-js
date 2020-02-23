'use strict';

const request = require('request-promise-native');
const url = require('url');

const ICOMFORT = {
    url: {
        host: 'services.myicomfort.com',
        port: '443',
        protocol: 'https:',
    },
    basePath: '/DBAcessService.svc',
};
const ICOMFORT_WEB = {
    url: {
        host: 'www.myicomfort.com',
        port: '443',
        protocol: 'https:',
    },
    basePath: '/Dashboard.aspx',
};

const getFullDashboardUri = endpoint => url.format(ICOMFORT_WEB.url)+ICOMFORT_WEB.basePath+endpoint;
const getFullDbUri = endpoint => url.format(ICOMFORT.url)+ICOMFORT.basePath+endpoint;

module.exports = {
    getFullDashboardUri,
    getFullDbUri,
    getFullUri,
    doGet:           (path, auth, qs, type)       => request.get(  getFullUri(path, type),    {auth, json: true, qs}),
    doDashboardPost: (path, auth, qs, body)       => request.post( getFullDashboardUri(path), {auth, json: true, qs, body}),
    doPut:           (path, auth, qs, body, type) => request.put(  getFullUri(path, type),    {auth, json: true, qs, body}),
};

function getFullUri (endpoint, type) {
    type = type||'';

    if (type.toLowerCase() === 'dashboard') {
        return getFullDashboardUri(endpoint);
    }

    return getFullDbUri(endpoint);
}