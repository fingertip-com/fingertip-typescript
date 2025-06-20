// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Creates a new invitation for a user to join a site
   */
  create(
    siteID: string,
    body: InvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvitationCreateResponse> {
    return this._client.post(path`/v1/sites/${siteID}/invitations`, { body, ...options });
  }

  /**
   * Retrieves details of a specific site invitation
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<InvitationRetrieveResponse> {
    return this._client.get(path`/v1/site-invitations/${invitationID}`, options);
  }

  /**
   * Retrieves a paginated list of invitations for a specific site
   */
  list(
    siteID: string,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvitationListResponsesMyCursorPage, InvitationListResponse> {
    return this._client.getAPIList(
      path`/v1/sites/${siteID}/invitations`,
      MyCursorPage<InvitationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing site invitation
   */
  delete(invitationID: string, options?: RequestOptions): APIPromise<InvitationDeleteResponse> {
    return this._client.delete(path`/v1/site-invitations/${invitationID}`, options);
  }
}

export type InvitationListResponsesMyCursorPage = MyCursorPage<InvitationListResponse>;

/**
 * Successful site invitation creation response
 */
export interface InvitationCreateResponse {
  /**
   * Whether the invitation was created successfully
   */
  success: boolean;

  /**
   * The created site invitation
   */
  invitation?: InvitationCreateResponse.Invitation;
}

export namespace InvitationCreateResponse {
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
export interface InvitationRetrieveResponse {
  /**
   * The requested site invitation
   */
  invitation: InvitationRetrieveResponse.Invitation;

  /**
   * ID of the site the invitation is for
   */
  siteId: string;

  /**
   * Name of the site the invitation is for
   */
  siteName: string;
}

export namespace InvitationRetrieveResponse {
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
export interface InvitationListResponse {
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
export interface InvitationDeleteResponse {
  /**
   * Whether the invitation was deleted successfully
   */
  success: boolean;
}

export interface InvitationCreateParams {
  /**
   * Email address of the user to invite
   */
  email: string;

  /**
   * Role to assign to the invited user
   */
  role: 'OWNER' | 'EDITOR' | 'VIEWER';
}

export interface InvitationListParams extends MyCursorPageParams {}

export declare namespace Invitations {
  export {
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationDeleteResponse as InvitationDeleteResponse,
    type InvitationListResponsesMyCursorPage as InvitationListResponsesMyCursorPage,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
  };
}
