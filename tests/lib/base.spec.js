'use strict';

const assert = require('assert');

describe('base http client wrapper', () => {
    const base = require('../../src/lib/base.js');

    it('get full dashboard uri from endpoint', () => {
        const endpoint = '/test';

        const uri = base.getFullDashboardUri(endpoint);

        assert(typeof uri === 'string', 'uri is not a string');
        assert(uri.includes('test'), 'uri does not contain endpoint');
    });

    it('get full uri for dashboard', () => {
        const type = 'DASHBOARD';
        const endpoint = '/test';

        const uri = base.getFullUri(endpoint, type);

        assert(typeof uri === 'string', 'uri is not a string');
        assert(uri.includes('test'), 'uri does not contain endpoint');
        assert(uri.includes('/Dashboard.aspx'), 'uri does not point to Dashboard endpoint');
    });
});