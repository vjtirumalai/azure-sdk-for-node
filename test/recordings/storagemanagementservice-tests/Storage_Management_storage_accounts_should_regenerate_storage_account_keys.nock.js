// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4796/providers/Microsoft.Storage/storageAccounts/testacc4512/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"9Yj5jfngCBGjQXuvEiqVFqlTzk+mo8xmjD0fs1GaNvNM3YOA3Yn2IGYZ/NMXYtGoNsWTA0hgot3d5QWarxu/vQ==\",\"key2\":\"XgJHjPZKD5DK3UIhNlJ5BKIbLADoYqxt/q3u1+I5p1uPOAXFGLcgV2+5D+PY+8qfVGUmKkVGLlbWN8CBSfw+Pw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9f3987fc-7dfd-47cb-934c-356c48be66d8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9f3987fc-7dfd-47cb-934c-356c48be66d8',
  'x-ms-routing-request-id': 'WESTUS:20151114T012301Z:9f3987fc-7dfd-47cb-934c-356c48be66d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 01:23:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4796/providers/Microsoft.Storage/storageAccounts/testacc4512/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"9Yj5jfngCBGjQXuvEiqVFqlTzk+mo8xmjD0fs1GaNvNM3YOA3Yn2IGYZ/NMXYtGoNsWTA0hgot3d5QWarxu/vQ==\",\"key2\":\"XgJHjPZKD5DK3UIhNlJ5BKIbLADoYqxt/q3u1+I5p1uPOAXFGLcgV2+5D+PY+8qfVGUmKkVGLlbWN8CBSfw+Pw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9f3987fc-7dfd-47cb-934c-356c48be66d8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9f3987fc-7dfd-47cb-934c-356c48be66d8',
  'x-ms-routing-request-id': 'WESTUS:20151114T012301Z:9f3987fc-7dfd-47cb-934c-356c48be66d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 01:23:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4796/providers/Microsoft.Storage/storageAccounts/testacc4512/regenerateKey?api-version=2015-06-15', '*')
  .reply(200, "{\"key1\":\"Uepve3A1tF0+fSh/xrRT0UvKc2Kv2ymPbMNhw6wvVHtdxIijLP4qiFtafeuqzuk/tYW+QBJgtF9VijYq3yReuA==\",\"key2\":\"XgJHjPZKD5DK3UIhNlJ5BKIbLADoYqxt/q3u1+I5p1uPOAXFGLcgV2+5D+PY+8qfVGUmKkVGLlbWN8CBSfw+Pw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '99834cba-eb1a-432f-bd7a-9a89e236fda7',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '99834cba-eb1a-432f-bd7a-9a89e236fda7',
  'x-ms-routing-request-id': 'WESTUS:20151114T012301Z:99834cba-eb1a-432f-bd7a-9a89e236fda7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 01:23:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4796/providers/Microsoft.Storage/storageAccounts/testacc4512/regenerateKey?api-version=2015-06-15', '*')
  .reply(200, "{\"key1\":\"Uepve3A1tF0+fSh/xrRT0UvKc2Kv2ymPbMNhw6wvVHtdxIijLP4qiFtafeuqzuk/tYW+QBJgtF9VijYq3yReuA==\",\"key2\":\"XgJHjPZKD5DK3UIhNlJ5BKIbLADoYqxt/q3u1+I5p1uPOAXFGLcgV2+5D+PY+8qfVGUmKkVGLlbWN8CBSfw+Pw==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '99834cba-eb1a-432f-bd7a-9a89e236fda7',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '99834cba-eb1a-432f-bd7a-9a89e236fda7',
  'x-ms-routing-request-id': 'WESTUS:20151114T012301Z:99834cba-eb1a-432f-bd7a-9a89e236fda7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 14 Nov 2015 01:23:01 GMT',
  connection: 'close' });
 return result; }]];