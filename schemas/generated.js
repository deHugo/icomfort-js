var generated_Module_Factory = function () {
  var generated = {
    name: 'generated',
    typeInfos: [{
        localName: 'AppParamInfo',
        propertyInfos: [{
            name: 'description',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'description'
            },
            type: 'elementRef'
          }, {
            name: 'parameterName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'parameter_name'
            },
            type: 'elementRef'
          }, {
            name: 'parameterValue',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'parameter_value'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfAlertInfo',
        propertyInfos: [{
            name: 'alertInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'AlertInfo'
            },
            typeInfo: '.AlertInfo'
          }]
      }, {
        localName: 'ArrayOfTStatInfo',
        propertyInfos: [{
            name: 'tStatInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'TStatInfo'
            },
            typeInfo: '.TStatInfo'
          }]
      }, {
        localName: 'ProgramInfoOut',
        propertyInfos: [{
            name: 'coolSetPoint',
            elementName: {
              localPart: 'Cool_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'fanMode',
            elementName: {
              localPart: 'Fan_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'GatewaySN'
            },
            type: 'elementRef'
          }, {
            name: 'heatSetPoint',
            elementName: {
              localPart: 'Heat_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'scheduleNum',
            elementName: {
              localPart: 'ScheduleNum'
            },
            typeInfo: 'Short'
          }]
      }, {
        localName: 'ArrayOfTStatLookupInfo',
        propertyInfos: [{
            name: 'tStatLookupInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'TStatLookupInfo'
            },
            typeInfo: '.TStatLookupInfo'
          }]
      }, {
        localName: 'TStatScheduleInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'tStatScheduleInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'tStatScheduleInfo'
            },
            typeInfo: '.ArrayOfTStatScheduleInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'TStatInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'tStatInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'tStatInfo'
            },
            typeInfo: '.ArrayOfTStatInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'OwnerProfileInfo',
        propertyInfos: [{
            name: 'firstName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'FirstName'
            },
            type: 'elementRef'
          }, {
            name: 'lastName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'LastName'
            },
            type: 'elementRef'
          }, {
            name: 'mobilePhone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'MobilePhone'
            },
            type: 'elementRef'
          }, {
            name: 'newGatewayPending',
            elementName: {
              localPart: 'NewGatewayPending'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'phone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Phone'
            },
            type: 'elementRef'
          }, {
            name: 'pwdFlag',
            elementName: {
              localPart: 'PwdFlag'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'registrationComplete',
            elementName: {
              localPart: 'RegistrationComplete'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'tcInComplete',
            elementName: {
              localPart: 'TCInComplete'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'userID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UserID'
            },
            type: 'elementRef'
          }, {
            name: 'eMail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'eMail'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfMessageInfo',
        propertyInfos: [{
            name: 'messageInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'MessageInfo'
            },
            typeInfo: '.MessageInfo'
          }]
      }, {
        localName: 'ArrayOfEmailContentInfo',
        propertyInfos: [{
            name: 'emailContentInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'EmailContentInfo'
            },
            typeInfo: '.EmailContentInfo'
          }]
      }, {
        localName: 'ArrayOfBuildingInfo',
        propertyInfos: [{
            name: 'buildingInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'BuildingInfo'
            },
            typeInfo: '.BuildingInfo'
          }]
      }, {
        localName: 'ArrayOfBldDemoInfo',
        propertyInfos: [{
            name: 'bldDemoInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'BldDemoInfo'
            },
            typeInfo: '.BldDemoInfo'
          }]
      }, {
        localName: 'GatewayBlockCInfo',
        propertyInfos: [{
            name: 'enableRSBusLogging',
            elementName: {
              localPart: 'Enable_RSBus_logging'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'GatewaySN'
            },
            type: 'elementRef'
          }, {
            name: 'idlePollingRate',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Idle_Polling_Rate'
            },
            type: 'elementRef'
          }, {
            name: 'reportModerateAlarms',
            elementName: {
              localPart: 'Report_Moderate_Alarms'
            },
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'FirmwareDataInfoList',
        propertyInfos: [{
            name: 'firmwareData',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'FirmwareData'
            },
            typeInfo: '.ArrayOfFirmwareDataInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'FirmwareDataInfo',
        propertyInfos: [{
            name: 'activeInactiveFlag',
            elementName: {
              localPart: 'ActiveInactive_flag'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'controlModelNumber',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Control_Model_Number'
            },
            type: 'elementRef'
          }, {
            name: 'dateTimeMark',
            elementName: {
              localPart: 'DateTime_Mark'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'fileID',
            elementName: {
              localPart: 'FileID'
            },
            typeInfo: 'Long'
          }, {
            name: 'fileName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'File_Name'
            },
            type: 'elementRef'
          }, {
            name: 'firmwareKey',
            elementName: {
              localPart: 'FirmwareKey'
            },
            typeInfo: 'Int'
          }, {
            name: 'firmwareBuildFrom',
            elementName: {
              localPart: 'Firmware_Build_From'
            },
            typeInfo: 'Short'
          }, {
            name: 'firmwareBuildTo',
            elementName: {
              localPart: 'Firmware_Build_To'
            },
            typeInfo: 'Short'
          }, {
            name: 'firmwareMajorFrom',
            elementName: {
              localPart: 'Firmware_Major_From'
            },
            typeInfo: 'Long'
          }, {
            name: 'firmwareMajorTo',
            elementName: {
              localPart: 'Firmware_Major_To'
            },
            typeInfo: 'Long'
          }, {
            name: 'firmwareMinorFrom',
            elementName: {
              localPart: 'Firmware_Minor_From'
            },
            typeInfo: 'Long'
          }, {
            name: 'firmwareMinorTo',
            elementName: {
              localPart: 'Firmware_Minor_To'
            },
            typeInfo: 'Long'
          }, {
            name: 'serialNumberFrom',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Serial_number_From'
            },
            type: 'elementRef'
          }, {
            name: 'serialNumberTo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Serial_number_To'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'WeatherInfo',
        propertyInfos: [{
            name: 'chanceOfRain',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Chance_of_rain'
            },
            type: 'elementRef'
          }, {
            name: 'city',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'City'
            },
            type: 'elementRef'
          }, {
            name: 'currentTemp',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Current_temp'
            },
            type: 'elementRef'
          }, {
            name: 'description',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Description'
            },
            type: 'elementRef'
          }, {
            name: 'iconNbr',
            elementName: {
              localPart: 'Icon_Nbr'
            },
            typeInfo: 'Int'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'state',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'State'
            },
            type: 'elementRef'
          }, {
            name: 'forecastInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'forecastInfo'
            },
            typeInfo: '.ArrayOfWeatherForecastInfo',
            type: 'elementRef'
          }, {
            name: 'weathericon',
            elementName: {
              localPart: 'weathericon'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'BuildingInfo',
        propertyInfos: [{
            name: 'addr1',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Addr1'
            },
            type: 'elementRef'
          }, {
            name: 'addr2',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Addr2'
            },
            type: 'elementRef'
          }, {
            name: 'ageOfBuilding',
            elementName: {
              localPart: 'Age_of_Building'
            },
            typeInfo: 'Int'
          }, {
            name: 'buildingAlert',
            elementName: {
              localPart: 'BuildingAlert'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'buildingID',
            elementName: {
              localPart: 'BuildingID'
            },
            typeInfo: 'Long'
          }, {
            name: 'buildingReminder',
            elementName: {
              localPart: 'BuildingReminder'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'buildingSize',
            elementName: {
              localPart: 'BuildingSize'
            },
            typeInfo: 'Int'
          }, {
            name: 'buildingStyle',
            elementName: {
              localPart: 'BuildingStyle'
            },
            typeInfo: 'Int'
          }, {
            name: 'buildingName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Building_Name'
            },
            type: 'elementRef'
          }, {
            name: 'city',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'City'
            },
            type: 'elementRef'
          }, {
            name: 'country',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Country'
            },
            type: 'elementRef'
          }, {
            name: 'dealerAlertsDlrWants',
            elementName: {
              localPart: 'DealerAlerts_DlrWants'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerAlertsOwnerAllow',
            elementName: {
              localPart: 'DealerAlerts_OwnerAllow'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerID',
            elementName: {
              localPart: 'DealerID'
            },
            typeInfo: 'Long'
          }, {
            name: 'dealerReminderDlrWants',
            elementName: {
              localPart: 'DealerReminder_DlrWants'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerReminderOwnerAllow',
            elementName: {
              localPart: 'DealerReminder_OwnerAllow'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerTStatView',
            elementName: {
              localPart: 'DealerTStatView'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'defaultBuilding',
            elementName: {
              localPart: 'DefaultBuilding'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'latitude',
            elementName: {
              localPart: 'Latitude'
            },
            typeInfo: 'Double'
          }, {
            name: 'longitude',
            elementName: {
              localPart: 'Longitude'
            },
            typeInfo: 'Double'
          }, {
            name: 'notificationEmail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'NotificationEmail'
            },
            type: 'elementRef'
          }, {
            name: 'numberOfBedrooms',
            elementName: {
              localPart: 'Number_of_Bedrooms'
            },
            typeInfo: 'Int'
          }, {
            name: 'numberOfFloors',
            elementName: {
              localPart: 'Number_of_Floors'
            },
            typeInfo: 'Int'
          }, {
            name: 'numberOfOccupants',
            elementName: {
              localPart: 'Number_of_Occupants'
            },
            typeInfo: 'Int'
          }, {
            name: 'stProv',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'St_Prov'
            },
            type: 'elementRef'
          }, {
            name: 'userID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UserID'
            },
            type: 'elementRef'
          }, {
            name: 'utilityCompany',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UtilityCompany'
            },
            type: 'elementRef'
          }, {
            name: 'zippc',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ZIP_PC'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'EquipmentInfo',
        propertyInfos: [{
            name: 'controlModelNbr',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Control_Model_Nbr'
            },
            type: 'elementRef'
          }, {
            name: 'controlSerialNumber',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Control_Serial_Number'
            },
            type: 'elementRef'
          }, {
            name: 'deviceDescriptor',
            elementName: {
              localPart: 'Device_Descriptor'
            },
            typeInfo: 'Long'
          }, {
            name: 'friendlyName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Friendly_Name'
            },
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'systemID',
            elementName: {
              localPart: 'SystemID'
            },
            typeInfo: 'Long'
          }]
      }, {
        localName: 'ArrayOfAppParamInfo',
        propertyInfos: [{
            name: 'appParamInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'AppParamInfo'
            },
            typeInfo: '.AppParamInfo'
          }]
      }, {
        localName: 'BldDemoInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'bldDemoInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'bldDemoInfo'
            },
            typeInfo: '.ArrayOfBldDemoInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'GatewayBlockCInfoList',
        propertyInfos: [{
            name: 'gatewayBlockC',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'GatewayBlockC'
            },
            typeInfo: '.ArrayOfGatewayBlockCInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'BldDemoInfo',
        propertyInfos: [{
            name: 'description',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'description'
            },
            type: 'elementRef'
          }, {
            name: 'name',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'name'
            },
            type: 'elementRef'
          }, {
            name: 'sortOrder',
            elementName: {
              localPart: 'sort_order'
            },
            typeInfo: 'Int'
          }, {
            name: 'value',
            elementName: {
              localPart: 'value'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'FirmwareFileInfo',
        propertyInfos: [{
            name: 'fileID',
            elementName: {
              localPart: 'FileID'
            },
            typeInfo: 'Long'
          }, {
            name: 'fileName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'File_Name'
            },
            type: 'elementRef'
          }, {
            name: 'fileSize',
            elementName: {
              localPart: 'File_Size'
            },
            typeInfo: 'Long'
          }, {
            name: 'firmwareBuildNumber',
            elementName: {
              localPart: 'Firmware_Build_Number'
            },
            typeInfo: 'Int'
          }, {
            name: 'firmwareMajorVersion',
            elementName: {
              localPart: 'Firmware_Major_Version'
            },
            typeInfo: 'Int'
          }, {
            name: 'firmwareMinorVersion',
            elementName: {
              localPart: 'Firmware_Minor_Version'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'TStatInfo',
        propertyInfos: [{
            name: 'awayMode',
            elementName: {
              localPart: 'Away_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'centralZonedAway',
            elementName: {
              localPart: 'Central_Zoned_Away'
            },
            typeInfo: 'Int'
          }, {
            name: 'connectionStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ConnectionStatus'
            },
            type: 'elementRef'
          }, {
            name: 'coolSetPoint',
            elementName: {
              localPart: 'Cool_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'dateTimeMark',
            elementName: {
              localPart: 'DateTime_Mark'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'fanMode',
            elementName: {
              localPart: 'Fan_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'gmtToLocal',
            elementName: {
              localPart: 'GMT_To_Local'
            },
            typeInfo: 'Int'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'GatewaySN'
            },
            type: 'elementRef'
          }, {
            name: 'goldenTableUpdated',
            elementName: {
              localPart: 'Golden_Table_Updated'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'heatSetPoint',
            elementName: {
              localPart: 'Heat_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'indoorHumidity',
            elementName: {
              localPart: 'Indoor_Humidity'
            },
            typeInfo: 'Int'
          }, {
            name: 'indoorTemp',
            elementName: {
              localPart: 'Indoor_Temp'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'operationMode',
            elementName: {
              localPart: 'Operation_Mode'
            },
            typeInfo: 'Short'
          }, {
            name: 'prefTempUnits',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Pref_Temp_Units'
            },
            type: 'elementRef'
          }, {
            name: 'programScheduleMode',
            elementName: {
              localPart: 'Program_Schedule_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'programScheduleSelection',
            elementName: {
              localPart: 'Program_Schedule_Selection'
            },
            typeInfo: 'Short'
          }, {
            name: 'systemStatus',
            elementName: {
              localPart: 'System_Status'
            },
            typeInfo: 'Int'
          }, {
            name: 'zoneEnabled',
            elementName: {
              localPart: 'Zone_Enabled'
            },
            typeInfo: 'Int'
          }, {
            name: 'zoneName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Zone_Name'
            },
            type: 'elementRef'
          }, {
            name: 'zoneNumber',
            elementName: {
              localPart: 'Zone_Number'
            },
            typeInfo: 'Short'
          }, {
            name: 'zonesInstalled',
            elementName: {
              localPart: 'Zones_Installed'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'ArrayOfFirmwareDataInfo',
        propertyInfos: [{
            name: 'firmwareDataInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'FirmwareDataInfo'
            },
            typeInfo: '.FirmwareDataInfo'
          }]
      }, {
        localName: 'GatewayInfo',
        propertyInfos: [{
            name: 'coolSetPointHighLimit',
            elementName: {
              localPart: 'Cool_Set_Point_High_Limit'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'coolSetPointLowLimit',
            elementName: {
              localPart: 'Cool_Set_Point_Low_Limit'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'daylightSavingsTime',
            elementName: {
              localPart: 'Daylight_Savings_Time'
            },
            typeInfo: 'Int'
          }, {
            name: 'heatCoolDeadBand',
            elementName: {
              localPart: 'Heat_Cool_Dead_Band'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'heatSetPointHighLimit',
            elementName: {
              localPart: 'Heat_Set_Point_High_Limit'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'heatSetPointLowLimit',
            elementName: {
              localPart: 'Heat_Set_Point_Low_Limit'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'prefLanguageNbr',
            elementName: {
              localPart: 'Pref_Language_Nbr'
            },
            typeInfo: 'Int'
          }, {
            name: 'prefTempUnit',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Pref_Temp_Unit'
            },
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'systemID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'SystemID'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'AlertInfo',
        propertyInfos: [{
            name: 'alarmDescription',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Alarm_Description'
            },
            type: 'elementRef'
          }, {
            name: 'alarmNbr',
            elementName: {
              localPart: 'Alarm_Nbr'
            },
            typeInfo: 'Double'
          }, {
            name: 'alarmType',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Alarm_Type'
            },
            type: 'elementRef'
          }, {
            name: 'alarmValue',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Alarm_Value'
            },
            type: 'elementRef'
          }, {
            name: 'dateTimeReset',
            elementName: {
              localPart: 'DateTime_Reset'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'dateTimeSet',
            elementName: {
              localPart: 'DateTime_Set'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'status',
            elementName: {
              localPart: 'Status'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'MessageInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'messageInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'messageInfo'
            },
            typeInfo: '.ArrayOfMessageInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'AlertInfoList',
        propertyInfos: [{
            name: 'alerts',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Alerts'
            },
            typeInfo: '.ArrayOfAlertInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'StateProvInfo',
        propertyInfos: [{
            name: 'countryAbbrv',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Country_abbrv'
            },
            type: 'elementRef'
          }, {
            name: 'region',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Region'
            },
            type: 'elementRef'
          }, {
            name: 'regionCode',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Region_code'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'BuildingInfoList',
        propertyInfos: [{
            name: 'buildings',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Buildings'
            },
            typeInfo: '.ArrayOfBuildingInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'CountryInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'countryInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'countryInfo'
            },
            typeInfo: '.ArrayOfCountryInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'CountryInfo',
        propertyInfos: [{
            name: 'countryCode',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'country_code'
            },
            type: 'elementRef'
          }, {
            name: 'countryName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'country_name'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'UserDealerInfoList',
        propertyInfos: [{
            name: 'dealerinfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealerinfo'
            },
            typeInfo: '.ArrayOfUserDealerInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'SystemInfo',
        propertyInfos: [{
            name: 'buildingID',
            elementName: {
              localPart: 'BuildingID'
            },
            typeInfo: 'Long'
          }, {
            name: 'firmwareVer',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Firmware_Ver'
            },
            type: 'elementRef'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Gateway_SN'
            },
            type: 'elementRef'
          }, {
            name: 'registrationCompleteFlag',
            elementName: {
              localPart: 'RegistrationCompleteFlag'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'status',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Status'
            },
            type: 'elementRef'
          }, {
            name: 'systemID',
            elementName: {
              localPart: 'SystemID'
            },
            typeInfo: 'Long'
          }, {
            name: 'systemName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'System_Name'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfCountryInfo',
        propertyInfos: [{
            name: 'countryInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'CountryInfo'
            },
            typeInfo: '.CountryInfo'
          }]
      }, {
        localName: 'TStatInfoIn',
        propertyInfos: [{
            name: 'coolSetPoint',
            elementName: {
              localPart: 'Cool_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'fanMode',
            elementName: {
              localPart: 'Fan_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'GatewaySN'
            },
            type: 'elementRef'
          }, {
            name: 'heatSetPoint',
            elementName: {
              localPart: 'Heat_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'operationMode',
            elementName: {
              localPart: 'Operation_Mode'
            },
            typeInfo: 'Short'
          }, {
            name: 'prefTempUnits',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Pref_Temp_Units'
            },
            type: 'elementRef'
          }, {
            name: 'zoneNumber',
            elementName: {
              localPart: 'Zone_Number'
            },
            typeInfo: 'Short'
          }]
      }, {
        localName: 'UserDealerInfo',
        propertyInfos: [{
            name: 'buildingID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'BuildingID'
            },
            type: 'elementRef'
          }, {
            name: 'dealerID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'DealerID'
            },
            type: 'elementRef'
          }, {
            name: 'dealerAddr1',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Addr1'
            },
            type: 'elementRef'
          }, {
            name: 'dealerAddr2',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Addr2'
            },
            type: 'elementRef'
          }, {
            name: 'dealerCity',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_City'
            },
            type: 'elementRef'
          }, {
            name: 'dealerCountry',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Country'
            },
            type: 'elementRef'
          }, {
            name: 'dealerName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Name'
            },
            type: 'elementRef'
          }, {
            name: 'dealerNbr',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Nbr'
            },
            type: 'elementRef'
          }, {
            name: 'dealerPhone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Phone'
            },
            type: 'elementRef'
          }, {
            name: 'dealerStateProv',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_StateProv'
            },
            type: 'elementRef'
          }, {
            name: 'dealerWebsite',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Website'
            },
            type: 'elementRef'
          }, {
            name: 'dealerZIP',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_ZIP'
            },
            type: 'elementRef'
          }, {
            name: 'dealerEMail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_eMail'
            },
            type: 'elementRef'
          }, {
            name: 'userID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UserID'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'CustomerInfoList',
        propertyInfos: [{
            name: 'customers',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Customers'
            },
            typeInfo: '.ArrayOfCustomerInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'TStatLookupInfo',
        propertyInfos: [{
            name: 'langNbr',
            elementName: {
              localPart: 'Lang_Nbr'
            },
            typeInfo: 'Int'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'description',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'description'
            },
            type: 'elementRef'
          }, {
            name: 'name',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'name'
            },
            type: 'elementRef'
          }, {
            name: 'sortOrder',
            elementName: {
              localPart: 'sort_order'
            },
            typeInfo: 'Int'
          }, {
            name: 'value',
            elementName: {
              localPart: 'value'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'ArrayOfUserDealerInfo',
        propertyInfos: [{
            name: 'userDealerInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'UserDealerInfo'
            },
            typeInfo: '.UserDealerInfo'
          }]
      }, {
        localName: 'TStatScheduleInfo',
        propertyInfos: [{
            name: 'scheduleName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Schedule_Name'
            },
            type: 'elementRef'
          }, {
            name: 'scheduleNumber',
            elementName: {
              localPart: 'Schedule_Number'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'ArrayOfSystemInfo',
        propertyInfos: [{
            name: 'systemInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'SystemInfo'
            },
            typeInfo: '.SystemInfo'
          }]
      }, {
        localName: 'ArrayOfCustomerInfo',
        propertyInfos: [{
            name: 'customerInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'CustomerInfo'
            },
            typeInfo: '.CustomerInfo'
          }]
      }, {
        localName: 'EquipmentInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'equipmentInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'equipmentInfo'
            },
            typeInfo: '.ArrayOfEquipmentInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfWeatherForecastInfo',
        propertyInfos: [{
            name: 'weatherForecastInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'WeatherForecastInfo'
            },
            typeInfo: '.WeatherForecastInfo'
          }]
      }, {
        localName: 'StateProvInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'stateProvinces',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'StateProvinces'
            },
            typeInfo: '.ArrayOfStateProvInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'BuildingDealerInfo',
        propertyInfos: [{
            name: 'dealerAlertsDlrWants',
            elementName: {
              localPart: 'DealerAlerts_DlrWants'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerAlertsOwnerAllow',
            elementName: {
              localPart: 'DealerAlerts_OwnerAllow'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerReminderDlrWants',
            elementName: {
              localPart: 'DealerReminder_DlrWants'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerReminderOwnerAllow',
            elementName: {
              localPart: 'DealerReminder_OwnerAllow'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerTStatView',
            elementName: {
              localPart: 'DealerTStatView'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerAddr1',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Addr1'
            },
            type: 'elementRef'
          }, {
            name: 'dealerAddr2',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Addr2'
            },
            type: 'elementRef'
          }, {
            name: 'dealerCity',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_City'
            },
            type: 'elementRef'
          }, {
            name: 'dealerCountry',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Country'
            },
            type: 'elementRef'
          }, {
            name: 'dealerName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Name'
            },
            type: 'elementRef'
          }, {
            name: 'dealerNbr',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Nbr'
            },
            type: 'elementRef'
          }, {
            name: 'dealerPhone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Phone'
            },
            type: 'elementRef'
          }, {
            name: 'dealerStateProv',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_StateProv'
            },
            type: 'elementRef'
          }, {
            name: 'dealerWebsite',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Website'
            },
            type: 'elementRef'
          }, {
            name: 'dealerZIP',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_ZIP'
            },
            type: 'elementRef'
          }, {
            name: 'dealerEMail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_eMail'
            },
            type: 'elementRef'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Gateway_SN'
            },
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'CustomerInfo',
        propertyInfos: [{
            name: 'addr1',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Addr1'
            },
            type: 'elementRef'
          }, {
            name: 'addr2',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Addr2'
            },
            type: 'elementRef'
          }, {
            name: 'buildingAlert',
            elementName: {
              localPart: 'BuildingAlert'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'buildingID',
            elementName: {
              localPart: 'BuildingID'
            },
            typeInfo: 'Long'
          }, {
            name: 'buildingReminder',
            elementName: {
              localPart: 'BuildingReminder'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'city',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'City'
            },
            type: 'elementRef'
          }, {
            name: 'country',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Country'
            },
            type: 'elementRef'
          }, {
            name: 'dealerAlertsDlrWants',
            elementName: {
              localPart: 'DealerAlerts_DlrWants'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerAlertsOwnerAllow',
            elementName: {
              localPart: 'DealerAlerts_OwnerAllow'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerReminderDlrWants',
            elementName: {
              localPart: 'DealerReminder_DlrWants'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerReminderOwnerAllow',
            elementName: {
              localPart: 'DealerReminder_OwnerAllow'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'dealerTStatView',
            elementName: {
              localPart: 'DealerTStatView'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'firstName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'FirstName'
            },
            type: 'elementRef'
          }, {
            name: 'lastName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'LastName'
            },
            type: 'elementRef'
          }, {
            name: 'latitude',
            elementName: {
              localPart: 'Latitude'
            },
            typeInfo: 'Double'
          }, {
            name: 'longitude',
            elementName: {
              localPart: 'Longitude'
            },
            typeInfo: 'Double'
          }, {
            name: 'mobilePhone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'MobilePhone'
            },
            type: 'elementRef'
          }, {
            name: 'notificationEmail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'NotificationEmail'
            },
            type: 'elementRef'
          }, {
            name: 'phone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Phone'
            },
            type: 'elementRef'
          }, {
            name: 'stProv',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'St_Prov'
            },
            type: 'elementRef'
          }, {
            name: 'status',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Status'
            },
            type: 'elementRef'
          }, {
            name: 'userID',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UserID'
            },
            type: 'elementRef'
          }, {
            name: 'zippc',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ZIP_PC'
            },
            type: 'elementRef'
          }, {
            name: 'eMail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'eMail'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'SystemInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'systems',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Systems'
            },
            typeInfo: '.ArrayOfSystemInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfTStatScheduleInfo',
        propertyInfos: [{
            name: 'tStatScheduleInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'TStatScheduleInfo'
            },
            typeInfo: '.TStatScheduleInfo'
          }]
      }, {
        localName: 'EmailContentInfo',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'emailBody',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'email_body'
            },
            type: 'elementRef'
          }, {
            name: 'emailSubject',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'email_subject'
            },
            type: 'elementRef'
          }, {
            name: 'sortOrder',
            elementName: {
              localPart: 'sort_order'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'ArrayOfStateProvInfo',
        propertyInfos: [{
            name: 'stateProvInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'StateProvInfo'
            },
            typeInfo: '.StateProvInfo'
          }]
      }, {
        localName: 'ProgramInfoIn',
        propertyInfos: [{
            name: 'coolSetPoint',
            elementName: {
              localPart: 'Cool_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'fanMode',
            elementName: {
              localPart: 'Fan_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'gatewaySN',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'GatewaySN'
            },
            type: 'elementRef'
          }, {
            name: 'heatSetPoint',
            elementName: {
              localPart: 'Heat_Set_Point'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'operationMode',
            elementName: {
              localPart: 'Operation_Mode'
            },
            typeInfo: 'Short'
          }, {
            name: 'prefTempUnits',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Pref_Temp_Units'
            },
            type: 'elementRef'
          }, {
            name: 'programScheduleMode',
            elementName: {
              localPart: 'Program_Schedule_Mode'
            },
            typeInfo: 'Int'
          }, {
            name: 'programScheduleSelection',
            elementName: {
              localPart: 'Program_Schedule_Selection'
            },
            typeInfo: 'Short'
          }, {
            name: 'zoneNumber',
            elementName: {
              localPart: 'Zone_Number'
            },
            typeInfo: 'Short'
          }]
      }, {
        localName: 'TStatLookupInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'tStatlookupInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'tStatlookupInfo'
            },
            typeInfo: '.ArrayOfTStatLookupInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfEquipmentInfo',
        propertyInfos: [{
            name: 'equipmentInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'EquipmentInfo'
            },
            typeInfo: '.EquipmentInfo'
          }]
      }, {
        localName: 'AppParamInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'appParamInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'appParamInfo'
            },
            typeInfo: '.ArrayOfAppParamInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'EmailContentInfoList',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'emailInfo',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'emailInfo'
            },
            typeInfo: '.ArrayOfEmailContentInfo',
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfGatewayBlockCInfo',
        propertyInfos: [{
            name: 'gatewayBlockCInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'GatewayBlockCInfo'
            },
            typeInfo: '.GatewayBlockCInfo'
          }]
      }, {
        localName: 'MessageInfo',
        propertyInfos: [{
            name: 'msgCode',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'msg_code'
            },
            type: 'elementRef'
          }, {
            name: 'msgDesc',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'msg_desc'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'WeatherForecastInfo',
        propertyInfos: [{
            name: 'chanceOfRain',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Chance_of_rain'
            },
            type: 'elementRef'
          }, {
            name: 'date',
            elementName: {
              localPart: 'Date'
            },
            typeInfo: 'DateTime'
          }, {
            name: 'description',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Description'
            },
            type: 'elementRef'
          }, {
            name: 'highTemp',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'High_temp'
            },
            type: 'elementRef'
          }, {
            name: 'iconNbr',
            elementName: {
              localPart: 'Icon_Nbr'
            },
            typeInfo: 'Int'
          }, {
            name: 'lowTemp',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Low_temp'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'ArrayOfFirmwareFileInfo',
        propertyInfos: [{
            name: 'firmwareFileInfo',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'FirmwareFileInfo'
            },
            typeInfo: '.FirmwareFileInfo'
          }]
      }, {
        localName: 'DealerInfo',
        propertyInfos: [{
            name: 'dealerAddr1',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Addr1'
            },
            type: 'elementRef'
          }, {
            name: 'dealerAddr2',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Addr2'
            },
            type: 'elementRef'
          }, {
            name: 'dealerCity',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_City'
            },
            type: 'elementRef'
          }, {
            name: 'dealerCountry',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Country'
            },
            type: 'elementRef'
          }, {
            name: 'dealerName',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Name'
            },
            type: 'elementRef'
          }, {
            name: 'dealerNbr',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Nbr'
            },
            type: 'elementRef'
          }, {
            name: 'dealerPhone',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Phone'
            },
            type: 'elementRef'
          }, {
            name: 'dealerStateProv',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_StateProv'
            },
            type: 'elementRef'
          }, {
            name: 'dealerWebsite',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_Website'
            },
            type: 'elementRef'
          }, {
            name: 'dealerZIP',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_ZIP'
            },
            type: 'elementRef'
          }, {
            name: 'dealerEMail',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'Dealer_eMail'
            },
            type: 'elementRef'
          }, {
            name: 'receiveAlerts',
            elementName: {
              localPart: 'Receive_alerts'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'receiveReminders',
            elementName: {
              localPart: 'Receive_reminders'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'URLInfo',
        propertyInfos: [{
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }, {
            name: 'url',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'URL'
            },
            type: 'elementRef'
          }]
      }, {
        localName: 'FirmwareFileInfoList',
        propertyInfos: [{
            name: 'firmwareFile',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'FirmwareFile'
            },
            typeInfo: '.ArrayOfFirmwareFileInfo',
            type: 'elementRef'
          }, {
            name: 'returnStatus',
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'ReturnStatus'
            },
            type: 'elementRef'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.BuildingInfoList'
      }, {
        typeInfo: '.StateProvInfo',
        elementName: {
          localPart: 'StateProvInfo'
        }
      }, {
        typeInfo: '.ArrayOfBuildingInfo',
        elementName: {
          localPart: 'ArrayOfBuildingInfo'
        }
      }, {
        typeInfo: '.ArrayOfCustomerInfo',
        elementName: {
          localPart: 'ArrayOfCustomerInfo'
        }
      }, {
        typeInfo: '.ArrayOfTStatScheduleInfo',
        elementName: {
          localPart: 'ArrayOfTStatScheduleInfo'
        }
      }, {
        typeInfo: '.BuildingInfoList',
        elementName: {
          localPart: 'BuildingInfoList'
        }
      }, {
        elementName: {
          localPart: 'Pref_Temp_Units'
        },
        scope: '.TStatInfoIn'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.TStatScheduleInfoList'
      }, {
        typeInfo: '.ArrayOfBldDemoInfo',
        elementName: {
          localPart: 'bldDemoInfo'
        },
        scope: '.BldDemoInfoList'
      }, {
        elementName: {
          localPart: 'eMail'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Phone'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'eMail'
        },
        scope: '.OwnerProfileInfo'
      }, {
        typeInfo: '.EmailContentInfo',
        elementName: {
          localPart: 'EmailContentInfo'
        }
      }, {
        elementName: {
          localPart: 'NotificationEmail'
        },
        scope: '.BuildingInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.WeatherInfo'
      }, {
        elementName: {
          localPart: 'FirstName'
        },
        scope: '.CustomerInfo'
      }, {
        typeInfo: '.ArrayOfEquipmentInfo',
        elementName: {
          localPart: 'equipmentInfo'
        },
        scope: '.EquipmentInfoList'
      }, {
        typeInfo: '.ArrayOfFirmwareDataInfo',
        elementName: {
          localPart: 'FirmwareData'
        },
        scope: '.FirmwareDataInfoList'
      }, {
        elementName: {
          localPart: 'File_Name'
        },
        scope: '.FirmwareDataInfo'
      }, {
        elementName: {
          localPart: 'description'
        },
        scope: '.BldDemoInfo'
      }, {
        elementName: {
          localPart: 'St_Prov'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_StateProv'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'City'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Country'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'LastName'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'MobilePhone'
        },
        scope: '.OwnerProfileInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.MessageInfoList'
      }, {
        elementName: {
          localPart: 'Dealer_Addr1'
        },
        scope: '.DealerInfo'
      }, {
        typeInfo: '.AlertInfo',
        elementName: {
          localPart: 'AlertInfo'
        }
      }, {
        elementName: {
          localPart: 'Current_temp'
        },
        scope: '.WeatherInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Addr2'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.StateProvInfoList'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.FirmwareFileInfoList'
      }, {
        elementName: {
          localPart: 'City'
        },
        scope: '.BuildingInfo'
      }, {
        typeInfo: '.SystemInfoList',
        elementName: {
          localPart: 'SystemInfoList'
        }
      }, {
        typeInfo: '.ArrayOfEmailContentInfo',
        elementName: {
          localPart: 'emailInfo'
        },
        scope: '.EmailContentInfoList'
      }, {
        elementName: {
          localPart: 'UserID'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.TStatInfoList'
      }, {
        typeInfo: '.ArrayOfGatewayBlockCInfo',
        elementName: {
          localPart: 'ArrayOfGatewayBlockCInfo'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Nbr'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.EmailContentInfoList'
      }, {
        elementName: {
          localPart: 'Alarm_Value'
        },
        scope: '.AlertInfo'
      }, {
        typeInfo: '.ArrayOfWeatherForecastInfo',
        elementName: {
          localPart: 'forecastInfo'
        },
        scope: '.WeatherInfo'
      }, {
        typeInfo: '.ArrayOfTStatScheduleInfo',
        elementName: {
          localPart: 'tStatScheduleInfo'
        },
        scope: '.TStatScheduleInfoList'
      }, {
        typeInfo: '.ArrayOfAlertInfo',
        elementName: {
          localPart: 'Alerts'
        },
        scope: '.AlertInfoList'
      }, {
        typeInfo: '.EmailContentInfoList',
        elementName: {
          localPart: 'EmailContentInfoList'
        }
      }, {
        typeInfo: '.DealerInfo',
        elementName: {
          localPart: 'DealerInfo'
        }
      }, {
        elementName: {
          localPart: 'Control_Model_Nbr'
        },
        scope: '.EquipmentInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Addr1'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'Control_Model_Number'
        },
        scope: '.FirmwareDataInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Website'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'UserID'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'GatewaySN'
        },
        scope: '.ProgramInfoOut'
      }, {
        typeInfo: '.ArrayOfBuildingInfo',
        elementName: {
          localPart: 'Buildings'
        },
        scope: '.BuildingInfoList'
      }, {
        typeInfo: '.CustomerInfoList',
        elementName: {
          localPart: 'CustomerInfoList'
        }
      }, {
        typeInfo: '.SystemInfo',
        elementName: {
          localPart: 'SystemInfo'
        }
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.EquipmentInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.CustomerInfoList'
      }, {
        elementName: {
          localPart: 'Dealer_Nbr'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'High_temp'
        },
        scope: '.WeatherForecastInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.AlertInfoList'
      }, {
        elementName: {
          localPart: 'Pref_Temp_Unit'
        },
        scope: '.GatewayInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.GatewayInfo'
      }, {
        typeInfo: '.UserDealerInfo',
        elementName: {
          localPart: 'UserDealerInfo'
        }
      }, {
        elementName: {
          localPart: 'GatewaySN'
        },
        scope: '.TStatInfoIn'
      }, {
        typeInfo: '.FirmwareDataInfo',
        elementName: {
          localPart: 'FirmwareDataInfo'
        }
      }, {
        elementName: {
          localPart: 'parameter_value'
        },
        scope: '.AppParamInfo'
      }, {
        elementName: {
          localPart: 'msg_code'
        },
        scope: '.MessageInfo'
      }, {
        elementName: {
          localPart: 'Country'
        },
        scope: '.CustomerInfo'
      }, {
        typeInfo: '.AlertInfoList',
        elementName: {
          localPart: 'AlertInfoList'
        }
      }, {
        elementName: {
          localPart: 'Dealer_City'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'Addr2'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Name'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_eMail'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.ArrayOfTStatLookupInfo',
        elementName: {
          localPart: 'ArrayOfTStatLookupInfo'
        }
      }, {
        typeInfo: '.ArrayOfFirmwareFileInfo',
        elementName: {
          localPart: 'FirmwareFile'
        },
        scope: '.FirmwareFileInfoList'
      }, {
        typeInfo: '.BldDemoInfoList',
        elementName: {
          localPart: 'BldDemoInfoList'
        }
      }, {
        elementName: {
          localPart: 'Region_code'
        },
        scope: '.StateProvInfo'
      }, {
        elementName: {
          localPart: 'ConnectionStatus'
        },
        scope: '.TStatInfo'
      }, {
        typeInfo: '.WeatherInfo',
        elementName: {
          localPart: 'WeatherInfo'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Website'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.ArrayOfGatewayBlockCInfo',
        elementName: {
          localPart: 'GatewayBlockC'
        },
        scope: '.GatewayBlockCInfoList'
      }, {
        elementName: {
          localPart: 'GatewaySN'
        },
        scope: '.TStatInfo'
      }, {
        elementName: {
          localPart: 'Phone'
        },
        scope: '.CustomerInfo'
      }, {
        typeInfo: '.ArrayOfEquipmentInfo',
        elementName: {
          localPart: 'ArrayOfEquipmentInfo'
        }
      }, {
        typeInfo: '.TStatScheduleInfoList',
        elementName: {
          localPart: 'TStatScheduleInfoList'
        }
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.SystemInfoList'
      }, {
        typeInfo: '.TStatLookupInfoList',
        elementName: {
          localPart: 'TStatLookupInfoList'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Name'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'UserID'
        },
        scope: '.OwnerProfileInfo'
      }, {
        elementName: {
          localPart: 'Dealer_ZIP'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Addr1'
        },
        scope: '.BuildingDealerInfo'
      }, {
        typeInfo: '.GatewayBlockCInfo',
        elementName: {
          localPart: 'GatewayBlockCInfo'
        }
      }, {
        elementName: {
          localPart: 'Chance_of_rain'
        },
        scope: '.WeatherForecastInfo'
      }, {
        typeInfo: '.ArrayOfSystemInfo',
        elementName: {
          localPart: 'Systems'
        },
        scope: '.SystemInfoList'
      }, {
        elementName: {
          localPart: 'Pref_Temp_Units'
        },
        scope: '.TStatInfo'
      }, {
        typeInfo: '.MessageInfo',
        elementName: {
          localPart: 'MessageInfo'
        }
      }, {
        elementName: {
          localPart: 'Pref_Temp_Units'
        },
        scope: '.ProgramInfoIn'
      }, {
        elementName: {
          localPart: 'Zone_Name'
        },
        scope: '.TStatInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.UserDealerInfoList'
      }, {
        elementName: {
          localPart: 'GatewaySN'
        },
        scope: '.ProgramInfoIn'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'email_subject'
        },
        scope: '.EmailContentInfo'
      }, {
        elementName: {
          localPart: 'Country_abbrv'
        },
        scope: '.StateProvInfo'
      }, {
        typeInfo: '.TStatInfo',
        elementName: {
          localPart: 'TStatInfo'
        }
      }, {
        elementName: {
          localPart: 'description'
        },
        scope: '.AppParamInfo'
      }, {
        elementName: {
          localPart: 'MobilePhone'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'Idle_Polling_Rate'
        },
        scope: '.GatewayBlockCInfo'
      }, {
        typeInfo: '.URLInfo',
        elementName: {
          localPart: 'URLInfo'
        }
      }, {
        typeInfo: '.CustomerInfo',
        elementName: {
          localPart: 'CustomerInfo'
        }
      }, {
        typeInfo: '.FirmwareFileInfoList',
        elementName: {
          localPart: 'FirmwareFileInfoList'
        }
      }, {
        elementName: {
          localPart: 'Country'
        },
        scope: '.BuildingInfo'
      }, {
        elementName: {
          localPart: 'NotificationEmail'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'St_Prov'
        },
        scope: '.BuildingInfo'
      }, {
        typeInfo: '.ArrayOfWeatherForecastInfo',
        elementName: {
          localPart: 'ArrayOfWeatherForecastInfo'
        }
      }, {
        elementName: {
          localPart: 'Friendly_Name'
        },
        scope: '.EquipmentInfo'
      }, {
        elementName: {
          localPart: 'Region'
        },
        scope: '.StateProvInfo'
      }, {
        typeInfo: '.GatewayInfo',
        elementName: {
          localPart: 'GatewayInfo'
        }
      }, {
        typeInfo: '.TStatInfoIn',
        elementName: {
          localPart: 'TStatInfoIn'
        }
      }, {
        elementName: {
          localPart: 'State'
        },
        scope: '.WeatherInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.AppParamInfoList'
      }, {
        elementName: {
          localPart: 'country_name'
        },
        scope: '.CountryInfo'
      }, {
        typeInfo: '.ArrayOfAppParamInfo',
        elementName: {
          localPart: 'appParamInfo'
        },
        scope: '.AppParamInfoList'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.EmailContentInfo'
      }, {
        elementName: {
          localPart: 'country_code'
        },
        scope: '.CountryInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.EquipmentInfoList'
      }, {
        elementName: {
          localPart: 'name'
        },
        scope: '.BldDemoInfo'
      }, {
        elementName: {
          localPart: 'Dealer_eMail'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_City'
        },
        scope: '.DealerInfo'
      }, {
        typeInfo: '.FirmwareFileInfo',
        elementName: {
          localPart: 'FirmwareFileInfo'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Country'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.BuildingDealerInfo',
        elementName: {
          localPart: 'BuildingDealerInfo'
        }
      }, {
        typeInfo: '.FirmwareDataInfoList',
        elementName: {
          localPart: 'FirmwareDataInfoList'
        }
      }, {
        typeInfo: '.ArrayOfCustomerInfo',
        elementName: {
          localPart: 'Customers'
        },
        scope: '.CustomerInfoList'
      }, {
        elementName: {
          localPart: 'Addr1'
        },
        scope: '.BuildingInfo'
      }, {
        typeInfo: '.CountryInfo',
        elementName: {
          localPart: 'CountryInfo'
        }
      }, {
        typeInfo: '.WeatherForecastInfo',
        elementName: {
          localPart: 'WeatherForecastInfo'
        }
      }, {
        typeInfo: '.ArrayOfCountryInfo',
        elementName: {
          localPart: 'ArrayOfCountryInfo'
        }
      }, {
        elementName: {
          localPart: 'UtilityCompany'
        },
        scope: '.BuildingInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Addr2'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.EquipmentInfo',
        elementName: {
          localPart: 'EquipmentInfo'
        }
      }, {
        elementName: {
          localPart: 'Serial_number_From'
        },
        scope: '.FirmwareDataInfo'
      }, {
        typeInfo: '.ArrayOfUserDealerInfo',
        elementName: {
          localPart: 'Dealerinfo'
        },
        scope: '.UserDealerInfoList'
      }, {
        elementName: {
          localPart: 'ZIP_PC'
        },
        scope: '.BuildingInfo'
      }, {
        elementName: {
          localPart: 'SystemID'
        },
        scope: '.GatewayInfo'
      }, {
        elementName: {
          localPart: 'email_body'
        },
        scope: '.EmailContentInfo'
      }, {
        typeInfo: '.StateProvInfoList',
        elementName: {
          localPart: 'StateProvInfoList'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Website'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.TStatLookupInfoList'
      }, {
        elementName: {
          localPart: 'URL'
        },
        scope: '.URLInfo'
      }, {
        elementName: {
          localPart: 'LastName'
        },
        scope: '.OwnerProfileInfo'
      }, {
        elementName: {
          localPart: 'Status'
        },
        scope: '.CustomerInfo'
      }, {
        typeInfo: '.ProgramInfoOut',
        elementName: {
          localPart: 'ProgramInfoOut'
        }
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.URLInfo'
      }, {
        typeInfo: '.ArrayOfAlertInfo',
        elementName: {
          localPart: 'ArrayOfAlertInfo'
        }
      }, {
        elementName: {
          localPart: 'Building_Name'
        },
        scope: '.BuildingInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.GatewayBlockCInfoList'
      }, {
        elementName: {
          localPart: 'Status'
        },
        scope: '.SystemInfo'
      }, {
        elementName: {
          localPart: 'parameter_name'
        },
        scope: '.AppParamInfo'
      }, {
        elementName: {
          localPart: 'Control_Serial_Number'
        },
        scope: '.EquipmentInfo'
      }, {
        elementName: {
          localPart: 'Addr2'
        },
        scope: '.BuildingInfo'
      }, {
        typeInfo: '.BuildingInfo',
        elementName: {
          localPart: 'BuildingInfo'
        }
      }, {
        typeInfo: '.OwnerProfileInfo',
        elementName: {
          localPart: 'OwnerProfileInfo'
        }
      }, {
        typeInfo: '.TStatLookupInfo',
        elementName: {
          localPart: 'TStatLookupInfo'
        }
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.ProgramInfoOut'
      }, {
        typeInfo: '.ArrayOfStateProvInfo',
        elementName: {
          localPart: 'StateProvinces'
        },
        scope: '.StateProvInfoList'
      }, {
        elementName: {
          localPart: 'Addr1'
        },
        scope: '.CustomerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_City'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'UserID'
        },
        scope: '.BuildingInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.TStatLookupInfo'
      }, {
        elementName: {
          localPart: 'Firmware_Ver'
        },
        scope: '.SystemInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Nbr'
        },
        scope: '.BuildingDealerInfo'
      }, {
        typeInfo: '.ArrayOfUserDealerInfo',
        elementName: {
          localPart: 'ArrayOfUserDealerInfo'
        }
      }, {
        typeInfo: '.ArrayOfMessageInfo',
        elementName: {
          localPart: 'messageInfo'
        },
        scope: '.MessageInfoList'
      }, {
        typeInfo: '.ArrayOfEmailContentInfo',
        elementName: {
          localPart: 'ArrayOfEmailContentInfo'
        }
      }, {
        typeInfo: '.GatewayBlockCInfoList',
        elementName: {
          localPart: 'GatewayBlockCInfoList'
        }
      }, {
        typeInfo: '.ArrayOfCountryInfo',
        elementName: {
          localPart: 'countryInfo'
        },
        scope: '.CountryInfoList'
      }, {
        typeInfo: '.TStatScheduleInfo',
        elementName: {
          localPart: 'TStatScheduleInfo'
        }
      }, {
        elementName: {
          localPart: 'name'
        },
        scope: '.TStatLookupInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.BldDemoInfoList'
      }, {
        elementName: {
          localPart: 'Description'
        },
        scope: '.WeatherForecastInfo'
      }, {
        typeInfo: '.TStatInfoList',
        elementName: {
          localPart: 'TStatInfoList'
        }
      }, {
        elementName: {
          localPart: 'BuildingID'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.AppParamInfoList',
        elementName: {
          localPart: 'AppParamInfoList'
        }
      }, {
        typeInfo: '.ArrayOfFirmwareDataInfo',
        elementName: {
          localPart: 'ArrayOfFirmwareDataInfo'
        }
      }, {
        elementName: {
          localPart: 'City'
        },
        scope: '.WeatherInfo'
      }, {
        typeInfo: '.BldDemoInfo',
        elementName: {
          localPart: 'BldDemoInfo'
        }
      }, {
        elementName: {
          localPart: 'File_Name'
        },
        scope: '.FirmwareFileInfo'
      }, {
        elementName: {
          localPart: 'msg_desc'
        },
        scope: '.MessageInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Name'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_StateProv'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.ArrayOfTStatLookupInfo',
        elementName: {
          localPart: 'tStatlookupInfo'
        },
        scope: '.TStatLookupInfoList'
      }, {
        elementName: {
          localPart: 'description'
        },
        scope: '.TStatLookupInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Phone'
        },
        scope: '.UserDealerInfo'
      }, {
        typeInfo: '.CountryInfoList',
        elementName: {
          localPart: 'CountryInfoList'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Country'
        },
        scope: '.DealerInfo'
      }, {
        elementName: {
          localPart: 'DealerID'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'Description'
        },
        scope: '.WeatherInfo'
      }, {
        typeInfo: '.ProgramInfoIn',
        elementName: {
          localPart: 'ProgramInfoIn'
        }
      }, {
        typeInfo: '.ArrayOfTStatInfo',
        elementName: {
          localPart: 'tStatInfo'
        },
        scope: '.TStatInfoList'
      }, {
        typeInfo: '.UserDealerInfoList',
        elementName: {
          localPart: 'UserDealerInfoList'
        }
      }, {
        elementName: {
          localPart: 'GatewaySN'
        },
        scope: '.GatewayBlockCInfo'
      }, {
        elementName: {
          localPart: 'Low_temp'
        },
        scope: '.WeatherForecastInfo'
      }, {
        elementName: {
          localPart: 'Dealer_eMail'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'Alarm_Description'
        },
        scope: '.AlertInfo'
      }, {
        typeInfo: '.ArrayOfMessageInfo',
        elementName: {
          localPart: 'ArrayOfMessageInfo'
        }
      }, {
        typeInfo: '.ArrayOfFirmwareFileInfo',
        elementName: {
          localPart: 'ArrayOfFirmwareFileInfo'
        }
      }, {
        elementName: {
          localPart: 'Gateway_SN'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'Dealer_Phone'
        },
        scope: '.BuildingDealerInfo'
      }, {
        typeInfo: '.EquipmentInfoList',
        elementName: {
          localPart: 'EquipmentInfoList'
        }
      }, {
        elementName: {
          localPart: 'FirstName'
        },
        scope: '.OwnerProfileInfo'
      }, {
        typeInfo: '.MessageInfoList',
        elementName: {
          localPart: 'MessageInfoList'
        }
      }, {
        typeInfo: '.ArrayOfStateProvInfo',
        elementName: {
          localPart: 'ArrayOfStateProvInfo'
        }
      }, {
        elementName: {
          localPart: 'System_Name'
        },
        scope: '.SystemInfo'
      }, {
        typeInfo: '.ArrayOfBldDemoInfo',
        elementName: {
          localPart: 'ArrayOfBldDemoInfo'
        }
      }, {
        elementName: {
          localPart: 'Schedule_Name'
        },
        scope: '.TStatScheduleInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.FirmwareDataInfoList'
      }, {
        elementName: {
          localPart: 'Dealer_ZIP'
        },
        scope: '.DealerInfo'
      }, {
        typeInfo: '.AppParamInfo',
        elementName: {
          localPart: 'AppParamInfo'
        }
      }, {
        elementName: {
          localPart: 'Dealer_Addr2'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'Gateway_SN'
        },
        scope: '.SystemInfo'
      }, {
        elementName: {
          localPart: 'Chance_of_rain'
        },
        scope: '.WeatherInfo'
      }, {
        elementName: {
          localPart: 'Alarm_Type'
        },
        scope: '.AlertInfo'
      }, {
        elementName: {
          localPart: 'Phone'
        },
        scope: '.OwnerProfileInfo'
      }, {
        elementName: {
          localPart: 'Serial_number_To'
        },
        scope: '.FirmwareDataInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.OwnerProfileInfo'
      }, {
        elementName: {
          localPart: 'Dealer_ZIP'
        },
        scope: '.UserDealerInfo'
      }, {
        elementName: {
          localPart: 'ReturnStatus'
        },
        scope: '.CountryInfoList'
      }, {
        typeInfo: '.ArrayOfTStatInfo',
        elementName: {
          localPart: 'ArrayOfTStatInfo'
        }
      }, {
        elementName: {
          localPart: 'Dealer_StateProv'
        },
        scope: '.BuildingDealerInfo'
      }, {
        elementName: {
          localPart: 'ZIP_PC'
        },
        scope: '.CustomerInfo'
      }, {
        typeInfo: '.ArrayOfAppParamInfo',
        elementName: {
          localPart: 'ArrayOfAppParamInfo'
        }
      }, {
        typeInfo: '.ArrayOfSystemInfo',
        elementName: {
          localPart: 'ArrayOfSystemInfo'
        }
      }]
  };
  return {
    generated: generated
  };
};
if (typeof define === 'function' && define.amd) {
  define([], generated_Module_Factory);
}
else {
  var generated_Module = generated_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.generated = generated_Module.generated;
  }
  else {
    var generated = generated_Module.generated;
  }
}