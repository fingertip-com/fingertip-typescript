// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from './blocks';
import {
  BlockDeleteResponse,
  BlockRetrieveResponse,
  BlockUpdateParams,
  BlockUpdateResponse,
  Blocks,
} from './blocks';
import * as InvitationsAPI from './invitations';
import { InvitationDeleteResponse, InvitationRetrieveResponse, Invitations } from './invitations';
import * as SiteContactsAPI from './site-contacts';
import {
  SiteContactCreateParams,
  SiteContactCreateResponse,
  SiteContactSampleResponse,
  SiteContacts,
} from './site-contacts';
import * as SiteInvitationsAPI from './site-invitations';
import {
  SiteInvitationDeleteResponse,
  SiteInvitationRetrieveResponse,
  SiteInvitations,
} from './site-invitations';
import * as SiteMembershipsAPI from './site-memberships';
import {
  SiteMembershipDeleteResponse,
  SiteMembershipRetrieveResponse,
  SiteMembershipUpdateParams,
  SiteMembershipUpdateResponse,
  SiteMemberships,
} from './site-memberships';
import * as WorkspaceMembershipsAPI from './workspace-memberships';
import {
  WorkspaceMembershipDeleteResponse,
  WorkspaceMembershipRetrieveResponse,
  WorkspaceMembershipUpdateParams,
  WorkspaceMembershipUpdateResponse,
  WorkspaceMemberships,
} from './workspace-memberships';
import * as ZapierSubscriptionsAPI from './zapier-subscriptions';
import { ZapierSubscriptions } from './zapier-subscriptions';
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
import * as WorkspacesAPI from './workspaces/workspaces';
import {
  WorkspaceListParams,
  WorkspaceListResponse,
  WorkspaceListResponsesMyCursorPage,
  WorkspaceRetrieveResponse,
  WorkspaceUpdateParams,
  WorkspaceUpdateResponse,
  Workspaces,
} from './workspaces/workspaces';
import { APIPromise } from '../../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  sites: SitesAPI.Sites = new SitesAPI.Sites(this._client);
  siteContacts: SiteContactsAPI.SiteContacts = new SiteContactsAPI.SiteContacts(this._client);
  workspaces: WorkspacesAPI.Workspaces = new WorkspacesAPI.Workspaces(this._client);
  zapierSubscriptions: ZapierSubscriptionsAPI.ZapierSubscriptions =
    new ZapierSubscriptionsAPI.ZapierSubscriptions(this._client);
  siteInvitations: SiteInvitationsAPI.SiteInvitations = new SiteInvitationsAPI.SiteInvitations(this._client);
  siteMemberships: SiteMembershipsAPI.SiteMemberships = new SiteMembershipsAPI.SiteMemberships(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  workspaceMemberships: WorkspaceMembershipsAPI.WorkspaceMemberships =
    new WorkspaceMembershipsAPI.WorkspaceMemberships(this._client);

  /**
   * Retrieves a sample of form responses for a specific form template.
   */
  getFormResponsesSample(
    query: V1GetFormResponsesSampleParams,
    options?: RequestOptions,
  ): APIPromise<V1GetFormResponsesSampleResponse> {
    return this._client.get('/v1/form-responses/sample', { query, ...options });
  }

  /**
   * Retrieves a paginated list of bookings for a site with optional status filtering
   */
  listBookings(
    query: V1ListBookingsParams,
    options?: RequestOptions,
  ): PagePromise<V1ListBookingsResponsesMyCursorPage, V1ListBookingsResponse> {
    return this._client.getAPIList('/v1/bookings', MyCursorPage<V1ListBookingsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Simple health check endpoint to verify the API is running. Requires
   * authentication.
   */
  ping(options?: RequestOptions): APIPromise<V1PingResponse> {
    return this._client.get('/v1/ping', options);
  }

  /**
   * Retrieves a sample of bookings with basic information
   */
  retrieveSampleBookings(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/bookings/sample', options);
  }
}

export type V1ListBookingsResponsesMyCursorPage = MyCursorPage<V1ListBookingsResponse>;

/**
 * Array of form responses matching the query
 */
export type V1GetFormResponsesSampleResponse =
  Array<V1GetFormResponsesSampleResponse.V1GetFormResponsesSampleResponseItem>;

export namespace V1GetFormResponsesSampleResponse {
  /**
   * Complete form response schema with both standard and dynamic fields
   */
  export interface V1GetFormResponsesSampleResponseItem {
    /**
     * Timestamp when the form response was created
     */
    createdAt: string;

    /**
     * Unique identifier for the form response
     */
    formResponseId: string;

    /**
     * ID of the form template this response belongs to
     */
    formTemplateId: string;

    /**
     * URL-friendly slug of the form template
     */
    formTemplateSlug: string;

    /**
     * Title of the form template
     */
    formTemplateTitle: string;

    /**
     * ID of the site contact associated with this response
     */
    siteContactId: string;

    /**
     * ID of the site where the form was submitted
     */
    siteId: string;

    /**
     * Source of the form submission (e.g., website, app)
     */
    source: string;

    [k: string]: unknown;
  }
}

export interface V1ListBookingsResponse {
  /**
   * Unique identifier for the booking
   */
  id: string;

  /**
   * Reason for cancellation if the booking was cancelled, can be null
   */
  cancellationReason: string | null;

  /**
   * Date and time when the booking was created
   */
  createdAt: string;

  /**
   * Description of the booking, can be null
   */
  description: string | null;

  /**
   * ID of the destination calendar for this booking, can be null
   */
  destinationCalendarId: string | null;

  /**
   * End date and time of the booking
   */
  endTime: string;

  /**
   * ID of the event type for this booking, can be null
   */
  eventTypeId: string | null;

  /**
   * ID of the original booking if this is a rescheduled booking, can be null
   */
  fromReschedule: string | null;

  /**
   * Indicates if the booking event will be recorded
   */
  isRecorded: boolean;

  /**
   * Location where the booking will take place, can be null
   */
  location: string | null;

  /**
   * ID of the recurring event this booking belongs to, can be null
   */
  recurringEventId: string | null;

  /**
   * Reason for rejection if the booking was rejected, can be null
   */
  rejectionReason: string | null;

  /**
   * Indicates if the booking has been rescheduled, can be null
   */
  rescheduled: boolean | null;

  /**
   * Reason for rescheduling if the booking was rescheduled, can be null
   */
  rescheduledReason: string | null;

  /**
   * ID of the site where the booking was made, can be null
   */
  siteId: string | null;

  /**
   * Phone number for SMS reminders, can be null
   */
  smsReminderNumber: string | null;

  /**
   * Source of the booking (e.g., website, app), can be null
   */
  source: string | null;

  /**
   * Start date and time of the booking
   */
  startTime: string;

  /**
   * Current status of the booking
   */
  status:
    | 'CANCELLED'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'PENDING'
    | 'COMPLETED'
    | 'NO_SHOW'
    | 'REFUNDED'
    | 'PENDING_CONFIRMATION';

  /**
   * Title of the booking, can be null
   */
  title: string | null;

  /**
   * Date and time when the booking was last updated
   */
  updatedAt: string;

  /**
   * ID of the user who created the booking, can be null
   */
  userId: string | null;

  /**
   * List of attendees for the booking
   */
  attendees?: unknown;

  /**
   * Calendar event data associated with the booking, can be null
   */
  calendarEvent?: null;

  /**
   * Additional metadata for the booking, can be null
   */
  metadata?: null;

  /**
   * Custom response data associated with the booking, can be null
   */
  response?: null;
}

/**
 * Successful ping response
 */
export interface V1PingResponse {
  /**
   * Response message indicating service status
   */
  message: string;
}

/**
 * Array of simplified bookings with basic information
 */
export type V1RetrieveSampleBookingsResponse = unknown;

export interface V1GetFormResponsesSampleParams {
  /**
   * Slug of the form template to retrieve responses for
   */
  form_template_slug: string;
}

export interface V1ListBookingsParams extends MyCursorPageParams {
  /**
   * Site ID to fetch bookings for
   */
  siteId: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';

  /**
   * Filter by booking status
   */
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

V1.Pages = Pages;
V1.Blocks = Blocks;
V1.Sites = Sites;
V1.SiteContacts = SiteContacts;
V1.Workspaces = Workspaces;
V1.ZapierSubscriptions = ZapierSubscriptions;
V1.SiteInvitations = SiteInvitations;
V1.SiteMemberships = SiteMemberships;
V1.Invitations = Invitations;
V1.WorkspaceMemberships = WorkspaceMemberships;

export declare namespace V1 {
  export {
    type V1GetFormResponsesSampleResponse as V1GetFormResponsesSampleResponse,
    type V1ListBookingsResponse as V1ListBookingsResponse,
    type V1PingResponse as V1PingResponse,
    type V1RetrieveSampleBookingsResponse as V1RetrieveSampleBookingsResponse,
    type V1ListBookingsResponsesMyCursorPage as V1ListBookingsResponsesMyCursorPage,
    type V1GetFormResponsesSampleParams as V1GetFormResponsesSampleParams,
    type V1ListBookingsParams as V1ListBookingsParams,
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

  export { ZapierSubscriptions as ZapierSubscriptions };

  export {
    SiteInvitations as SiteInvitations,
    type SiteInvitationRetrieveResponse as SiteInvitationRetrieveResponse,
    type SiteInvitationDeleteResponse as SiteInvitationDeleteResponse,
  };

  export {
    SiteMemberships as SiteMemberships,
    type SiteMembershipRetrieveResponse as SiteMembershipRetrieveResponse,
    type SiteMembershipUpdateResponse as SiteMembershipUpdateResponse,
    type SiteMembershipDeleteResponse as SiteMembershipDeleteResponse,
    type SiteMembershipUpdateParams as SiteMembershipUpdateParams,
  };

  export {
    Invitations as Invitations,
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationDeleteResponse as InvitationDeleteResponse,
  };

  export {
    WorkspaceMemberships as WorkspaceMemberships,
    type WorkspaceMembershipRetrieveResponse as WorkspaceMembershipRetrieveResponse,
    type WorkspaceMembershipUpdateResponse as WorkspaceMembershipUpdateResponse,
    type WorkspaceMembershipDeleteResponse as WorkspaceMembershipDeleteResponse,
    type WorkspaceMembershipUpdateParams as WorkspaceMembershipUpdateParams,
  };
}
