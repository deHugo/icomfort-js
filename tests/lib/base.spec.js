'use strict';

const assert = require('assert');

describe('base http client wrapper', () => {
    const base = require('../../src/lib/base.js');

    describe('creds to auth header',() => {
        it('creates headers object with base64 encoded credentials',() => {
            const creds = {username: 'me', password: 'secret'};

            const headerObject = base.credsToAuthHeader(creds);

            assert(Object.hasOwnProperty.call(headerObject, 'Authorization'), 'headers object does not have property \'Authorization\'');
            assert.strictEqual(typeof headerObject['Authorization'], 'string', '\'Authorization\' header is not a string');
            assert(headerObject['Authorization'].includes('Basic'));
            assert(headerObject['Authorization'].includes('bWU6c2VjcmV0'));
        });
    });
});