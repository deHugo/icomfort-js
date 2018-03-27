var com_microsoft_schemas__2003__10_serialization_Module_Factory = function () {
  var com_microsoft_schemas__2003__10_serialization = {
    name: 'com_microsoft_schemas__2003__10_serialization',
    defaultElementNamespaceURI: 'http:\/\/schemas.microsoft.com\/2003\/10\/Serialization\/',
    typeInfos: [],
    elementInfos: [{
        typeInfo: 'UnsignedByte',
        elementName: 'unsignedByte'
      }, {
        typeInfo: 'Long',
        elementName: 'long'
      }, {
        typeInfo: 'DateTime',
        elementName: 'dateTime'
      }, {
        typeInfo: 'Boolean',
        elementName: 'boolean'
      }, {
        typeInfo: 'QName',
        elementName: 'QName'
      }, {
        typeInfo: 'Double',
        elementName: 'double'
      }, {
        typeInfo: 'Duration',
        elementName: 'duration'
      }, {
        typeInfo: 'Base64Binary',
        elementName: 'base64Binary'
      }, {
        typeInfo: 'Byte',
        elementName: 'byte'
      }, {
        elementName: 'guid'
      }, {
        elementName: 'anyURI'
      }, {
        typeInfo: 'Int',
        elementName: 'char'
      }, {
        typeInfo: 'Float',
        elementName: 'float'
      }, {
        typeInfo: 'Short',
        elementName: 'short'
      }, {
        typeInfo: 'Int',
        elementName: 'int'
      }, {
        typeInfo: 'Decimal',
        elementName: 'decimal'
      }, {
        typeInfo: 'UnsignedLong',
        elementName: 'unsignedLong'
      }, {
        typeInfo: 'UnsignedShort',
        elementName: 'unsignedShort'
      }, {
        typeInfo: 'AnyType',
        elementName: 'anyType'
      }, {
        typeInfo: 'UnsignedInt',
        elementName: 'unsignedInt'
      }, {
        elementName: 'string'
      }]
  };
  return {
    com_microsoft_schemas__2003__10_serialization: com_microsoft_schemas__2003__10_serialization
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_microsoft_schemas__2003__10_serialization_Module_Factory);
}
else {
  var com_microsoft_schemas__2003__10_serialization_Module = com_microsoft_schemas__2003__10_serialization_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_microsoft_schemas__2003__10_serialization = com_microsoft_schemas__2003__10_serialization_Module.com_microsoft_schemas__2003__10_serialization;
  }
  else {
    var com_microsoft_schemas__2003__10_serialization = com_microsoft_schemas__2003__10_serialization_Module.com_microsoft_schemas__2003__10_serialization;
  }
}