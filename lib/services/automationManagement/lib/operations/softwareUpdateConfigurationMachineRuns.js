/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Get a single software update configuration machine run by Id.
 *
 * @param {string} automationAccountName The name of the automation account.
 *
 * @param {uuid} softwareUpdateConfigurationMachineRunId The Id of the software
 * update configuration machine run.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.clientRequestId] Identifies this specific client
 * request.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link SoftwareUpdateConfigurationMachineRun} for
 *                      more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getById(automationAccountName, softwareUpdateConfigurationMachineRunId, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let clientRequestId = (options && options.clientRequestId !== undefined) ? options.clientRequestId : undefined;
  let apiVersion = '2017-05-15-preview';
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.resourceGroupName === null || this.client.resourceGroupName === undefined || typeof this.client.resourceGroupName.valueOf() !== 'string') {
      throw new Error('this.client.resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.resourceGroupName !== null && this.client.resourceGroupName !== undefined) {
      if (this.client.resourceGroupName.length > 90)
      {
        throw new Error('"this.client.resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (this.client.resourceGroupName.length < 1)
      {
        throw new Error('"this.client.resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (this.client.resourceGroupName.match(/^[-\w\._]+$/) === null)
      {
        throw new Error('"this.client.resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._]+$/');
      }
    }
    if (automationAccountName === null || automationAccountName === undefined || typeof automationAccountName.valueOf() !== 'string') {
      throw new Error('automationAccountName cannot be null or undefined and it must be of type string.');
    }
    if (softwareUpdateConfigurationMachineRunId === null || softwareUpdateConfigurationMachineRunId === undefined || typeof softwareUpdateConfigurationMachineRunId.valueOf() !== 'string' || !msRest.isValidUuid(softwareUpdateConfigurationMachineRunId)) {
      throw new Error('softwareUpdateConfigurationMachineRunId cannot be null or undefined and it must be of type string and must be a valid uuid.');
    }
    if (clientRequestId !== null && clientRequestId !== undefined && typeof clientRequestId.valueOf() !== 'string') {
      throw new Error('clientRequestId must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns/{softwareUpdateConfigurationMachineRunId}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(this.client.resourceGroupName));
  requestUrl = requestUrl.replace('{automationAccountName}', encodeURIComponent(automationAccountName));
  requestUrl = requestUrl.replace('{softwareUpdateConfigurationMachineRunId}', encodeURIComponent(softwareUpdateConfigurationMachineRunId.toString()));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['clientRequestId'] = clientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 404) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['CloudError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['SoftwareUpdateConfigurationMachineRun']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Return list of software update configuration machine runs
 *
 * @param {string} automationAccountName The name of the automation account.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.clientRequestId] Identifies this specific client
 * request.
 *
 * @param {string} [options.filter] The filter to apply on the operation. You
 * can use the following filters: 'properties/osType', 'properties/status',
 * 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
 *
 * @param {string} [options.skip] number of entries you skip before returning
 * results
 *
 * @param {string} [options.top] Maximum number of entries returned in the
 * results collection
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link
 *                      SoftwareUpdateConfigurationMachineRunListResult} for
 *                      more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(automationAccountName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let clientRequestId = (options && options.clientRequestId !== undefined) ? options.clientRequestId : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  let skip = (options && options.skip !== undefined) ? options.skip : undefined;
  let top = (options && options.top !== undefined) ? options.top : undefined;
  let apiVersion = '2017-05-15-preview';
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.resourceGroupName === null || this.client.resourceGroupName === undefined || typeof this.client.resourceGroupName.valueOf() !== 'string') {
      throw new Error('this.client.resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.resourceGroupName !== null && this.client.resourceGroupName !== undefined) {
      if (this.client.resourceGroupName.length > 90)
      {
        throw new Error('"this.client.resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (this.client.resourceGroupName.length < 1)
      {
        throw new Error('"this.client.resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (this.client.resourceGroupName.match(/^[-\w\._]+$/) === null)
      {
        throw new Error('"this.client.resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._]+$/');
      }
    }
    if (automationAccountName === null || automationAccountName === undefined || typeof automationAccountName.valueOf() !== 'string') {
      throw new Error('automationAccountName cannot be null or undefined and it must be of type string.');
    }
    if (clientRequestId !== null && clientRequestId !== undefined && typeof clientRequestId.valueOf() !== 'string') {
      throw new Error('clientRequestId must be of type string.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
    if (skip !== null && skip !== undefined && typeof skip.valueOf() !== 'string') {
      throw new Error('skip must be of type string.');
    }
    if (top !== null && top !== undefined && typeof top.valueOf() !== 'string') {
      throw new Error('top must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(this.client.resourceGroupName));
  requestUrl = requestUrl.replace('{automationAccountName}', encodeURIComponent(automationAccountName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (filter !== null && filter !== undefined) {
    queryParameters.push('$filter=' + encodeURIComponent(filter));
  }
  if (skip !== null && skip !== undefined) {
    queryParameters.push('$skip=' + encodeURIComponent(skip));
  }
  if (top !== null && top !== undefined) {
    queryParameters.push('$top=' + encodeURIComponent(top));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['clientRequestId'] = clientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 404) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['CloudError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['SoftwareUpdateConfigurationMachineRunListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a SoftwareUpdateConfigurationMachineRuns. */
class SoftwareUpdateConfigurationMachineRuns {
  /**
   * Create a SoftwareUpdateConfigurationMachineRuns.
   * @param {AutomationClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._getById = _getById;
    this._list = _list;
  }

  /**
   * Get a single software update configuration machine run by Id.
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {uuid} softwareUpdateConfigurationMachineRunId The Id of the software
   * update configuration machine run.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SoftwareUpdateConfigurationMachineRun>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getByIdWithHttpOperationResponse(automationAccountName, softwareUpdateConfigurationMachineRunId, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getById(automationAccountName, softwareUpdateConfigurationMachineRunId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Get a single software update configuration machine run by Id.
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {uuid} softwareUpdateConfigurationMachineRunId The Id of the software
   * update configuration machine run.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {SoftwareUpdateConfigurationMachineRun} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link SoftwareUpdateConfigurationMachineRun} for
   *                      more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getById(automationAccountName, softwareUpdateConfigurationMachineRunId, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getById(automationAccountName, softwareUpdateConfigurationMachineRunId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getById(automationAccountName, softwareUpdateConfigurationMachineRunId, options, optionalCallback);
    }
  }

  /**
   * Return list of software update configuration machine runs
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {string} [options.filter] The filter to apply on the operation. You
   * can use the following filters: 'properties/osType', 'properties/status',
   * 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
   *
   * @param {string} [options.skip] number of entries you skip before returning
   * results
   *
   * @param {string} [options.top] Maximum number of entries returned in the
   * results collection
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<SoftwareUpdateConfigurationMachineRunListResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listWithHttpOperationResponse(automationAccountName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._list(automationAccountName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Return list of software update configuration machine runs
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {string} [options.filter] The filter to apply on the operation. You
   * can use the following filters: 'properties/osType', 'properties/status',
   * 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
   *
   * @param {string} [options.skip] number of entries you skip before returning
   * results
   *
   * @param {string} [options.top] Maximum number of entries returned in the
   * results collection
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {SoftwareUpdateConfigurationMachineRunListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link
   *                      SoftwareUpdateConfigurationMachineRunListResult} for
   *                      more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  list(automationAccountName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._list(automationAccountName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._list(automationAccountName, options, optionalCallback);
    }
  }

}

module.exports = SoftwareUpdateConfigurationMachineRuns;