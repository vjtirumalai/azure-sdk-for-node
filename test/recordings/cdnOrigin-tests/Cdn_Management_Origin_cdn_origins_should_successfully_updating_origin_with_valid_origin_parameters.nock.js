// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02', '*')
  .reply(202, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/acde1caf-7d27-4d4d-a8a2-d361d6cb3ce4/profileresults/cdnTestProfile86/endpointresults/cdnTestEndpoint7658/originresults/newname?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '7359f70c-90f9-4fe9-b907-b3bd35921766',
  'x-ms-client-request-id': '1d520d20-8996-4577-abd5-9b1604e1c2a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/acde1caf-7d27-4d4d-a8a2-d361d6cb3ce4?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5674d78d-4a3d-4716-a6e3-0483c41a2550',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211620Z:5674d78d-4a3d-4716-a6e3-0483c41a2550',
  date: 'Mon, 31 Oct 2016 21:16:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02', '*')
  .reply(202, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/acde1caf-7d27-4d4d-a8a2-d361d6cb3ce4/profileresults/cdnTestProfile86/endpointresults/cdnTestEndpoint7658/originresults/newname?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '7359f70c-90f9-4fe9-b907-b3bd35921766',
  'x-ms-client-request-id': '1d520d20-8996-4577-abd5-9b1604e1c2a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/acde1caf-7d27-4d4d-a8a2-d361d6cb3ce4?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5674d78d-4a3d-4716-a6e3-0483c41a2550',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211620Z:5674d78d-4a3d-4716-a6e3-0483c41a2550',
  date: 'Mon, 31 Oct 2016 21:16:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/acde1caf-7d27-4d4d-a8a2-d361d6cb3ce4?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'dbdb8d0a-a5dd-441f-a7f3-20a118279da0',
  'x-ms-client-request-id': '3aaca451-395e-4cb5-a5b9-f790feddcd8b',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '624f4952-59cf-4add-8130-fe20c7fa6f3c',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211651Z:624f4952-59cf-4add-8130-fe20c7fa6f3c',
  date: 'Mon, 31 Oct 2016 21:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/acde1caf-7d27-4d4d-a8a2-d361d6cb3ce4?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'dbdb8d0a-a5dd-441f-a7f3-20a118279da0',
  'x-ms-client-request-id': '3aaca451-395e-4cb5-a5b9-f790feddcd8b',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '624f4952-59cf-4add-8130-fe20c7fa6f3c',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211651Z:624f4952-59cf-4add-8130-fe20c7fa6f3c',
  date: 'Mon, 31 Oct 2016 21:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '34899928-d995-4cdf-b659-828dd9cfb54c',
  'x-ms-client-request-id': '9875017f-2c75-4689-a7a3-a0b2649dafc6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ea4fc713-d0b6-42c2-ae2a-2c6c1ae2133b',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211652Z:ea4fc713-d0b6-42c2-ae2a-2c6c1ae2133b',
  date: 'Mon, 31 Oct 2016 21:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '34899928-d995-4cdf-b659-828dd9cfb54c',
  'x-ms-client-request-id': '9875017f-2c75-4689-a7a3-a0b2649dafc6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ea4fc713-d0b6-42c2-ae2a-2c6c1ae2133b',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211652Z:ea4fc713-d0b6-42c2-ae2a-2c6c1ae2133b',
  date: 'Mon, 31 Oct 2016 21:16:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '970c3631-2f00-47fc-b6ed-76a5ec10bb64',
  'x-ms-client-request-id': '3cf6c25e-dd10-41f4-99b8-2c9db63bc51e',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f80b948f-606a-429e-b3c3-f5f393ad16d6',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211652Z:f80b948f-606a-429e-b3c3-f5f393ad16d6',
  date: 'Mon, 31 Oct 2016 21:16:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '970c3631-2f00-47fc-b6ed-76a5ec10bb64',
  'x-ms-client-request-id': '3cf6c25e-dd10-41f4-99b8-2c9db63bc51e',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f80b948f-606a-429e-b3c3-f5f393ad16d6',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211652Z:f80b948f-606a-429e-b3c3-f5f393ad16d6',
  date: 'Mon, 31 Oct 2016 21:16:52 GMT',
  connection: 'close' });
 return result; }]];