// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Creates a new store invoice
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post('/v1/invoices', { body, ...options });
  }

  /**
   * Updates a store invoice
   */
  update(
    invoiceID: string,
    body: InvoiceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceUpdateResponse> {
    return this._client.put(path`/v1/invoices/${invoiceID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of invoices for sites the user has access to
   */
  list(
    query: InvoiceListParams,
    options?: RequestOptions,
  ): PagePromise<InvoiceListResponsesMyCursorPage, InvoiceListResponse> {
    return this._client.getAPIList('/v1/invoices', MyCursorPage<InvoiceListResponse>, { query, ...options });
  }

  /**
   * Deletes a draft store invoice
   */
  delete(invoiceID: string, options?: RequestOptions): APIPromise<InvoiceDeleteResponse> {
    return this._client.delete(path`/v1/invoices/${invoiceID}`, options);
  }

  /**
   * Marks a store invoice as paid
   */
  markPaid(
    invoiceID: string,
    body: InvoiceMarkPaidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceMarkPaidResponse> {
    return this._client.post(path`/v1/invoices/${invoiceID}/mark-paid`, { body, ...options });
  }

  /**
   * Sends a draft store invoice
   */
  send(
    invoiceID: string,
    body: InvoiceSendParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceSendResponse> {
    return this._client.post(path`/v1/invoices/${invoiceID}/send`, { body, ...options });
  }

  /**
   * Voids a store invoice
   */
  void(
    invoiceID: string,
    body?: InvoiceVoidParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<InvoiceVoidResponse> {
    return this._client.post(path`/v1/invoices/${invoiceID}/void`, { body, ...options });
  }
}

export type InvoiceListResponsesMyCursorPage = MyCursorPage<InvoiceListResponse>;

/**
 * Successful invoice creation response
 */
export interface InvoiceCreateResponse {
  /**
   * Created invoice ID
   */
  invoiceId: string;
}

/**
 * Successful update response
 */
export interface InvoiceUpdateResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Schema for an invoice
 */
export interface InvoiceListResponse {
  /**
   * Unique identifier for the invoice
   */
  id: string;

  /**
   * Amount paid in cents
   */
  amountPaidInCents: number;

  /**
   * Amount remaining in cents
   */
  amountRemainingInCents: number;

  /**
   * Date and time when the invoice was completed
   */
  completedAt: string | null;

  /**
   * Date and time when the invoice was created
   */
  createdAt: string;

  /**
   * Currency code for the invoice
   */
  currency: string;

  /**
   * Due date for the invoice
   */
  dueAt: string;

  /**
   * Optional footer for the invoice
   */
  footer: string | null;

  /**
   * Sequential invoice number
   */
  invoiceNumber: number;

  /**
   * Optional memo for the invoice
   */
  memo: string | null;

  /**
   * ID of the site this invoice belongs to
   */
  siteId: string;

  /**
   * Current status of the invoice
   */
  status: 'DRAFT' | 'PENDING' | 'PAID' | 'VOID' | 'OVERDUE' | 'REFUNDED';

  /**
   * Total amount in cents
   */
  totalInCents: number;

  /**
   * Date and time when the invoice was last updated
   */
  updatedAt: string;
}

/**
 * Successful deletion response
 */
export interface InvoiceDeleteResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Successful mark paid response
 */
export interface InvoiceMarkPaidResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Successful send response
 */
export interface InvoiceSendResponse {
  /**
   * Success status
   */
  success: boolean;
}

/**
 * Successful void response
 */
export interface InvoiceVoidResponse {
  /**
   * Success status
   */
  success: boolean;
}

export interface InvoiceCreateParams {
  /**
   * Invoice items
   */
  invoiceItems: Array<InvoiceCreateParams.InvoiceItem>;

  /**
   * Site contact ID
   */
  siteContactId: string;

  /**
   * Site ID
   */
  siteId: string;

  /**
   * Invoice status
   */
  status: 'DRAFT' | 'PENDING' | 'PAID' | 'VOID' | 'OVERDUE' | 'REFUNDED';

  /**
   * Business name
   */
  businessName?: string;

  /**
   * Due date (ISO string)
   */
  dueAt?: string;

  /**
   * Footer text
   */
  footer?: string;

  /**
   * Invoice discounts
   */
  invoiceDiscounts?: Array<InvoiceCreateParams.InvoiceDiscount>;

  /**
   * Memo
   */
  memo?: string;

  /**
   * Pass through payment fee
   */
  passThroughPaymentFee?: boolean;

  /**
   * Payment reference
   */
  paymentReference?: string;
}

export namespace InvoiceCreateParams {
  /**
   * Schema for a store invoice item
   */
  export interface InvoiceItem {
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
   * Schema for a store invoice discount
   */
  export interface InvoiceDiscount {
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

export interface InvoiceUpdateParams {
  /**
   * Invoice items
   */
  invoiceItems: Array<InvoiceUpdateParams.InvoiceItem>;

  /**
   * Due date (ISO string)
   */
  dueAt?: string;

  /**
   * Footer
   */
  footer?: string;

  /**
   * Invoice discounts
   */
  invoiceDiscounts?: Array<InvoiceUpdateParams.InvoiceDiscount>;

  /**
   * Memo
   */
  memo?: string;

  /**
   * Notes
   */
  notes?: string;

  /**
   * Pass through payment fee
   */
  passThroughPaymentFee?: boolean;

  /**
   * Payment reference
   */
  paymentReference?: string;

  /**
   * Site contact ID
   */
  siteContactId?: string;
}

export namespace InvoiceUpdateParams {
  /**
   * Schema for a store invoice item
   */
  export interface InvoiceItem {
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
   * Schema for a store invoice discount
   */
  export interface InvoiceDiscount {
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

export interface InvoiceListParams extends MyCursorPageParams {
  /**
   * ID of the site to retrieve invoices for
   */
  siteId: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt' | 'dueAt' | 'invoiceNumber';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';

  /**
   * Filter by invoice status
   */
  status?: 'DRAFT' | 'PENDING' | 'PAID' | 'VOID' | 'OVERDUE' | 'REFUNDED';
}

export interface InvoiceMarkPaidParams {
  /**
   * Completion date (ISO string)
   */
  completedAt?: string;
}

export interface InvoiceSendParams {
  /**
   * Site slug
   */
  siteSlug: string;
}

export interface InvoiceVoidParams {}

export declare namespace Invoices {
  export {
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceDeleteResponse as InvoiceDeleteResponse,
    type InvoiceMarkPaidResponse as InvoiceMarkPaidResponse,
    type InvoiceSendResponse as InvoiceSendResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceListResponsesMyCursorPage as InvoiceListResponsesMyCursorPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceMarkPaidParams as InvoiceMarkPaidParams,
    type InvoiceSendParams as InvoiceSendParams,
    type InvoiceVoidParams as InvoiceVoidParams,
  };
}
