// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InvoiceItems extends APIResource {
  /**
   * Creates a new invoice item
   */
  create(body: InvoiceItemCreateParams, options?: RequestOptions): APIPromise<InvoiceItemCreateResponse> {
    return this._client.post('/v1/invoice-items', { body, ...options });
  }

  /**
   * Retrieves a invoice item by ID
   */
  retrieve(itemID: string, options?: RequestOptions): APIPromise<InvoiceItemRetrieveResponse> {
    return this._client.get(path`/v1/invoice-items/${itemID}`, options);
  }

  /**
   * Updates a invoice item
   */
  update(
    itemID: string,
    body: InvoiceItemUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceItemUpdateResponse> {
    return this._client.put(path`/v1/invoice-items/${itemID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of invoice items
   */
  list(
    query: InvoiceItemListParams,
    options?: RequestOptions,
  ): PagePromise<InvoiceItemListResponsesMyCursorPage, InvoiceItemListResponse> {
    return this._client.getAPIList('/v1/invoice-items', MyCursorPage<InvoiceItemListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a invoice item
   */
  delete(itemID: string, options?: RequestOptions): APIPromise<InvoiceItemDeleteResponse> {
    return this._client.delete(path`/v1/invoice-items/${itemID}`, options);
  }
}

export type InvoiceItemListResponsesMyCursorPage = MyCursorPage<InvoiceItemListResponse>;

/**
 * Successful invoice item creation response
 */
export interface InvoiceItemCreateResponse {
  /**
   * Created invoice item
   */
  item: InvoiceItemCreateResponse.Item;
}

export namespace InvoiceItemCreateResponse {
  /**
   * Created invoice item
   */
  export interface Item {
    /**
     * Unique identifier for the invoice item
     */
    id: string;

    /**
     * Date and time when the item was created
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Description of the invoice item
     */
    description: string | null;

    /**
     * Price in cents
     */
    priceInCents: number;

    /**
     * ID of the site this item belongs to
     */
    siteId: string;

    /**
     * Title of the invoice item
     */
    title: string;

    /**
     * Date and time when the item was last updated
     */
    updatedAt: string;
  }
}

/**
 * Successful invoice item response
 */
export interface InvoiceItemRetrieveResponse {
  /**
   * Invoice item data
   */
  item: InvoiceItemRetrieveResponse.Item;
}

export namespace InvoiceItemRetrieveResponse {
  /**
   * Invoice item data
   */
  export interface Item {
    /**
     * Unique identifier for the invoice item
     */
    id: string;

    /**
     * Date and time when the item was created
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Description of the invoice item
     */
    description: string | null;

    /**
     * Price in cents
     */
    priceInCents: number;

    /**
     * ID of the site this item belongs to
     */
    siteId: string;

    /**
     * Title of the invoice item
     */
    title: string;

    /**
     * Date and time when the item was last updated
     */
    updatedAt: string;
  }
}

/**
 * Successful update response
 */
export interface InvoiceItemUpdateResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Schema for an invoice item
 */
export interface InvoiceItemListResponse {
  /**
   * Unique identifier for the invoice item
   */
  id: string;

  /**
   * Date and time when the item was created
   */
  createdAt: string;

  /**
   * Currency code
   */
  currency: string;

  /**
   * Description of the invoice item
   */
  description: string | null;

  /**
   * Price in cents
   */
  priceInCents: number;

  /**
   * ID of the site this item belongs to
   */
  siteId: string;

  /**
   * Title of the invoice item
   */
  title: string;

  /**
   * Date and time when the item was last updated
   */
  updatedAt: string;
}

/**
 * Successful deletion response
 */
export interface InvoiceItemDeleteResponse {
  /**
   * Success status
   */
  success: boolean;
}

export interface InvoiceItemCreateParams {
  /**
   * Price in cents
   */
  priceInCents: number;

  /**
   * Site ID
   */
  siteId: string;

  /**
   * Item title
   */
  title: string;

  /**
   * Item description
   */
  description?: string;
}

export interface InvoiceItemUpdateParams {
  /**
   * Item description
   */
  description?: string;

  /**
   * Price in cents
   */
  priceInCents?: number;

  /**
   * Item title
   */
  title?: string;
}

export interface InvoiceItemListParams extends MyCursorPageParams {
  /**
   * Site ID
   */
  siteId: string;

  /**
   * Search term
   */
  search?: string;
}

export declare namespace InvoiceItems {
  export {
    type InvoiceItemCreateResponse as InvoiceItemCreateResponse,
    type InvoiceItemRetrieveResponse as InvoiceItemRetrieveResponse,
    type InvoiceItemUpdateResponse as InvoiceItemUpdateResponse,
    type InvoiceItemListResponse as InvoiceItemListResponse,
    type InvoiceItemDeleteResponse as InvoiceItemDeleteResponse,
    type InvoiceItemListResponsesMyCursorPage as InvoiceItemListResponsesMyCursorPage,
    type InvoiceItemCreateParams as InvoiceItemCreateParams,
    type InvoiceItemUpdateParams as InvoiceItemUpdateParams,
    type InvoiceItemListParams as InvoiceItemListParams,
  };
}
