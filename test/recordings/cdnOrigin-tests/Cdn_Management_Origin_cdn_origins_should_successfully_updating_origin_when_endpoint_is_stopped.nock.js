// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/stop?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint7658.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '548',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/5d07a14e-8d79-4494-b71d-2f77929bdb24/profileresults/cdnTestProfile86/endpointresults/cdnTestEndpoint7658?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '39bac7f5-a2e4-46ff-b815-783dfdeb30f0',
  'x-ms-client-request-id': '90d75bd3-bf77-4793-a7ae-a30fa2d3558c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/5d07a14e-8d79-4494-b71d-2f77929bdb24?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a366f44c-67df-42bb-a689-dc516b5d9a90',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211653Z:a366f44c-67df-42bb-a689-dc516b5d9a90',
  date: 'Mon, 31 Oct 2016 21:16:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/stop?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint7658.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '548',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/5d07a14e-8d79-4494-b71d-2f77929bdb24/profileresults/cdnTestProfile86/endpointresults/cdnTestEndpoint7658?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '39bac7f5-a2e4-46ff-b815-783dfdeb30f0',
  'x-ms-client-request-id': '90d75bd3-bf77-4793-a7ae-a30fa2d3558c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/5d07a14e-8d79-4494-b71d-2f77929bdb24?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a366f44c-67df-42bb-a689-dc516b5d9a90',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211653Z:a366f44c-67df-42bb-a689-dc516b5d9a90',
  date: 'Mon, 31 Oct 2016 21:16:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/5d07a14e-8d79-4494-b71d-2f77929bdb24?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f581f086-b77b-41b8-984e-4b56a9e1a744',
  'x-ms-client-request-id': '0330d5fe-5b01-49c0-8a85-8359d7e0c6cd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e89caf33-70a8-4854-8550-552c388ec84b',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211724Z:e89caf33-70a8-4854-8550-552c388ec84b',
  date: 'Mon, 31 Oct 2016 21:17:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/operationresults/5d07a14e-8d79-4494-b71d-2f77929bdb24?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f581f086-b77b-41b8-984e-4b56a9e1a744',
  'x-ms-client-request-id': '0330d5fe-5b01-49c0-8a85-8359d7e0c6cd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e89caf33-70a8-4854-8550-552c388ec84b',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211724Z:e89caf33-70a8-4854-8550-552c388ec84b',
  date: 'Mon, 31 Oct 2016 21:17:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '3b1e52b0-cb1a-4c07-a701-6c311f3a9a93',
  'x-ms-client-request-id': '67b621a3-90e7-421c-8d17-a36b7cf2b4a3',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '605672ea-fe84-4d24-9a9f-0c507437b745',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211725Z:605672ea-fe84-4d24-9a9f-0c507437b745',
  date: 'Mon, 31 Oct 2016 21:17:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname?api-version=2016-10-02', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1826/providers/Microsoft.Cdn/profiles/cdnTestProfile86/endpoints/cdnTestEndpoint7658/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '410',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '3b1e52b0-cb1a-4c07-a701-6c311f3a9a93',
  'x-ms-client-request-id': '67b621a3-90e7-421c-8d17-a36b7cf2b4a3',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '605672ea-fe84-4d24-9a9f-0c507437b745',
  'x-ms-routing-request-id': 'WESTUS2:20161031T211725Z:605672ea-fe84-4d24-9a9f-0c507437b745',
  date: 'Mon, 31 Oct 2016 21:17:24 GMT',
  connection: 'close' });
 return result; }]];