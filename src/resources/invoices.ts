// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Invoices extends APIResource {
  /**
   * Retrieves a paginated list of invoices for sites the user has access to
   */
  list(
    query: InvoiceListParams,
    options?: RequestOptions,
  ): PagePromise<InvoiceListResponsesMyCursorPage, InvoiceListResponse> {
    return this._client.getAPIList('/v1/invoices', MyCursorPage<InvoiceListResponse>, { query, ...options });
  }
}

export type InvoiceListResponsesMyCursorPage = MyCursorPage<InvoiceListResponse>;

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
  status: 'DRAFT' | 'PENDING' | 'PAID' | 'VOID' | 'OVERDUE';

  /**
   * Total amount in cents
   */
  totalInCents: number;

  /**
   * Date and time when the invoice was last updated
   */
  updatedAt: string;
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
  status?: 'DRAFT' | 'PENDING' | 'PAID' | 'VOID' | 'OVERDUE';
}

export declare namespace Invoices {
  export {
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListResponsesMyCursorPage as InvoiceListResponsesMyCursorPage,
    type InvoiceListParams as InvoiceListParams,
  };
}
