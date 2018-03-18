'use strict';

const url = require('url');

const ICOMFORT = {
    url: {
        host: 'services.myicomfort.com',
        protocol: 'https:',
    },
    basePath: '/DBAcessService.svc',
};

module.exports = {
    getFullUri: endpoint => url.format(ICOMFORT.url)+ICOMFORT.basePath+endpoint
};
