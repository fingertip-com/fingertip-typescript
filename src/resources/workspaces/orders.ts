// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Orders extends APIResource {
  /**
   * Retrieves a sample of orders with basic information
   */
  sample(
    query: OrderSampleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderSampleResponse> {
    return this._client.get('/v1/orders/sample', { query, ...options });
  }
}

/**
 * Successful orders listing response
 */
export interface OrderSampleResponse {
  /**
   * Array of order webhook events in the current page
   */
  items: Array<OrderSampleResponse.Item>;

  /**
   * Pagination information
   */
  pageInfo: OrderSampleResponse.PageInfo;

  /**
   * Total number of orders
   */
  total: number;
}

export namespace OrderSampleResponse {
  /**
   * Order webhook event
   */
  export interface Item {
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
    data: Item.Data;

    /**
     * Event type
     */
    type: 'order.created';
  }

  export namespace Item {
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

  /**
   * Pagination information
   */
  export interface PageInfo {
    /**
     * Indicates if there are more pages after the current one
     */
    hasNextPage: boolean;

    /**
     * Indicates if there are previous pages before the current one
     */
    hasPreviousPage: boolean;

    /**
     * Cursor pointing to the last item in the current page, if available
     */
    endCursor?: string;

    /**
     * Cursor pointing to the first item in the current page, if available
     */
    startCursor?: string;
  }
}

export interface OrderSampleParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items per page (default: 10, max: 25)
   */
  pageSize?: number | null;
}

export declare namespace Orders {
  export { type OrderSampleResponse as OrderSampleResponse, type OrderSampleParams as OrderSampleParams };
}
