const {doGet} = require('./base');


const ICOMFORT = {
    baseHost: 'https://www.lennoxicomfort.com',
    basePath: '/',
};


module.exports = cachedAuth => ({
    getBuildings: params => doGet(ICOMFORT, 'buildings', cachedAuth, params),
});