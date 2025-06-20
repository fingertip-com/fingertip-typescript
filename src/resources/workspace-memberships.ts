// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WorkspaceMemberships extends APIResource {
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
   * Removes a user from a workspace
   */
  delete(membershipID: string, options?: RequestOptions): APIPromise<WorkspaceMembershipDeleteResponse> {
    return this._client.delete(path`/v1/workspace-memberships/${membershipID}`, options);
  }
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
 * Successful workspace membership deletion response
 */
export interface WorkspaceMembershipDeleteResponse {
  /**
   * Whether the membership was deleted successfully
   */
  success: boolean;
}

export interface WorkspaceMembershipUpdateParams {
  /**
   * New role to assign to the user
   */
  role: 'OWNER' | 'MEMBER';
}

export declare namespace WorkspaceMemberships {
  export {
    type WorkspaceMembershipRetrieveResponse as WorkspaceMembershipRetrieveResponse,
    type WorkspaceMembershipUpdateResponse as WorkspaceMembershipUpdateResponse,
    type WorkspaceMembershipDeleteResponse as WorkspaceMembershipDeleteResponse,
    type WorkspaceMembershipUpdateParams as WorkspaceMembershipUpdateParams,
  };
}
