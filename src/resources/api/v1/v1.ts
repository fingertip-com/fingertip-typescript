// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BlocksAPI from './blocks';
import {
  BlockDeleteResponse,
  BlockRetrieveResponse,
  BlockUpdateParams,
  BlockUpdateResponse,
  Blocks,
} from './blocks';
import * as SiteContactsAPI from './site-contacts';
import { SiteContactCreateParams, SiteContactCreateResponse, SiteContacts } from './site-contacts';
import * as WorkspacesAPI from './workspaces';
import {
  WorkspaceRetrieveResponse,
  WorkspaceUpdateParams,
  WorkspaceUpdateResponse,
  Workspaces,
} from './workspaces';
import * as ZapierSubscriptionsAPI from './zapier-subscriptions';
import {
  ZapierSubscriptionCreateParams,
  ZapierSubscriptionCreateResponse,
  ZapierSubscriptionDeleteParams,
  ZapierSubscriptionDeleteResponse,
  ZapierSubscriptions,
} from './zapier-subscriptions';
import * as PagesAPI from './pages/pages';
import {
  PageDeleteResponse,
  PageRetrieveResponse,
  PageUpdateParams,
  PageUpdateResponse,
  Pages,
} from './pages/pages';
import * as SitesAPI from './sites/sites';
import {
  SiteCreateParams,
  SiteCreateResponse,
  SiteDeleteResponse,
  SiteRetrieveResponse,
  SiteUpdateParams,
  SiteUpdateResponse,
  Sites,
} from './sites/sites';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  sites: SitesAPI.Sites = new SitesAPI.Sites(this._client);
  siteContacts: SiteContactsAPI.SiteContacts = new SiteContactsAPI.SiteContacts(this._client);
  workspaces: WorkspacesAPI.Workspaces = new WorkspacesAPI.Workspaces(this._client);
  zapierSubscriptions: ZapierSubscriptionsAPI.ZapierSubscriptions =
    new ZapierSubscriptionsAPI.ZapierSubscriptions(this._client);

  /**
   * Retrieves a sample of form responses for a specific form template.
   */
  getSampleFormResponses(
    query: V1GetSampleFormResponsesParams,
    options?: RequestOptions,
  ): APIPromise<V1GetSampleFormResponsesResponse> {
    return this._client.get('/api/v1/form-responses/sample', { query, ...options });
  }

  /**
   * Retrieves a sample of site contacts with basic contact information
   */
  getSampleSiteContacts(options?: RequestOptions): APIPromise<V1GetSampleSiteContactsResponse> {
    return this._client.get('/api/v1/site-contacts/sample', options);
  }

  /**
   * Retrieves a paginated list of bookings for a site with optional status filtering
   */
  listBookings(query: V1ListBookingsParams, options?: RequestOptions): APIPromise<V1ListBookingsResponse> {
    return this._client.get('/api/v1/bookings', { query, ...options });
  }

  /**
   * Retrieves a paginated list of sites with optional filtering
   */
  listSites(
    query: V1ListSitesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListSitesResponse> {
    return this._client.get('/api/v1/sites', { query, ...options });
  }

  /**
   * Retrieves a paginated list of workspaces with optional filtering
   */
  listWorkspaces(
    query: V1ListWorkspacesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListWorkspacesResponse> {
    return this._client.get('/api/v1/workspaces', { query, ...options });
  }

  /**
   * Simple health check endpoint to verify the API is running. Requires
   * authentication.
   */
  ping(options?: RequestOptions): APIPromise<V1PingResponse> {
    return this._client.get('/api/v1/ping', options);
  }
}

export type V1GetSampleFormResponsesResponse =
  Array<V1GetSampleFormResponsesResponse.V1GetSampleFormResponsesResponseItem>;

export namespace V1GetSampleFormResponsesResponse {
  export interface V1GetSampleFormResponsesResponseItem {
    createdAt: string;

    formResponseId: string;

    formTemplateId: string;

    formTemplateSlug: string;

    formTemplateTitle: string;

    siteContactId: string;

    siteId: string;

    source: string;
    [k: string]: unknown;
  }
}

export type V1GetSampleSiteContactsResponse =
  Array<V1GetSampleSiteContactsResponse.V1GetSampleSiteContactsResponseItem>;

export namespace V1GetSampleSiteContactsResponse {
  export interface V1GetSampleSiteContactsResponseItem {
    email: string | null;

    firstName: string | null;

    lastName: string | null;

    marketingStatus: string;

    siteId: string;
  }
}

export interface V1ListBookingsResponse {
  items: Array<V1ListBookingsResponse.Item>;

  pageInfo: V1ListBookingsResponse.PageInfo;

  total: number;
}

export namespace V1ListBookingsResponse {
  export interface Item {
    id: string;

    cancellationReason: string | null;

    createdAt: string;

    description: string | null;

    destinationCalendarId: string | null;

    endTime: string;

    eventTypeId: string | null;

    fromReschedule: string | null;

    isRecorded: boolean;

    location: string | null;

    recurringEventId: string | null;

    rejectionReason: string | null;

    rescheduled: boolean | null;

    rescheduledReason: string | null;

    siteId: string | null;

    smsReminderNumber: string | null;

    source: string | null;

    startTime: string;

    status:
      | 'CANCELLED'
      | 'ACCEPTED'
      | 'REJECTED'
      | 'PENDING'
      | 'COMPLETED'
      | 'NO_SHOW'
      | 'REFUNDED'
      | 'PENDING_CONFIRMATION';

    title: string | null;

    updatedAt: string;

    userId: string | null;

    attendees?: unknown;

    calendarEvent?: null;

    metadata?: null;

    response?: null;
  }

  export interface PageInfo {
    hasNextPage: boolean;

    hasPreviousPage: boolean;

    endCursor?: string;

    startCursor?: string;
  }
}

export interface V1ListSitesResponse {
  items: Array<V1ListSitesResponse.Item>;

  pageInfo: V1ListSitesResponse.PageInfo;

  total: number;
}

export namespace V1ListSitesResponse {
  export interface Item {
    id: string;

    businessType: string | null;

    createdAt: string;

    description: string | null;

    homePageId: string | null;

    locationId: string | null;

    name: string;

    overridePlan: string | null;

    pages: Array<Item.Page>;

    slug: string;

    timeZone: string | null;

    updatedAt: string;

    workspaceId: string | null;

    logoMedia?: unknown;

    socialIcons?: unknown;

    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
  }

  export namespace Item {
    export interface Page {
      id: string;

      createdAt: string;

      description: string | null;

      name: string | null;

      pageThemeId: string | null;

      siteId: string;

      slug: string;

      updatedAt: string;

      bannerMedia?: unknown;

      logoMedia?: unknown;

      position?: number;

      socialIcons?: unknown;
    }
  }

  export interface PageInfo {
    hasNextPage: boolean;

    hasPreviousPage: boolean;

    endCursor?: string;

    startCursor?: string;
  }
}

export interface V1ListWorkspacesResponse {
  items: Array<V1ListWorkspacesResponse.Item>;

  pageInfo: V1ListWorkspacesResponse.PageInfo;

  total: number;
}

export namespace V1ListWorkspacesResponse {
  export interface Item {
    id: string;

    createdAt: string;

    name: string;

    sites: Array<Item.Site>;

    slug: string;

    updatedAt: string;
  }

  export namespace Item {
    export interface Site {
      id: string;

      businessType: string | null;

      createdAt: string;

      description: string | null;

      homePageId: string | null;

      locationId: string | null;

      name: string;

      overridePlan: string | null;

      slug: string;

      timeZone: string | null;

      updatedAt: string;

      workspaceId: string | null;

      logoMedia?: unknown;

      socialIcons?: unknown;

      status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
    }
  }

  export interface PageInfo {
    hasNextPage: boolean;

    hasPreviousPage: boolean;

    endCursor?: string;

    startCursor?: string;
  }
}

export interface V1PingResponse {
  message: string;
}

export interface V1GetSampleFormResponsesParams {
  form_template_slug: string;
}

export interface V1ListBookingsParams {
  siteId: string;

  cursor?: string;

  pageSize?: string;

  status?:
    | 'CANCELLED'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'PENDING'
    | 'COMPLETED'
    | 'NO_SHOW'
    | 'REFUNDED'
    | 'PENDING_CONFIRMATION';
}

export interface V1ListSitesParams {
  cursor?: string;

  pageSize?: string;

  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';

  workspaceId?: string;
}

export interface V1ListWorkspacesParams {
  cursor?: string;

  pageSize?: string;
}

V1.Pages = Pages;
V1.Blocks = Blocks;
V1.Sites = Sites;
V1.SiteContacts = SiteContacts;
V1.Workspaces = Workspaces;
V1.ZapierSubscriptions = ZapierSubscriptions;

export declare namespace V1 {
  export {
    type V1GetSampleFormResponsesResponse as V1GetSampleFormResponsesResponse,
    type V1GetSampleSiteContactsResponse as V1GetSampleSiteContactsResponse,
    type V1ListBookingsResponse as V1ListBookingsResponse,
    type V1ListSitesResponse as V1ListSitesResponse,
    type V1ListWorkspacesResponse as V1ListWorkspacesResponse,
    type V1PingResponse as V1PingResponse,
    type V1GetSampleFormResponsesParams as V1GetSampleFormResponsesParams,
    type V1ListBookingsParams as V1ListBookingsParams,
    type V1ListSitesParams as V1ListSitesParams,
    type V1ListWorkspacesParams as V1ListWorkspacesParams,
  };

  export {
    Pages as Pages,
    type PageRetrieveResponse as PageRetrieveResponse,
    type PageUpdateResponse as PageUpdateResponse,
    type PageDeleteResponse as PageDeleteResponse,
    type PageUpdateParams as PageUpdateParams,
  };

  export {
    Blocks as Blocks,
    type BlockRetrieveResponse as BlockRetrieveResponse,
    type BlockUpdateResponse as BlockUpdateResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockUpdateParams as BlockUpdateParams,
  };

  export {
    Sites as Sites,
    type SiteCreateResponse as SiteCreateResponse,
    type SiteRetrieveResponse as SiteRetrieveResponse,
    type SiteUpdateResponse as SiteUpdateResponse,
    type SiteDeleteResponse as SiteDeleteResponse,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
  };

  export {
    SiteContacts as SiteContacts,
    type SiteContactCreateResponse as SiteContactCreateResponse,
    type SiteContactCreateParams as SiteContactCreateParams,
  };

  export {
    Workspaces as Workspaces,
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
  };

  export {
    ZapierSubscriptions as ZapierSubscriptions,
    type ZapierSubscriptionCreateResponse as ZapierSubscriptionCreateResponse,
    type ZapierSubscriptionDeleteResponse as ZapierSubscriptionDeleteResponse,
    type ZapierSubscriptionCreateParams as ZapierSubscriptionCreateParams,
    type ZapierSubscriptionDeleteParams as ZapierSubscriptionDeleteParams,
  };
}
