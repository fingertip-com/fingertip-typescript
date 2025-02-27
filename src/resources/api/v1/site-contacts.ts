// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class SiteContacts extends APIResource {
  /**
   * Creates a new contact associated with a site including marketing preferences
   */
  create(body: SiteContactCreateParams, options?: RequestOptions): APIPromise<SiteContactCreateResponse> {
    return this._client.post('/api/v1/site-contacts', { body, ...options });
  }

  /**
   * Retrieves a sample of site contacts with basic contact information
   */
  sample(options?: RequestOptions): APIPromise<SiteContactSampleResponse> {
    return this._client.get('/api/v1/site-contacts/sample', options);
  }
}

export interface SiteContactCreateResponse {
  siteContact: SiteContactCreateResponse.SiteContact;
}

export namespace SiteContactCreateResponse {
  export interface SiteContact {
    id: string;

    businessName: string | null;

    createdAt: string;

    currency: string | null;

    email: string | null;

    firstName: string | null;

    jobTitle: string | null;

    language: string | null;

    lastName: string | null;

    marketingStatus: string;

    name: string | null;

    phone: string | null;

    siteId: string;

    source: string | null;

    subscribedAt: string | null;

    timeZone: string | null;

    unsubscribedAt: string | null;

    unsubscribeReason: string | null;

    updatedAt: string;

    userId: string | null;
  }
}

export type SiteContactSampleResponse = Array<SiteContactSampleResponse.SiteContactSampleResponseItem>;

export namespace SiteContactSampleResponse {
  export interface SiteContactSampleResponseItem {
    email: string | null;

    firstName: string | null;

    lastName: string | null;

    marketingStatus: string;

    siteId: string;
  }
}

export interface SiteContactCreateParams {
  email: string;

  marketingStatus: 'SUBSCRIBED' | 'UNSUBSCRIBED' | 'CLEANED' | 'PENDING' | 'TRANSACTIONAL' | 'ARCHIVED';

  siteId: string;

  firstName?: string;

  lastName?: string;

  notes?: string;

  phone?: string;
}

export declare namespace SiteContacts {
  export {
    type SiteContactCreateResponse as SiteContactCreateResponse,
    type SiteContactSampleResponse as SiteContactSampleResponse,
    type SiteContactCreateParams as SiteContactCreateParams,
  };
}
