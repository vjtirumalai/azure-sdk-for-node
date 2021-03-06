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

/**
 * Application gateway probe health response match
 *
 */
class ApplicationGatewayProbeHealthResponseMatch {
  /**
   * Create a ApplicationGatewayProbeHealthResponseMatch.
   * @member {string} [body] Body that must be contained in the health
   * response. Default value is empty.
   * @member {array} [statusCodes] Allowed ranges of healthy status codes.
   * Default range of healthy status codes is 200-399.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayProbeHealthResponseMatch
   *
   * @returns {object} metadata of ApplicationGatewayProbeHealthResponseMatch
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayProbeHealthResponseMatch',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayProbeHealthResponseMatch',
        modelProperties: {
          body: {
            required: false,
            serializedName: 'body',
            type: {
              name: 'String'
            }
          },
          statusCodes: {
            required: false,
            serializedName: 'statusCodes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayProbeHealthResponseMatch;
