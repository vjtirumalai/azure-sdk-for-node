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
 * HDInsight Pig activity type.
 *
 * @extends models['ExecutionActivity']
 */
class HDInsightPigActivity extends models['ExecutionActivity'] {
  /**
   * Create a HDInsightPigActivity.
   * @member {array} [storageLinkedServices] Storage linked service references.
   * @member {array} [argumentsProperty] User specified arguments to
   * HDInsightActivity.
   * @member {string} [getDebugInfo] Debug info option. Possible values
   * include: 'None', 'Always', 'Failure'
   * @member {object} [scriptPath] Script path. Type: string (or Expression
   * with resultType string).
   * @member {object} [scriptLinkedService] Script linked service reference.
   * @member {string} [scriptLinkedService.referenceName] Reference
   * LinkedService name.
   * @member {object} [scriptLinkedService.parameters] Arguments for
   * LinkedService.
   * @member {object} [defines] Allows user to specify defines for Pig job
   * request.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HDInsightPigActivity
   *
   * @returns {object} metadata of HDInsightPigActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HDInsightPig',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Activity',
        className: 'HDInsightPigActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'ActivityDependency'
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
          linkedServiceName: {
            required: false,
            serializedName: 'linkedServiceName',
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          policy: {
            required: false,
            serializedName: 'policy',
            type: {
              name: 'Composite',
              additionalProperties: {
                type: {
                  name: 'Dictionary',
                  value: {
                      required: false,
                      serializedName: 'ObjectElementType',
                      type: {
                        name: 'Object'
                      }
                  }
                }
              },
              className: 'ActivityPolicy'
            }
          },
          storageLinkedServices: {
            required: false,
            serializedName: 'typeProperties.storageLinkedServices',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LinkedServiceReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'LinkedServiceReference'
                  }
              }
            }
          },
          argumentsProperty: {
            required: false,
            serializedName: 'typeProperties.arguments',
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
          getDebugInfo: {
            required: false,
            serializedName: 'typeProperties.getDebugInfo',
            type: {
              name: 'String'
            }
          },
          scriptPath: {
            required: false,
            serializedName: 'typeProperties.scriptPath',
            type: {
              name: 'Object'
            }
          },
          scriptLinkedService: {
            required: false,
            serializedName: 'typeProperties.scriptLinkedService',
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          defines: {
            required: false,
            serializedName: 'typeProperties.defines',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = HDInsightPigActivity;
