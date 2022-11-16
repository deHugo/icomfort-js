const ServicesMyicomfortComService = require('./lib/services_myicomfort_com');
const WwwMyicomfortComService = require('./lib/www_myicomfort_com');
const WwwLennoxicomfortComService = require('./lib/www_lennoxicomfort_com');


module.exports = iComfortClient;


function iComfortClient (auth, type) {
    const cachedAuth = {username:null, password: null, ...auth};

    return clientTypes(type, cachedAuth);
}


const clientTypes = (type, cachedAuth) => {
    let client;

    switch(type) {
    case '_INVALID_':
        client = WwwMyicomfortComService(cachedAuth);
        break;
    case 's30':
    case 'm30':
    case 'e30':
        client = WwwLennoxicomfortComService(cachedAuth);
        break;
    case 'wifi':
    default:
        client = ServicesMyicomfortComService(cachedAuth);
        break;
    }


    return client;
};