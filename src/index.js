'use strict';

const iComfortClient = require('./lib/statefulClient');
const LegacyiComfortClient = require('./lib/legacyClient');

module.exports = LegacyiComfortClient;

module.exports.iComfortClient = iComfortClient;
