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
 * @summary The number of nodes in each state for a pool.
  *
 */
class PoolNodeCounts {
  /**
   * Create a PoolNodeCounts.
   * @member {string} poolId The ID of the pool.
   * @member {object} [dedicated] The number of dedicated nodes in each state.
   * @member {number} [dedicated.creating]
   * @member {number} [dedicated.idle]
   * @member {number} [dedicated.offline]
   * @member {number} [dedicated.preempted]
   * @member {number} [dedicated.rebooting]
   * @member {number} [dedicated.reimaging]
   * @member {number} [dedicated.running]
   * @member {number} [dedicated.starting]
   * @member {number} [dedicated.startTaskFailed]
   * @member {number} [dedicated.unknown]
   * @member {number} [dedicated.unusable]
   * @member {number} [dedicated.waitingForStartTask]
   * @member {number} [dedicated.total]
   * @member {object} [lowPriority] The number of low priority nodes in each
   * state.
   * @member {number} [lowPriority.creating]
   * @member {number} [lowPriority.idle]
   * @member {number} [lowPriority.offline]
   * @member {number} [lowPriority.preempted]
   * @member {number} [lowPriority.rebooting]
   * @member {number} [lowPriority.reimaging]
   * @member {number} [lowPriority.running]
   * @member {number} [lowPriority.starting]
   * @member {number} [lowPriority.startTaskFailed]
   * @member {number} [lowPriority.unknown]
   * @member {number} [lowPriority.unusable]
   * @member {number} [lowPriority.waitingForStartTask]
   * @member {number} [lowPriority.total]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PoolNodeCounts
   *
   * @returns {object} metadata of PoolNodeCounts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PoolNodeCounts',
      type: {
        name: 'Composite',
        className: 'PoolNodeCounts',
        modelProperties: {
          poolId: {
            required: true,
            serializedName: 'poolId',
            type: {
              name: 'String'
            }
          },
          dedicated: {
            required: false,
            serializedName: 'dedicated',
            type: {
              name: 'Composite',
              className: 'NodeCounts'
            }
          },
          lowPriority: {
            required: false,
            serializedName: 'lowPriority',
            type: {
              name: 'Composite',
              className: 'NodeCounts'
            }
          }
        }
      }
    };
  }
}

module.exports = PoolNodeCounts;