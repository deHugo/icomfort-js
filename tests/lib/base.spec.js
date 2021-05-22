'use strict';

const assert = require('assert');
const http = require('http');

describe('base http client wrapper', () => {
    const base = require('../../src/lib/base.js');

    describe('fullUrl', () => {
        it('generates a full url from hostname, path, and query params', () => {
            const server = {
                baseHost:'http://localhost:3999',
                basePath:'/theServiceEndpoint'
            };
            const path = '/findLocationById';
            const queryparams = {locationId: 12};

            const url = base.fullUrl(server, path, queryparams);

            assert.strictEqual(typeof url, 'string');
            assert(url.includes(server.baseHost));
            assert(url.includes(server.basePath));
            assert(url.includes(path));
            assert(url.includes('locationId'));
        });
    });
});
