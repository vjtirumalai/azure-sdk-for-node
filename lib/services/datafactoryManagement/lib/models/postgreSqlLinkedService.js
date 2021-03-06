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

const models = require('./index');

/**
 * Linked service for PostgreSQL data source.
 *
 * @extends models['LinkedService']
 */
class PostgreSqlLinkedService extends models['LinkedService'] {
  /**
   * Create a PostgreSqlLinkedService.
   * @member {object} server Server name for connection. Type: string (or
   * Expression with resultType string).
   * @member {object} database Database name for connection. Type: string (or
   * Expression with resultType string).
   * @member {object} [schema] Schema name for connection. Type: string (or
   * Expression with resultType string).
   * @member {object} [username] Username for authentication. Type: string (or
   * Expression with resultType string).
   * @member {object} [password] Password for authentication.
   * @member {string} [password.type] Polymorphic Discriminator
   * @member {object} [encryptedCredential] The encrypted credential used for
   * authentication. Credentials are encrypted using the integration runtime
   * credential manager. Type: string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PostgreSqlLinkedService
   *
   * @returns {object} metadata of PostgreSqlLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PostgreSql',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LinkedService',
        className: 'PostgreSqlLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          server: {
            required: true,
            serializedName: 'typeProperties.server',
            type: {
              name: 'Object'
            }
          },
          database: {
            required: true,
            serializedName: 'typeProperties.database',
            type: {
              name: 'Object'
            }
          },
          schema: {
            required: false,
            serializedName: 'typeProperties.schema',
            type: {
              name: 'Object'
            }
          },
          username: {
            required: false,
            serializedName: 'typeProperties.username',
            type: {
              name: 'Object'
            }
          },
          password: {
            required: false,
            serializedName: 'typeProperties.password',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'SecretBase',
              className: 'SecretBase'
            }
          },
          encryptedCredential: {
            required: false,
            serializedName: 'typeProperties.encryptedCredential',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = PostgreSqlLinkedService;
