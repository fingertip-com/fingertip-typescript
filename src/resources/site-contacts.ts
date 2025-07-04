// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class SiteContacts extends APIResource {
  /**
   * Creates a new contact associated with a site including marketing preferences
   */
  create(body: SiteContactCreateParams, options?: RequestOptions): APIPromise<SiteContactCreateResponse> {
    return this._client.post('/v1/site-contacts', { body, ...options });
  }

  /**
   * Retrieves site contacts with basic contact information
   */
  list(
    query: SiteContactListParams,
    options?: RequestOptions,
  ): PagePromise<SiteContactListResponsesMyCursorPage, SiteContactListResponse> {
    return this._client.getAPIList('/v1/site-contacts', MyCursorPage<SiteContactListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a sample of site contacts with basic contact information
   */
  listSample(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/site-contacts/sample', options);
  }
}

export type SiteContactListResponsesMyCursorPage = MyCursorPage<SiteContactListResponse>;

/**
 * Successful site contact creation response
 */
export interface SiteContactCreateResponse {
  /**
   * The newly created site contact
   */
  siteContact: SiteContactCreateResponse.SiteContact;
}

export namespace SiteContactCreateResponse {
  /**
   * The newly created site contact
   */
  export interface SiteContact {
    /**
     * Unique identifier for the site contact
     */
    id: string;

    /**
     * Business name associated with the contact, can be null
     */
    businessName: string | null;

    /**
     * Timestamp when the contact was created
     */
    createdAt: string;

    /**
     * Preferred currency of the contact, can be null
     */
    currency: string | null;

    /**
     * Email address of the contact, can be null
     */
    email: string | null;

    /**
     * First name of the contact, can be null
     */
    firstName: string | null;

    /**
     * Job title of the contact, can be null
     */
    jobTitle: string | null;

    /**
     * Preferred language of the contact, can be null
     */
    language: string | null;

    /**
     * Last name of the contact, can be null
     */
    lastName: string | null;

    /**
     * Marketing consent status of the contact
     */
    marketingStatus: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL' | 'ARCHIVED';

    /**
     * Full name of the contact, can be null
     */
    name: string | null;

    /**
     * Phone number of the contact, can be null
     */
    phone: string | null;

    /**
     * ID of the site this contact is associated with
     */
    siteId: string;

    /**
     * Source of the contact (e.g., form, import), can be null
     */
    source: string | null;

    /**
     * Timestamp when the contact subscribed, can be null
     */
    subscribedAt: string | null;

    /**
     * Preferred time zone of the contact, can be null
     */
    timeZone: string | null;

    /**
     * Timestamp when the contact unsubscribed, can be null
     */
    unsubscribedAt: string | null;

    /**
     * Reason provided for unsubscribing, can be null
     */
    unsubscribeReason: string | null;

    /**
     * Timestamp when the contact was last updated
     */
    updatedAt: string;

    /**
     * User ID associated with the contact, can be null
     */
    userId: string | null;
  }
}

export interface SiteContactListResponse {
  appointmentsCount: number;

  currency: string;

  formResponsesCount: number;

  invoicesCount: number;

  ordersCount: number;

  paymentAmountInCents: number;

  paymentsCount: number;

  quotesCount: number;

  /**
   * Schema for a site contact entity
   */
  siteContact: SiteContactListResponse.SiteContact;

  tags: Array<SiteContactListResponse.Tag>;

  rating?: number | null;
}

export namespace SiteContactListResponse {
  /**
   * Schema for a site contact entity
   */
  export interface SiteContact {
    /**
     * Unique identifier for the site contact
     */
    id: string;

    /**
     * Business name associated with the contact, can be null
     */
    businessName: string | null;

    /**
     * Timestamp when the contact was created
     */
    createdAt: string;

    /**
     * Preferred currency of the contact, can be null
     */
    currency: string | null;

    /**
     * Email address of the contact, can be null
     */
    email: string | null;

    /**
     * First name of the contact, can be null
     */
    firstName: string | null;

    /**
     * Job title of the contact, can be null
     */
    jobTitle: string | null;

    /**
     * Preferred language of the contact, can be null
     */
    language: string | null;

    /**
     * Last name of the contact, can be null
     */
    lastName: string | null;

    /**
     * Marketing consent status of the contact
     */
    marketingStatus: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL' | 'ARCHIVED';

    /**
     * Full name of the contact, can be null
     */
    name: string | null;

    /**
     * Phone number of the contact, can be null
     */
    phone: string | null;

    /**
     * ID of the site this contact is associated with
     */
    siteId: string;

    /**
     * Source of the contact (e.g., form, import), can be null
     */
    source: string | null;

    /**
     * Timestamp when the contact subscribed, can be null
     */
    subscribedAt: string | null;

    /**
     * Preferred time zone of the contact, can be null
     */
    timeZone: string | null;

    /**
     * Timestamp when the contact unsubscribed, can be null
     */
    unsubscribedAt: string | null;

    /**
     * Reason provided for unsubscribing, can be null
     */
    unsubscribeReason: string | null;

    /**
     * Timestamp when the contact was last updated
     */
    updatedAt: string;

    /**
     * User ID associated with the contact, can be null
     */
    userId: string | null;
  }

  export interface Tag {
    id: string;

    name: string;
  }
}

/**
 * Array of simplified site contacts with basic information
 */
export type SiteContactListSampleResponse = unknown;

export interface SiteContactCreateParams {
  /**
   * Email address of the contact
   */
  email: string;

  /**
   * ID of the site to associate this contact with
   */
  siteId: string;

  /**
   * First name of the contact
   */
  firstName?: string;

  /**
   * Last name of the contact
   */
  lastName?: string;

  /**
   * Marketing consent status of the contact
   */
  marketingStatus?: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL' | 'ARCHIVED';

  /**
   * Additional notes about the contact
   */
  notes?: string;

  /**
   * Phone number of the contact
   */
  phone?: string;
}

export interface SiteContactListParams extends MyCursorPageParams {
  /**
   * Site ID to filter contacts
   */
  siteId: string;

  /**
   * Filter contacts created after date
   */
  createdAfter?: string;

  /**
   * Filter contacts with appointments
   */
  hasAppointments?: boolean | null;

  /**
   * Filter contacts with form responses
   */
  hasFormResponses?: boolean | null;

  /**
   * Filter contacts with invoices
   */
  hasInvoices?: boolean | null;

  /**
   * Filter contacts with orders
   */
  hasOrders?: boolean | null;

  /**
   * Filter contacts with payments
   */
  hasPayments?: boolean | null;

  /**
   * Filter contacts with quotes
   */
  hasQuotes?: boolean | null;

  /**
   * Filter contacts with ratings
   */
  hasRatings?: boolean | null;

  /**
   * Enable segmentation filters
   */
  hasSegmentation?: boolean | null;

  /**
   * Filter by marketing status
   */
  marketingStatuses?: Array<
    'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL' | 'ARCHIVED'
  >;

  /**
   * Search term for contacts
   */
  search?: string;
}

export declare namespace SiteContacts {
  export {
    type SiteContactCreateResponse as SiteContactCreateResponse,
    type SiteContactListResponse as SiteContactListResponse,
    type SiteContactListSampleResponse as SiteContactListSampleResponse,
    type SiteContactListResponsesMyCursorPage as SiteContactListResponsesMyCursorPage,
    type SiteContactCreateParams as SiteContactCreateParams,
    type SiteContactListParams as SiteContactListParams,
  };
}
