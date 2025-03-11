// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class WorkspaceMemberships extends APIResource {
  /**
   * Updates the role of an existing workspace membership
   */
  update(
    membershipID: string,
    body: WorkspaceMembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspaceMembershipUpdateResponse> {
    return this._client.patch(path`/api/v1/workspace-memberships/${membershipID}`, { body, ...options });
  }

  /**
   * Removes a user from a workspace
   */
  delete(membershipID: string, options?: RequestOptions): APIPromise<WorkspaceMembershipDeleteResponse> {
    return this._client.delete(path`/api/v1/workspace-memberships/${membershipID}`, options);
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
    type WorkspaceMembershipUpdateResponse as WorkspaceMembershipUpdateResponse,
    type WorkspaceMembershipDeleteResponse as WorkspaceMembershipDeleteResponse,
    type WorkspaceMembershipUpdateParams as WorkspaceMembershipUpdateParams,
  };
}
