// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup2893/providers/Microsoft.Storage/storageAccounts/testacc6316/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"q0HouJTnFkZ6lvxKnsIsgdVd0li6QM19tPj8Jf4E3p3f/OcNzTfe+lkCV9crR12WMltQ4lOGzNABDK5LAPfjtQ==\",\"key2\":\"0xBAO3cP6NiGgIzB3g7QKPNhTkDIy6XbRNxtwHEuI9HBnA28mFOgWjM34pU2uCNaVbvJI6q+vaokg/28A2OEUw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '95b50fa9-c927-4b65-8e56-29866e8beaee',
  server: 'Microsoft-HTTPAPI/2.0,Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '95b50fa9-c927-4b65-8e56-29866e8beaee',
  'x-ms-routing-request-id': 'WESTUS:20150925T050153Z:95b50fa9-c927-4b65-8e56-29866e8beaee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Sep 2015 05:01:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup2893/providers/Microsoft.Storage/storageAccounts/testacc6316/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"q0HouJTnFkZ6lvxKnsIsgdVd0li6QM19tPj8Jf4E3p3f/OcNzTfe+lkCV9crR12WMltQ4lOGzNABDK5LAPfjtQ==\",\"key2\":\"0xBAO3cP6NiGgIzB3g7QKPNhTkDIy6XbRNxtwHEuI9HBnA28mFOgWjM34pU2uCNaVbvJI6q+vaokg/28A2OEUw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '95b50fa9-c927-4b65-8e56-29866e8beaee',
  server: 'Microsoft-HTTPAPI/2.0,Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '95b50fa9-c927-4b65-8e56-29866e8beaee',
  'x-ms-routing-request-id': 'WESTUS:20150925T050153Z:95b50fa9-c927-4b65-8e56-29866e8beaee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Sep 2015 05:01:53 GMT',
  connection: 'close' });
 return result; }]];