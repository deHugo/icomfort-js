'use strict';

const {expect} = require('chai');

const iComfortClient = require('../src/index.js');

const debugging = Boolean((process.env['NODE_DEBUG'] == 1));

function logResponse (res) {
    if (debugging) {
        console.log(JSON.stringify(res, null, 2));
    }

    return res;
}

describe('tests the iComfort client', () => {
    const ENV = {
        USERNAME: process.env['ICOMFORT_USERNAME'],
        PASSWORD: process.env['ICOMFORT_PASSWORD'],
        GATEWAY_SN: process.env['ICOMFORT_GATEWAY_SERIAL'],
    };
    const auth = {username: ENV.USERNAME, password: ENV.PASSWORD};

    let icomfort;

    before('creates an iComfort client', () => icomfort = new iComfortClient(auth));

    it('instantiates the client without the \'new\' keyword', () => {
        const icomfortClient = iComfortClient(auth);

        expect(icomfortClient).to.be.instanceof(iComfortClient, 'icomfortClient is not an instance of iComfortClient');
    });

    it('gets buildings info (getBuildingsInfo)', async () => {
        const getBuildingsInfoParams = {UserId:ENV.USERNAME};

        const buildings = await icomfort.getBuildingsInfo(getBuildingsInfoParams)
            .then(logResponse);

        expect(buildings).to.be.a('array');
        buildings.forEach(building => {
            expect(building).to.have.all.keys(['Addr1', 'Addr2', 'Age_of_Building', 'BuildingAlert', 'BuildingID', 'BuildingReminder', 'BuildingSize', 'BuildingStyle', 'Building_Name', 'City', 'Country', 'DealerAlerts_DlrWants', 'DealerAlerts_OwnerAllow', 'DealerID', 'DealerReminder_DlrWants', 'DealerReminder_OwnerAllow', 'DealerTStatView', 'DefaultBuilding', 'Latitude', 'Longitude', 'NotificationEmail', 'Number_of_Bedrooms', 'Number_of_Floors', 'Number_of_Occupants', 'St_Prov', 'UserID', 'UtilityCompany', 'ZIP_PC']);
        });
    });

    it('gets gateway info (getGatewayInfo)', async () => {
        const getGatewayInfoParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        const gateway = await icomfort.getGatewayInfo(getGatewayInfoParams).then(logResponse);

        expect(gateway).to.have.all.keys(['Cool_Set_Point_High_Limit','Cool_Set_Point_Low_Limit','Daylight_Savings_Time','Heat_Cool_Dead_Band','Heat_Set_Point_High_Limit','Heat_Set_Point_Low_Limit','Pref_Language_Nbr','Pref_Temp_Unit','ReturnStatus','SystemID']);
    });

    it('gets gateway alerts (getGatewaysAlerts)', async () => {
        const getGatewaysAlertsParams = {gatewaysn:ENV.GATEWAY_SN};

        const alerts = await icomfort.getGatewaysAlerts(getGatewaysAlertsParams).then(logResponse);

        expect(alerts).to.be.a('array');
        alerts.forEach(alert => {
            expect(alert).to.have.all.keys(['Alarm_Description','Alarm_Nbr','Alarm_Type','Alarm_Value','DateTime_Reset','DateTime_Set','Status']);
        });
    });

    it('gets system info (getSystemsInfo)', async () => {
        const getSystemsInfoParams = {UserId:ENV.USERNAME};

        const systems = await icomfort.getSystemsInfo(getSystemsInfoParams).then(logResponse);

        expect(systems).to.be.a('array');
        systems.forEach(system => {
            expect(system).to.have.all.keys(['BuildingID','Firmware_Ver','Gateway_SN','RegistrationCompleteFlag','Status','SystemID','System_Name']);
        });
    });

    it('gets thermostat info list (getThermostatInfoList)', async () => {
        const getThermostatInfoListParams = {GatewaySN:ENV.GATEWAY_SN, TempUnit: 0};

        const thermostats = await icomfort.getThermostatInfoList(getThermostatInfoListParams).then(logResponse);

        expect(thermostats).to.be.a('array');
        thermostats.forEach(thermostat => {
            expect(thermostat).to.have.all.keys(['Away_Mode','Central_Zoned_Away','ConnectionStatus','Cool_Set_Point','DateTime_Mark','Fan_Mode','GMT_To_Local','GatewaySN','Golden_Table_Updated','Heat_Set_Point','Indoor_Humidity','Indoor_Temp','Operation_Mode','Pref_Temp_Units','Program_Schedule_Mode','Program_Schedule_Selection','System_Status','Zone_Enabled','Zone_Name','Zone_Number','Zones_Installed']);
        });
    });

    it.only('gets thermostat lookup info (getThermostatLookupInfo)', async () => {
        // const getThermostatLookupInfoParams = {gatewaysn:ENV.GATEWAY_SN, name: 'all'};
        const getThermostatLookupInfoParams = {gatewaysn:ENV.GATEWAY_SN, name: 'all', Lang_Nbr:1};

        const lookups = await icomfort.getThermostatLookupInfo(getThermostatLookupInfoParams).then(logResponse);

        expect(lookups).to.be.a('array');
        lookups.forEach(lookup => {
            expect(lookup).to.have.all.keys(['Lang_Nbr','ReturnStatus','description','name','sort_order','value']);
        });
    });

    it('gets thermostat schedule info (getThermostatScheduleInfo)', async () => {
        const getThermostatScheduleInfoParams = {gatewaysn:ENV.GATEWAY_SN};

        const schedules = await icomfort.getThermostatScheduleInfo(getThermostatScheduleInfoParams).then(logResponse);

        expect(schedules).to.be.a('array');
        schedules.forEach(schedule => {
            expect(schedule).to.have.all.keys(['Schedule_Name','Schedule_Number']);
        });
    });

    it('validates user (validateUser)', async () => {
        const validateUserData = {UserName:ENV.USERNAME};

        const userValidation = await icomfort.validateUser(validateUserData).then(logResponse);

        expect(JSON.parse(JSON.stringify(userValidation))).deep.equal({msg_code: 'SUCCESS',msg_desc: 'Success'});
    });

    describe('updates thermostat settings (setThermostatInfo)', () => {
        let currentSettings;

        before('get current settings',() => {
            return getCurrentSettings(icomfort, ENV.GATEWAY_SN)
                .then(res => currentSettings=res);
        });

        it('updates the temperature', async () => {
            const newOptions = {
                Cool_Set_Point: currentSettings.Cool_Set_Point+2,
                Heat_Set_Point: currentSettings.Heat_Set_Point+2
            };
            const newSettings = Object.assign({}, currentSettings, newOptions);

            const updateRes = await icomfort.setThermostatInfo(newSettings).then(logResponse);

            expect(updateRes).to.be.a('object').that.is.empty;
        });

        after(() => icomfort.setThermostatInfo(currentSettings));
    });

    describe('changes away mode setting',() => {
        let currentSettings, currentAwayMode;

        before('get current settings',() => {
            return getCurrentSettings(icomfort, ENV.GATEWAY_SN)
                .then(res => currentSettings=res);
        });

        it('updates the away mode', () => {
            currentAwayMode = {
                'awaymode': currentSettings.Away_Mode,
                'coolsetpoint': currentSettings.Cool_Set_Point,
                'fanmode': currentSettings.Fan_Mode,
                'gatewaysn': currentSettings.GatewaySN,
                'heatsetpoint': currentSettings.Heat_Set_Point,
                'zonenumber': currentSettings.Zone_Number,
            };
            const newOptions = {
                'awaymode': currentSettings.Away_Mode ? 0 : 1 ,
                'coolsetpoint': currentSettings.Cool_Set_Point-10,
                'heatsetpoint': currentSettings.Heat_Set_Point+6,
            };
            const newSettings = Object.assign({}, currentAwayMode, newOptions);

            return icomfort.setAwayMode(newSettings).then(logResponse);
        });

        after(() => icomfort.setAwayMode(currentAwayMode).then(logResponse));
    });
});

function getCurrentSettings (icomfortClient, serialnumber) {
    const getThermostatInfoListParams = {GatewaySN:serialnumber, TempUnit: 0};

    return icomfortClient.getThermostatInfoList(getThermostatInfoListParams)
        .then(res => {
            return res.tStatInfo.find(tStat => tStat.GatewaySN === serialnumber);
        });
}