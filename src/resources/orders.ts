// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Orders extends APIResource {
  /**
   * Retrieves orders with basic information
   */
  list(
    query: OrderListParams,
    options?: RequestOptions,
  ): PagePromise<OrderListResponsesMyCursorPage, OrderListResponse> {
    return this._client.getAPIList('/v1/orders', MyCursorPage<OrderListResponse>, { query, ...options });
  }

  /**
   * Retrieves a sample of orders with basic information
   */
  listSample(
    query: OrderListSampleParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrderListSampleResponsesMyCursorPage, OrderListSampleResponse> {
    return this._client.getAPIList('/v1/orders/sample', MyCursorPage<OrderListSampleResponse>, {
      query,
      ...options,
    });
  }
}

export type OrderListResponsesMyCursorPage = MyCursorPage<OrderListResponse>;

export type OrderListSampleResponsesMyCursorPage = MyCursorPage<OrderListSampleResponse>;

/**
 * Order webhook event
 */
export interface OrderListResponse {
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
  data: OrderListResponse.Data;

  /**
   * Event type
   */
  type: 'order.created';
}

export namespace OrderListResponse {
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
 * Order webhook event
 */
export interface OrderListSampleResponse {
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
  data: OrderListSampleResponse.Data;

  /**
   * Event type
   */
  type: 'order.created';
}

export namespace OrderListSampleResponse {
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

export interface OrderListParams extends MyCursorPageParams {
  /**
   * Site slug to retrieve orders for
   */
  site: string;
}

export interface OrderListSampleParams extends MyCursorPageParams {}

export declare namespace Orders {
  export {
    type OrderListResponse as OrderListResponse,
    type OrderListSampleResponse as OrderListSampleResponse,
    type OrderListResponsesMyCursorPage as OrderListResponsesMyCursorPage,
    type OrderListSampleResponsesMyCursorPage as OrderListSampleResponsesMyCursorPage,
    type OrderListParams as OrderListParams,
    type OrderListSampleParams as OrderListSampleParams,
  };
}
