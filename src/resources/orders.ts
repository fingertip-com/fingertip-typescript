// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Orders extends APIResource {
  /**
   * Retrieves a sample of orders with basic information
   */
  retrieveSample(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/orders/sample', options);
  }
}

/**
 * Array of simplified order with basic information
 */
export type OrderRetrieveSampleResponse = unknown;

export declare namespace Orders {
  export { type OrderRetrieveSampleResponse as OrderRetrieveSampleResponse };
}
