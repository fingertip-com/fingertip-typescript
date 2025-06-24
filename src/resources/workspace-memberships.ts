// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WorkspaceMemberships extends APIResource {
  /**
   * Adds a user to a workspace
   */
  create(
    workspaceID: string,
    body: WorkspaceMembershipCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspaceMembershipCreateResponse> {
    return this._client.post(path`/v1/workspaces/${workspaceID}/memberships`, { body, ...options });
  }

  /**
   * Retrieves details of a specific workspace membership
   */
  retrieve(membershipID: string, options?: RequestOptions): APIPromise<WorkspaceMembershipRetrieveResponse> {
    return this._client.get(path`/v1/workspace-memberships/${membershipID}`, options);
  }

  /**
   * Updates the role of an existing workspace membership
   */
  update(
    membershipID: string,
    body: WorkspaceMembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspaceMembershipUpdateResponse> {
    return this._client.patch(path`/v1/workspace-memberships/${membershipID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of members for a specific workspace
   */
  list(
    workspaceID: string,
    query: WorkspaceMembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkspaceMembershipListResponsesMyCursorPage, WorkspaceMembershipListResponse> {
    return this._client.getAPIList(
      path`/v1/workspaces/${workspaceID}/memberships`,
      MyCursorPage<WorkspaceMembershipListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes a user from a workspace
   */
  delete(membershipID: string, options?: RequestOptions): APIPromise<WorkspaceMembershipDeleteResponse> {
    return this._client.delete(path`/v1/workspace-memberships/${membershipID}`, options);
  }
}

export type WorkspaceMembershipListResponsesMyCursorPage = MyCursorPage<WorkspaceMembershipListResponse>;

/**
 * Successful workspace membership creation response
 */
export interface WorkspaceMembershipCreateResponse {
  /**
   * Whether the membership was created successfully
   */
  success: boolean;
}

/**
 * Successful workspace membership retrieval response
 */
export interface WorkspaceMembershipRetrieveResponse {
  /**
   * The requested workspace membership
   */
  membership: WorkspaceMembershipRetrieveResponse.Membership;
}

export namespace WorkspaceMembershipRetrieveResponse {
  /**
   * The requested workspace membership
   */
  export interface Membership {
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

    user: Membership.User;

    /**
     * ID of the user
     */
    userId: string;

    /**
     * ID of the workspace
     */
    workspaceId: string;
  }

  export namespace Membership {
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
}

/**
 * Successful workspace membership update response
 */
export interface WorkspaceMembershipUpdateResponse {
  /**
   * Whether the membership was updated successfully
   */
  success: boolean;
}

/**
 * Schema for a workspace membership entity
 */
export interface WorkspaceMembershipListResponse {
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

  user: WorkspaceMembershipListResponse.User;

  /**
   * ID of the user
   */
  userId: string;

  /**
   * ID of the workspace
   */
  workspaceId: string;
}

export namespace WorkspaceMembershipListResponse {
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
 * Successful workspace membership deletion response
 */
export interface WorkspaceMembershipDeleteResponse {
  /**
   * Whether the membership was deleted successfully
   */
  success: boolean;
}

export interface WorkspaceMembershipCreateParams {
  /**
   * Email address of the user to add
   */
  email: string;

  /**
   * Role to assign to the user
   */
  role: 'OWNER' | 'MEMBER';
}

export interface WorkspaceMembershipUpdateParams {
  /**
   * New role to assign to the user
   */
  role: 'OWNER' | 'MEMBER';
}

export interface WorkspaceMembershipListParams extends MyCursorPageParams {}

export declare namespace WorkspaceMemberships {
  export {
    type WorkspaceMembershipCreateResponse as WorkspaceMembershipCreateResponse,
    type WorkspaceMembershipRetrieveResponse as WorkspaceMembershipRetrieveResponse,
    type WorkspaceMembershipUpdateResponse as WorkspaceMembershipUpdateResponse,
    type WorkspaceMembershipListResponse as WorkspaceMembershipListResponse,
    type WorkspaceMembershipDeleteResponse as WorkspaceMembershipDeleteResponse,
    type WorkspaceMembershipListResponsesMyCursorPage as WorkspaceMembershipListResponsesMyCursorPage,
    type WorkspaceMembershipCreateParams as WorkspaceMembershipCreateParams,
    type WorkspaceMembershipUpdateParams as WorkspaceMembershipUpdateParams,
    type WorkspaceMembershipListParams as WorkspaceMembershipListParams,
  };
}
