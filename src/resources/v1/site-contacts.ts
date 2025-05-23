// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SiteContacts extends APIResource {
  /**
   * Creates a new contact associated with a site including marketing preferences
   */
  create(body: SiteContactCreateParams, options?: RequestOptions): APIPromise<SiteContactCreateResponse> {
    return this._client.post('/v1/site-contacts', { body, ...options });
  }

  /**
   * Retrieves a sample of site contacts with basic contact information
   */
  sample(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/site-contacts/sample', options);
  }
}

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
    marketingStatus: string;

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

/**
 * Array of simplified site contacts with basic information
 */
export type SiteContactSampleResponse = unknown;

export interface SiteContactCreateParams {
  /**
   * Email address of the contact
   */
  email: string;

  /**
   * Marketing consent status of the contact
   */
  marketingStatus: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL' | 'ARCHIVED';

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
   * Additional notes about the contact
   */
  notes?: string;

  /**
   * Phone number of the contact
   */
  phone?: string;
}

export declare namespace SiteContacts {
  export {
    type SiteContactCreateResponse as SiteContactCreateResponse,
    type SiteContactSampleResponse as SiteContactSampleResponse,
    type SiteContactCreateParams as SiteContactCreateParams,
  };
}
