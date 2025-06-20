// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Orders extends APIResource {
  /**
   * Retrieves orders with basic information
   */
  list(query: OrderListParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/orders', { query, ...options });
  }

  /**
   * Retrieves a sample of orders with basic information
   */
  listSample(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/orders/sample', options);
  }
}

/**
 * Array of simplified order with basic information
 */
export type OrderListResponse = unknown;

/**
 * Array of simplified order with basic information
 */
export type OrderListSampleResponse = unknown;

export interface OrderListParams {
  /**
   * Site slug to retrieve orders for
   */
  site: string;
}

export declare namespace Orders {
  export {
    type OrderListResponse as OrderListResponse,
    type OrderListSampleResponse as OrderListSampleResponse,
    type OrderListParams as OrderListParams,
  };
}
