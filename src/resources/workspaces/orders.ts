// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Orders extends APIResource {
  /**
   * Retrieves a sample of orders with basic information
   */
  sample(options?: RequestOptions): APIPromise<OrderSampleResponse> {
    return this._client.get('/v1/orders/sample', options);
  }
}

/**
 * Array of order webhook events
 */
export type OrderSampleResponse = Array<OrderSampleResponse.OrderSampleResponseItem>;

export namespace OrderSampleResponse {
  /**
   * Order webhook event
   */
  export interface OrderSampleResponseItem {
    /**
     * Webhook event ID
     */
    id: string;

    /**
     * Unix timestamp when event was created
     */
    created: number;

    /**
     * Order data
     */
    data: OrderSampleResponseItem.Data;

    /**
     * Event type
     */
    type: 'order.created';
  }

  export namespace OrderSampleResponseItem {
    /**
     * Order data
     */
    export interface Data {
      /**
       * Order ID
       */
      id: string;

      /**
       * Order creation date ISO string
       */
      createdAt: string;

      /**
       * Currency code
       */
      currency: string;

      /**
       * Customer email
       */
      customerEmail: string;

      /**
       * Customer full name
       */
      customerName: string;

      /**
       * Order items
       */
      orderItems: Array<Data.OrderItem>;

      /**
       * Order number
       */
      orderNumber: number;

      /**
       * Site ID
       */
      siteId: string;

      /**
       * Order status
       */
      status: string;

      /**
       * Total amount in cents
       */
      totalInCents: number;
    }

    export namespace Data {
      /**
       * Order item details
       */
      export interface OrderItem {
        /**
         * Order item ID
         */
        id: string;

        /**
         * Product name
         */
        name: string;

        /**
         * Original price in cents
         */
        originalPriceInCents: number;

        /**
         * Item price in cents
         */
        priceInCents: number;

        /**
         * Quantity ordered
         */
        quantity: number;

        /**
         * Tax amount in cents
         */
        taxInCents: number;
      }
    }
  }
}

export declare namespace Orders {
  export { type OrderSampleResponse as OrderSampleResponse };
}
