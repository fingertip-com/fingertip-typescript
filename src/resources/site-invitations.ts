// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SiteInvitations extends APIResource {
  /**
   * Creates a new invitation for a user to join a site
   */
  create(
    siteID: string,
    body: SiteInvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<SiteInvitationCreateResponse> {
    return this._client.post(path`/v1/sites/${siteID}/invitations`, { body, ...options });
  }

  /**
   * Retrieves details of a specific site invitation
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<SiteInvitationRetrieveResponse> {
    return this._client.get(path`/v1/site-invitations/${invitationID}`, options);
  }

  /**
   * Retrieves a paginated list of invitations for a specific site
   */
  list(
    siteID: string,
    query: SiteInvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SiteInvitationListResponsesMyCursorPage, SiteInvitationListResponse> {
    return this._client.getAPIList(
      path`/v1/sites/${siteID}/invitations`,
      MyCursorPage<SiteInvitationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing site invitation
   */
  delete(invitationID: string, options?: RequestOptions): APIPromise<SiteInvitationDeleteResponse> {
    return this._client.delete(path`/v1/site-invitations/${invitationID}`, options);
  }
}

export type SiteInvitationListResponsesMyCursorPage = MyCursorPage<SiteInvitationListResponse>;

/**
 * Successful site invitation creation response
 */
export interface SiteInvitationCreateResponse {
  /**
   * Whether the invitation was created successfully
   */
  success: boolean;

  /**
   * The created site invitation
   */
  invitation?: SiteInvitationCreateResponse.Invitation;
}

export namespace SiteInvitationCreateResponse {
  /**
   * The created site invitation
   */
  export interface Invitation {
    /**
     * Unique identifier for the site invitation
     */
    id: string;

    /**
     * Whether the invitation has been accepted
     */
    accepted: boolean;

    /**
     * Date and time when the invitation was created
     */
    createdAt: string;

    /**
     * Email address of the invited user
     */
    email: string | null;

    /**
     * Date and time when the invitation expires
     */
    expiresAt: string;

    /**
     * Role assigned to the invited user
     */
    role: 'OWNER' | 'EDITOR' | 'VIEWER';

    /**
     * ID of the site the user is invited to
     */
    siteId: string;

    /**
     * Date and time when the invitation was last updated
     */
    updatedAt: string;
  }
}

/**
 * Successful site invitation retrieval response
 */
export interface SiteInvitationRetrieveResponse {
  /**
   * The requested site invitation
   */
  invitation: SiteInvitationRetrieveResponse.Invitation;

  /**
   * ID of the site the invitation is for
   */
  siteId: string;

  /**
   * Name of the site the invitation is for
   */
  siteName: string;
}

export namespace SiteInvitationRetrieveResponse {
  /**
   * The requested site invitation
   */
  export interface Invitation {
    /**
     * Unique identifier for the site invitation
     */
    id: string;

    /**
     * Whether the invitation has been accepted
     */
    accepted: boolean;

    /**
     * Date and time when the invitation was created
     */
    createdAt: string;

    /**
     * Email address of the invited user
     */
    email: string | null;

    /**
     * Date and time when the invitation expires
     */
    expiresAt: string;

    /**
     * Role assigned to the invited user
     */
    role: 'OWNER' | 'EDITOR' | 'VIEWER';

    /**
     * ID of the site the user is invited to
     */
    siteId: string;

    /**
     * Date and time when the invitation was last updated
     */
    updatedAt: string;
  }
}

/**
 * Schema for a site invitation entity
 */
export interface SiteInvitationListResponse {
  /**
   * Unique identifier for the site invitation
   */
  id: string;

  /**
   * Whether the invitation has been accepted
   */
  accepted: boolean;

  /**
   * Date and time when the invitation was created
   */
  createdAt: string;

  /**
   * Email address of the invited user
   */
  email: string | null;

  /**
   * Date and time when the invitation expires
   */
  expiresAt: string;

  /**
   * Role assigned to the invited user
   */
  role: 'OWNER' | 'EDITOR' | 'VIEWER';

  /**
   * ID of the site the user is invited to
   */
  siteId: string;

  /**
   * Date and time when the invitation was last updated
   */
  updatedAt: string;
}

/**
 * Successful site invitation deletion response
 */
export interface SiteInvitationDeleteResponse {
  /**
   * Whether the invitation was deleted successfully
   */
  success: boolean;
}

export interface SiteInvitationCreateParams {
  /**
   * Email address of the user to invite
   */
  email: string;

  /**
   * Role to assign to the invited user
   */
  role: 'OWNER' | 'EDITOR' | 'VIEWER';
}

export interface SiteInvitationListParams extends MyCursorPageParams {}

export declare namespace SiteInvitations {
  export {
    type SiteInvitationCreateResponse as SiteInvitationCreateResponse,
    type SiteInvitationRetrieveResponse as SiteInvitationRetrieveResponse,
    type SiteInvitationListResponse as SiteInvitationListResponse,
    type SiteInvitationDeleteResponse as SiteInvitationDeleteResponse,
    type SiteInvitationListResponsesMyCursorPage as SiteInvitationListResponsesMyCursorPage,
    type SiteInvitationCreateParams as SiteInvitationCreateParams,
    type SiteInvitationListParams as SiteInvitationListParams,
  };
}
