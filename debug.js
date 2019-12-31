'use strict';

const soap = require('strong-soap').soap;
const WSDL = soap.WSDL;

const url = 'https://services.myicomfort.com/DBAcessService.svc?wsdl';
const requestArgs = {
    GatewaySN: process.env['ICOMFORT_GATEWAY_SERIAL'],
    TempUnit: '0'
};
const options = {};

soap.createClient(url, options, function(err, client) {
    if (err) return console.error(err);

    // console.log(client);
    const description = client.describe();

    console.log(JSON.stringify(description));
});

WSDL.open(url, options, function(err, wsdl){
    if (err) console.error(err);
    else console.log(wsdl);
});

soap.createClient(url, options, function(err, client) {
    if (err) return console.error(err);

    // client.DbAcessService.GetGatewayInfo(requestArgs, function(err, result, envelope) {
    client.GetGatewayInfo(requestArgs, function(err, result, envelope) {
        // Response envelope
        console.log(envelope);

        // Result in SOAP envelope body which is the wrapper element.
        // In this case, result object corresponds to GetCityForecastByZIPResponse
        console.log(JSON.stringify(result));
    });
});