const {doGet} = require('./base');


// No longer used but kept because it may possibly be used in the future.
const ICOMFORT = {
    baseHost: 'https://www.myicomfort.com',
    basePath: '/Dashboard.aspx',
};


module.exports = cachedAuth => ({
    getBuildings: params => doGet(ICOMFORT, 'buildings', cachedAuth, params),
});