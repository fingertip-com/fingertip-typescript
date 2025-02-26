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
import {
  SiteContactCreateParams,
  SiteContactCreateResponse,
  SiteContactSampleResponse,
  SiteContacts,
} from './site-contacts';
import * as WorkspacesAPI from './workspaces';
import {
  WorkspaceListParams,
  WorkspaceListResponse,
  WorkspaceListResponsesMyCursorPage,
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
  SiteListParams,
  SiteListResponse,
  SiteListResponsesMyCursorPage,
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
   * Retrieves a paginated list of bookings for a site with optional status filtering
   */
  getBookings(query: V1GetBookingsParams, options?: RequestOptions): APIPromise<V1GetBookingsResponse> {
    return this._client.get('/api/v1/bookings', { query, ...options });
  }

  /**
   * Retrieves a sample of form responses for a specific form template.
   */
  getFormResponsesSample(
    query: V1GetFormResponsesSampleParams,
    options?: RequestOptions,
  ): APIPromise<V1GetFormResponsesSampleResponse> {
    return this._client.get('/api/v1/form-responses/sample', { query, ...options });
  }

  /**
   * Simple health check endpoint to verify the API is running. Requires
   * authentication.
   */
  ping(options?: RequestOptions): APIPromise<V1PingResponse> {
    return this._client.get('/api/v1/ping', options);
  }
}

export interface V1GetBookingsResponse {
  items: Array<V1GetBookingsResponse.Item>;

  pageInfo: V1GetBookingsResponse.PageInfo;

  total: number;
}

export namespace V1GetBookingsResponse {
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

export type V1GetFormResponsesSampleResponse =
  Array<V1GetFormResponsesSampleResponse.V1GetFormResponsesSampleResponseItem>;

export namespace V1GetFormResponsesSampleResponse {
  export interface V1GetFormResponsesSampleResponseItem {
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

export interface V1PingResponse {
  message: string;
}

export interface V1GetBookingsParams {
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

export interface V1GetFormResponsesSampleParams {
  form_template_slug: string;
}

V1.Pages = Pages;
V1.Blocks = Blocks;
V1.Sites = Sites;
V1.SiteContacts = SiteContacts;
V1.Workspaces = Workspaces;
V1.ZapierSubscriptions = ZapierSubscriptions;

export declare namespace V1 {
  export {
    type V1GetBookingsResponse as V1GetBookingsResponse,
    type V1GetFormResponsesSampleResponse as V1GetFormResponsesSampleResponse,
    type V1PingResponse as V1PingResponse,
    type V1GetBookingsParams as V1GetBookingsParams,
    type V1GetFormResponsesSampleParams as V1GetFormResponsesSampleParams,
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
    type SiteListResponse as SiteListResponse,
    type SiteDeleteResponse as SiteDeleteResponse,
    type SiteListResponsesMyCursorPage as SiteListResponsesMyCursorPage,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
    type SiteListParams as SiteListParams,
  };

  export {
    SiteContacts as SiteContacts,
    type SiteContactCreateResponse as SiteContactCreateResponse,
    type SiteContactSampleResponse as SiteContactSampleResponse,
    type SiteContactCreateParams as SiteContactCreateParams,
  };

  export {
    Workspaces as Workspaces,
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceListResponse as WorkspaceListResponse,
    type WorkspaceListResponsesMyCursorPage as WorkspaceListResponsesMyCursorPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
  };

  export {
    ZapierSubscriptions as ZapierSubscriptions,
    type ZapierSubscriptionCreateResponse as ZapierSubscriptionCreateResponse,
    type ZapierSubscriptionDeleteResponse as ZapierSubscriptionDeleteResponse,
    type ZapierSubscriptionCreateParams as ZapierSubscriptionCreateParams,
    type ZapierSubscriptionDeleteParams as ZapierSubscriptionDeleteParams,
  };
}
