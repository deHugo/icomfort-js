# icomfort-js
A client for the Lennox iComfort services implemented in JavaScript.

Currently this module works natively in Node.js. Using a tool such as [browserify](http://browserify.org/) it could be used in modern web browsers.

## API

All methods of the iComfortClient return promises as they communicate asynchronously with the Lennox iComfort servers via HTTP.

Before calling any of the below methods, the client must be instantiated with valid credentials.

```javascript
const icomfort = iComfortClient({username: 'valid username', password: 'supersecret'});
// or
const icomfort = new iComfortClient({username: 'valid username', password: 'supersecret'});
```

* [getBuildingsInfo](#getbuildingsinfoparams)
* [getGatewayInfo](#getgatewayinfoparams)
* [getGatewaysAlerts](#getgatewaysalertsparams)
* [getSystemsInfo](#getsystemsinfoparams)
* [getThermostatInfoList](#getthermostatinfolistparams)
* [getThermostatLookupInfo](#getthermostatlookupinfoparams)
* [getThermostatScheduleInfo](#getthermostatscheduleinfoparams)
* [validateUser](#validateuserdata)
* [setThermostatInfo](#setthermostatinfodata)

### getBuildingsInfo(params)

Retrieves information about the buildings associated with your my iComfort account.

`params` - *Object*:

* `UserId` - A valid iComfort username.

Example Response

```json
{
  "Buildings": [
    {
      "Addr1": "123 Main",
      "Addr2": "Apt Z",
      "Age_of_Building": 99,
      "BuildingAlert": true,
      "BuildingID": 999999,
      "BuildingReminder": true,
      "BuildingSize": 9,
      "BuildingStyle": 9,
      "Building_Name": "My house",
      "City": "Anytown",
      "Country": "US",
      "DealerAlerts_DlrWants": false,
      "DealerAlerts_OwnerAllow": false,
      "DealerID": 999999,
      "DealerReminder_DlrWants": false,
      "DealerReminder_OwnerAllow": false,
      "DealerTStatView": false,
      "DefaultBuilding": true,
      "Latitude": 32.981704,
      "Longitude": -96.760218,
      "NotificationEmail": "",
      "Number_of_Bedrooms": 9,
      "Number_of_Floors": 9,
      "Number_of_Occupants": 9,
      "St_Prov": "ZZ",
      "UserID": null,
      "UtilityCompany": "Nationwide Gas Co",
      "ZIP_PC": "99999"
    }
  ],
  "ReturnStatus": "SUCCESS"
}
```


### getGatewayInfo(params)
Retrieves information about a gateway (thermostat) associated with your account.

`params` - *Object*:

* `GatewaySN` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.
* `TempUnit` - A integer which indicates which temperature units to use to represent values from the gateway. The value __0__ Corresponds to F (farenheit) and __1__ to C (celsius).


### getGatewaysAlerts(params)
Retrieves a list of alerts associated with a gateway.

`params` - *Object*:

* `gatewaysn` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.

### getSystemsInfo(params)
Retrieves information about systems associated with your account.

`params` - *Object*:

* `UserId` - A valid iComfort username.

### getThermostatInfoList(params)
Lists information for thermostats for an account.

`params` - *Object*:

* `Cancel_Away` - 'Cancel away flag'? Unknown use. Set value to __-1__.
* `GatewaySN` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.
* `TempUnit` - A integer which indicates which temperature units to use to represent values from the gateway. The value __0__ Corresponds to F (farenheit) and __1__ to C (celsius).

### getThermostatLookupInfo(params)
Retrieves list of different parameters possible for a gateway (thermostat).

`params` - *Object*:

* `gatewaysn` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.
* `name` - 'Name'? Unknown user. Set value to '__all__'.

### getThermostatScheduleInfo(params)
Retrieves a list of schedules for a given thermostat.

`params` - *Object*:

* `gatewaysn` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.

### validateUser(data)
Validates a user account information.

`data` - *Object*:

* `UserName` - A valid iComfort username.

### setThermostatInfo(data)
Updates operating parameters for a thermostat. Can be used to set temperatures.

This method requires various properties in its data payload. The best way to use this method is to first get the current thermostat info using the `getThermostatInfoList` method. Then modify properties as needed and use the updated status object as the payload for this method.

`data` - *Object*:

* `Cool_Set_Point` - Maximum temperature before thermostat activates cooling.
* `Heat_Set_Point` - Minimum temperature before thermostat activates heating.
* `Pref_Temp_Units` - A integer which indicates which temperature units to use to represent values from the gateway. The value __0__ Corresponds to F (farenheit) and __1__ to C (celsius).

#### Example

```javascript
const icomfort = new iComfortClient({username: 'valid username', password: 'supersecret'});

const myGatewaySN = 'WS99C99999';

icomfort.getThermostatInfoList({Cancel_Away: -1, GatewaySN: myGatewaySN})
    .then(res => {
        const currentSettings = res.tStatInfo.find(tStat => tStat.GatewaySN === myGatewaySN);

        const newOptions = {
            Cool_Set_Point: currentSettings.Cool_Set_Point+2,
            Heat_Set_Point: currentSettings.Heat_Set_Point+2
        };

        const newSettings = Object.assign({}, currentSettings, newOptions);

        return icomfort.setThermostatInfo(newSettings);
    });
```

## Testing
Some very basic tests are implemented using the [Mocha](https://mochajs.org/) testing framework. An npm script has also been defined to fire off the tests. Before running the tests, you will need to define your iComfort username and password in your environment. In Unix/Linux/BSD/mac OS, you can do the following:

```bash
export ICOMFORT_USERNAME='your icomfort username'
export ICOMFORT_PASSWORD='your icomfort password'
```

On Windows, the command is similar:

```bash
set ICOMFORT_USERNAME='your icomfort username'
set ICOMFORT_PASSWORD='your icomfort password'
```

After setting your username and password, to run the test command do the following:

```bash
npm test
```

If your username and password are correct, all of the tests will pass. If not, all of the tests will fail.

## Thanks
Thanks to [Ian Macdonald](https://github.com/bruman) for his [Ruby iComfort](https://github.com/bruman/ruby-icomfort) repo which helped get me started in the right direction.

Also thanks to [Kate Hall](https://github.com/kate-hall) for being the first to make use of this code. Her project encouraged me to make this code more modular. Check out her integration of this project's code with Amazon's Alexa at [alexa-icomfort](https://github.com/kate-hall/alexa-icomfort).
