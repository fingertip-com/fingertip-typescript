// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
   * Retrieves a paginated list of invitations for a specific site
   */
  list(
    siteID: string,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitationListResponse> {
    return this._client.get(path`/v1/sites/${siteID}/invitations`, { query, ...options });
  }
}

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
 * Successful site invitations listing response
 */
export interface InvitationListResponse {
  /**
   * Array of invitations in the current page of results
   */
  items: Array<InvitationListResponse.Item>;

  /**
   * Pagination information
   */
  pageInfo: InvitationListResponse.PageInfo;

  /**
   * Total number of invitations matching the query
   */
  total: number;
}

export namespace InvitationListResponse {
  /**
   * Schema for a site invitation entity
   */
  export interface Item {
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
   * Pagination information
   */
  export interface PageInfo {
    /**
     * Indicates if there are more pages after the current one
     */
    hasNextPage: boolean;

    /**
     * Indicates if there are previous pages before the current one
     */
    hasPreviousPage: boolean;

    /**
     * Cursor pointing to the last item in the current page, if available
     */
    endCursor?: string;

    /**
     * Cursor pointing to the first item in the current page, if available
     */
    startCursor?: string;
  }
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

export interface InvitationListParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items per page (default: 25, max: 100)
   */
  pageSize?: string;
}

export declare namespace Invitations {
  export {
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
  };
}
