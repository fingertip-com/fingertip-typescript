// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Adds a user to a workspace
   */
  create(
    workspaceID: string,
    body: MembershipCreateParams,
    options?: RequestOptions,
  ): APIPromise<MembershipCreateResponse> {
    return this._client.post(path`/v1/workspaces/${workspaceID}/memberships`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of members for a specific workspace
   */
  list(
    workspaceID: string,
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MembershipListResponse> {
    return this._client.get(path`/v1/workspaces/${workspaceID}/memberships`, { query, ...options });
  }
}

/**
 * Successful workspace membership creation response
 */
export interface MembershipCreateResponse {
  /**
   * Whether the membership was created successfully
   */
  success: boolean;
}

/**
 * Successful workspace memberships listing response
 */
export interface MembershipListResponse {
  /**
   * Array of memberships in the current page of results
   */
  items: Array<MembershipListResponse.Item>;

  /**
   * Pagination information
   */
  pageInfo: MembershipListResponse.PageInfo;

  /**
   * Total number of memberships matching the query
   */
  total: number;
}

export namespace MembershipListResponse {
  /**
   * Schema for a workspace membership entity
   */
  export interface Item {
    /**
     * Unique identifier for the workspace membership
     */
    id: string;

    /**
     * Date and time when the membership was created
     */
    createdAt: string;

    /**
     * Role of the user in the workspace
     */
    role: 'OWNER' | 'MEMBER';

    /**
     * Date and time when the membership was last updated
     */
    updatedAt: string;

    user: Item.User;

    /**
     * ID of the user
     */
    userId: string;

    /**
     * ID of the workspace
     */
    workspaceId: string;
  }

  export namespace Item {
    export interface User {
      /**
       * Unique identifier for the user
       */
      id: string;

      /**
       * Email of the user
       */
      email: string;

      /**
       * Name of the user
       */
      name?: string;
    }
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

export interface MembershipCreateParams {
  /**
   * Email address of the user to add
   */
  email: string;

  /**
   * Role to assign to the user
   */
  role: 'OWNER' | 'MEMBER';
}

export interface MembershipListParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items per page (default: 25, max: 100)
   */
  pageSize?: string;
}

export declare namespace Memberships {
  export {
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipListResponse as MembershipListResponse,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipListParams as MembershipListParams,
  };
}
