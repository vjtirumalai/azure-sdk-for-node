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
 * Event Subscription
 *
 * @extends models['Resource']
 */
class EventSubscription extends models['Resource'] {
  /**
   * Create a EventSubscription.
   * @member {string} [topic] Name of the topic of the event subscription.
   * @member {string} [provisioningState] Provisioning state of the event
   * subscription. Possible values include: 'Creating', 'Updating', 'Deleting',
   * 'Succeeded', 'Canceled', 'Failed'
   * @member {object} [destination] Information about the destination where
   * events have to be delivered for the event subscription.
   * @member {string} [destination.endpointType] Polymorphic Discriminator
   * @member {object} [filter] Information about the filter for the event
   * subscription.
   * @member {string} [filter.subjectBeginsWith] An optional string to filter
   * events for an event subscription based on a resource path prefix.
   * The format of this depends on the publisher of the events.
   * Wildcard characters are not supported in this path.
   * @member {string} [filter.subjectEndsWith] An optional string to filter
   * events for an event subscription based on a resource path suffix.
   * Wildcard characters are not supported in this path.
   * @member {array} [filter.includedEventTypes] A list of applicable event
   * types that need to be part of the event subscription.
   * If it is desired to subscribe to all event types, the string "all" needs
   * to be specified as an element in this list.
   * @member {boolean} [filter.isSubjectCaseSensitive] Specifies if the
   * SubjectBeginsWith and SubjectEndsWith properties of the filter
   * should be compared in a case sensitive manner.
   * @member {array} [labels] List of user defined labels.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EventSubscription
   *
   * @returns {object} metadata of EventSubscription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventSubscription',
      type: {
        name: 'Composite',
        className: 'EventSubscription',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          topic: {
            required: false,
            readOnly: true,
            serializedName: 'properties.topic',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          destination: {
            required: false,
            serializedName: 'properties.destination',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'endpointType',
                clientName: 'endpointType'
              },
              uberParent: 'EventSubscriptionDestination',
              className: 'EventSubscriptionDestination'
            }
          },
          filter: {
            required: false,
            serializedName: 'properties.filter',
            type: {
              name: 'Composite',
              className: 'EventSubscriptionFilter'
            }
          },
          labels: {
            required: false,
            serializedName: 'properties.labels',
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

module.exports = EventSubscription;
