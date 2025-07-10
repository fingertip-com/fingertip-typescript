// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Quotes extends APIResource {
  /**
   * Creates a new store quote
   */
  create(body: QuoteCreateParams, options?: RequestOptions): APIPromise<QuoteCreateResponse> {
    return this._client.post('/v1/quotes', { body, ...options });
  }

  /**
   * Retrieves a single store quote by ID
   */
  retrieve(quoteID: string, options?: RequestOptions): APIPromise<QuoteRetrieveResponse> {
    return this._client.get(path`/v1/quotes/${quoteID}`, options);
  }

  /**
   * Updates a store quote
   */
  update(
    quoteID: string,
    body: QuoteUpdateParams,
    options?: RequestOptions,
  ): APIPromise<QuoteUpdateResponse> {
    return this._client.put(path`/v1/quotes/${quoteID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of quotes for sites the user has access to
   */
  list(query: QuoteListParams, options?: RequestOptions): APIPromise<QuoteListResponse> {
    return this._client.get('/v1/quotes', { query, ...options });
  }

  /**
   * Deletes a store quote
   */
  delete(quoteID: string, options?: RequestOptions): APIPromise<QuoteDeleteResponse> {
    return this._client.delete(path`/v1/quotes/${quoteID}`, options);
  }

  /**
   * Sends a draft store quote
   */
  send(quoteID: string, body: QuoteSendParams, options?: RequestOptions): APIPromise<QuoteSendResponse> {
    return this._client.post(path`/v1/quotes/${quoteID}/send`, { body, ...options });
  }
}

/**
 * Successful quote creation response
 */
export interface QuoteCreateResponse {
  /**
   * Created quote ID
   */
  quoteId: string;
}

/**
 * Successful quote retrieval response
 */
export interface QuoteRetrieveResponse {
  /**
   * Schema for a quote
   */
  quote: QuoteRetrieveResponse.Quote;

  quoteDiscounts: Array<QuoteRetrieveResponse.QuoteDiscount>;

  quoteItems: Array<QuoteRetrieveResponse.QuoteItem>;
}

export namespace QuoteRetrieveResponse {
  /**
   * Schema for a quote
   */
  export interface Quote {
    /**
     * Unique identifier for the quote
     */
    id: string;

    /**
     * Date and time when the quote was created
     */
    createdAt: string;

    /**
     * Currency code for the quote
     */
    currency: string;

    /**
     * Expiration date for the quote
     */
    expiresAt: string;

    /**
     * Optional footer for the quote
     */
    footer: string | null;

    /**
     * Optional memo for the quote
     */
    memo: string | null;

    /**
     * Optional notes for the quote
     */
    notes: string | null;

    /**
     * Whether prices include tax
     */
    priceIncludesTax: boolean;

    /**
     * Sequential quote number
     */
    quoteNumber: number;

    /**
     * ID of the site this quote belongs to
     */
    siteId: string;

    /**
     * Current status of the quote
     */
    status: 'DRAFT' | 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';

    /**
     * Total amount in cents
     */
    totalInCents: number;

    /**
     * Total tax amount in cents
     */
    totalTaxInCents: number;

    /**
     * Date and time when the quote was last updated
     */
    updatedAt: string;
  }

  export interface QuoteDiscount {
    id: string;

    lineNumber: number;

    valueType: 'FIXED' | 'PERCENT';

    valueFixedInCents?: number;

    valuePercent?: number;
  }

  export interface QuoteItem {
    quoteItem: QuoteItem.QuoteItem;

    /**
     * Schema for a store item
     */
    item?: QuoteItem.Item;
  }

  export namespace QuoteItem {
    export interface QuoteItem {
      id: string;

      description: string;

      lineNumber: number;

      quantity: number;

      taxRate: number;

      unitPriceInCents: number;
    }

    /**
     * Schema for a store item
     */
    export interface Item {
      /**
       * Unique identifier for the store item
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
       * Optional description
       */
      description: string | null;

      /**
       * Price in cents
       */
      priceInCents: number;

      /**
       * Site ID
       */
      siteId: string;

      /**
       * Whether the item is system only
       */
      systemOnly: boolean;

      /**
       * Tax rate
       */
      taxRate: number | null;

      /**
       * Title of the store item
       */
      title: string;

      /**
       * Date and time when the item was last updated
       */
      updatedAt: string;
    }
  }
}

/**
 * Successful update response
 */
export interface QuoteUpdateResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Successful quotes listing response
 */
export interface QuoteListResponse {
  /**
   * Pagination information
   */
  pageInfo: QuoteListResponse.PageInfo;

  /**
   * Array of quotes in the current page
   */
  quotes: Array<QuoteListResponse.Quote>;

  /**
   * Total number of quotes
   */
  total: number;
}

export namespace QuoteListResponse {
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

  export interface Quote {
    contact: Quote.Contact;

    /**
     * Schema for a quote
     */
    quote: Quote.Quote;
  }

  export namespace Quote {
    export interface Contact {
      id: string;

      email: string;

      name: string | null;
    }

    /**
     * Schema for a quote
     */
    export interface Quote {
      /**
       * Unique identifier for the quote
       */
      id: string;

      /**
       * Date and time when the quote was created
       */
      createdAt: string;

      /**
       * Currency code for the quote
       */
      currency: string;

      /**
       * Expiration date for the quote
       */
      expiresAt: string;

      /**
       * Optional footer for the quote
       */
      footer: string | null;

      /**
       * Optional memo for the quote
       */
      memo: string | null;

      /**
       * Optional notes for the quote
       */
      notes: string | null;

      /**
       * Whether prices include tax
       */
      priceIncludesTax: boolean;

      /**
       * Sequential quote number
       */
      quoteNumber: number;

      /**
       * ID of the site this quote belongs to
       */
      siteId: string;

      /**
       * Current status of the quote
       */
      status: 'DRAFT' | 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';

      /**
       * Total amount in cents
       */
      totalInCents: number;

      /**
       * Total tax amount in cents
       */
      totalTaxInCents: number;

      /**
       * Date and time when the quote was last updated
       */
      updatedAt: string;
    }
  }
}

/**
 * Successful deletion response
 */
export interface QuoteDeleteResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Successful send response
 */
export interface QuoteSendResponse {
  /**
   * Success status
   */
  success: boolean;
}

export interface QuoteCreateParams {
  /**
   * Quote items
   */
  quoteItems: Array<QuoteCreateParams.QuoteItem>;

  /**
   * Site contact ID
   */
  siteContactId: string;

  /**
   * Site slug
   */
  siteSlug: string;

  /**
   * Quote status
   */
  status: 'DRAFT' | 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED';

  /**
   * Currency code
   */
  currency?: string;

  /**
   * Expiration date (ISO string)
   */
  expiresAt?: string;

  /**
   * Footer text
   */
  footer?: string;

  /**
   * Memo
   */
  memo?: string;

  /**
   * Notes
   */
  notes?: string;

  /**
   * Quote discounts
   */
  quoteDiscounts?: Array<QuoteCreateParams.QuoteDiscount>;
}

export namespace QuoteCreateParams {
  /**
   * Schema for a store quote item
   */
  export interface QuoteItem {
    /**
     * Description of the item
     */
    description: string;

    /**
     * Quantity
     */
    quantity: number;

    /**
     * Tax rate
     */
    taxRate: number;

    /**
     * Unit price in cents
     */
    unitPriceInCents: number;

    id?: string;

    /**
     * Store item ID (optional for custom items)
     */
    itemId?: string;

    /**
     * Line number
     */
    lineNumber?: number;
  }

  /**
   * Schema for a store quote discount
   */
  export interface QuoteDiscount {
    /**
     * Discount value type
     */
    valueType: 'FIXED' | 'PERCENT';

    discountId?: string;

    /**
     * Line number
     */
    lineNumber?: number;

    /**
     * Fixed discount in cents
     */
    valueFixedInCents?: number;

    /**
     * Percentage discount
     */
    valuePercent?: number;
  }
}

export interface QuoteUpdateParams {
  /**
   * Quote items
   */
  quoteItems: Array<QuoteUpdateParams.QuoteItem>;

  /**
   * Expiration date (ISO string)
   */
  expiresAt?: string;

  /**
   * Footer
   */
  footer?: string;

  /**
   * Memo
   */
  memo?: string;

  /**
   * Notes
   */
  notes?: string;

  /**
   * Quote discounts
   */
  quoteDiscounts?: Array<QuoteUpdateParams.QuoteDiscount>;

  /**
   * Site contact ID
   */
  siteContactId?: string;
}

export namespace QuoteUpdateParams {
  /**
   * Schema for a store quote item
   */
  export interface QuoteItem {
    /**
     * Description of the item
     */
    description: string;

    /**
     * Quantity
     */
    quantity: number;

    /**
     * Tax rate
     */
    taxRate: number;

    /**
     * Unit price in cents
     */
    unitPriceInCents: number;

    id?: string;

    /**
     * Store item ID (optional for custom items)
     */
    itemId?: string;

    /**
     * Line number
     */
    lineNumber?: number;
  }

  /**
   * Schema for a store quote discount
   */
  export interface QuoteDiscount {
    /**
     * Discount value type
     */
    valueType: 'FIXED' | 'PERCENT';

    discountId?: string;

    /**
     * Line number
     */
    lineNumber?: number;

    /**
     * Fixed discount in cents
     */
    valueFixedInCents?: number;

    /**
     * Percentage discount
     */
    valuePercent?: number;
  }
}

export interface QuoteListParams {
  /**
   * Site slug to retrieve quotes for
   */
  siteSlug: string;

  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items per page (default: 10, max: 25)
   */
  pageSize?: number | null;

  /**
   * Search term
   */
  search?: string;

  /**
   * Site contact ID
   */
  siteContactId?: string;

  /**
   * Filter by quote status
   */
  statusFilters?: Array<'DRAFT' | 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED'>;
}

export interface QuoteSendParams {
  /**
   * Site slug
   */
  siteSlug: string;
}

export declare namespace Quotes {
  export {
    type QuoteCreateResponse as QuoteCreateResponse,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteUpdateResponse as QuoteUpdateResponse,
    type QuoteListResponse as QuoteListResponse,
    type QuoteDeleteResponse as QuoteDeleteResponse,
    type QuoteSendResponse as QuoteSendResponse,
    type QuoteCreateParams as QuoteCreateParams,
    type QuoteUpdateParams as QuoteUpdateParams,
    type QuoteListParams as QuoteListParams,
    type QuoteSendParams as QuoteSendParams,
  };
}
