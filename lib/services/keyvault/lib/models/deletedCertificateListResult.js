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
 * A list of certificates that have been deleted in this vault.
 */
class DeletedCertificateListResult extends Array {
  /**
   * Create a DeletedCertificateListResult.
   * @member {string} [nextLink] The URL to get the next set of deleted
   * certificates.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeletedCertificateListResult
   *
   * @returns {object} metadata of DeletedCertificateListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeletedCertificateListResult',
      type: {
        name: 'Composite',
        className: 'DeletedCertificateListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeletedCertificateItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeletedCertificateItem'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeletedCertificateListResult;