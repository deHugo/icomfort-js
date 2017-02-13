# node-icomfort
A client for the Lennox iComfort services implemented in node.js

## API

All methods of the iComfortClient return promises as their communicate asynchronously with the Lennox iComfort servers via HTTP.

Before calling any of the below methods, the client must be instantiated with valid credentials.

```javscript
const icomfort = new iComfortClient({username: 'valid username', password: 'supersecret'});
```

### getBuildingsInfo(params)

Retrieves information about the buildings associated with your my iComfort account.

`params`:

* `UserId` - A valid iComfort username.


### getGatewayInfo(params)
Retrieves information about a gateway (thermostat) associated with your account.

`params`:

* `GatewaySN` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.
* `TempUnit` - A integer which indicates which temperature units to use to represent values from the gateway. The value __0__ Corresponds to F (farenheit) and __1__ to C (celsius).


### getGatewaysAlerts(params)
Retrieves a list of alerts associated with a gateway.

`params`:

* `gatewaysn` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.

### getSystemsInfo(params)
Retrieves information about systems associated with your account.

`params`:

* `UserId` - A valid iComfort username.

### getThermostatInfoList(params)
Lists information for thermostats for an account.

`params`:

* `Cancel_Away` - 'Cancel away flag'? Unknown use. Set value to __-1__.
* `GatewaySN` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.
* `TempUnit` - A integer which indicates which temperature units to use to represent values from the gateway. The value __0__ Corresponds to F (farenheit) and __1__ to C (celsius).

### getThermostatLookupInfo(params)
Retrieves list of different parameters possible for a gateway (thermostat).

`params`:

* `gatewaysn` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.
* `name` - 'Name'? Unknown user. Set value to '__all__'.

### getThermostatScheduleInfo(params)
Retrieves a list of schedules for a given thermostat.

`params`:

* `gatewaysn` - The serial number of a gateway associated with your account. It can be discovered using the `getSystemsInfo` method.

### validateUser(data)
Validates a user account information.

`data`:

* `UserName` - A valid iComfort username.
* `lang_nbr` - 'Language Flag'? Unknown use. Set value to __0__.

### setThermostatInfo(data)
Updates operating parameters for a thermostat. Can be used to set temperatures.

This method requires various properties in its data payload. The best way to use this method is to first get the current thermostat info using the `getThermostatInfoList` method. Then modify properties as needed and use the updated status object as the payload for this method.

`data`:

* `Cool_Set_Point` - Maximum temperature before thermostat activates cooling.
* `Heat_Set_Point` - Minimum temperature before thermostat activates heating.
* `Pref_Temp_Units` - A integer which indicates which temperature units to use to represent values from the gateway. The value __0__ Corresponds to F (farenheit) and __1__ to C (celsius).

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
