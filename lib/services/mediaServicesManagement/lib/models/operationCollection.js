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
 * A collection of Operation items.
 */
class OperationCollection extends Array {
  /**
   * Create a OperationCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationCollection
   *
   * @returns {object} metadata of OperationCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationCollection',
      type: {
        name: 'Composite',
        className: 'OperationCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Operation'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: '@odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationCollection;
