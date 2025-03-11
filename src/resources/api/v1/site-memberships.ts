// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SiteMemberships extends APIResource {
  /**
   * Updates the role of an existing site membership
   */
  update(
    membershipID: string,
    body: SiteMembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SiteMembershipUpdateResponse> {
    return this._client.patch(path`/api/v1/site-memberships/${membershipID}`, { body, ...options });
  }

  /**
   * Removes a user from a site
   */
  delete(membershipID: string, options?: RequestOptions): APIPromise<SiteMembershipDeleteResponse> {
    return this._client.delete(path`/api/v1/site-memberships/${membershipID}`, options);
  }
}

/**
 * Successful site membership update response
 */
export interface SiteMembershipUpdateResponse {
  /**
   * Whether the membership was updated successfully
   */
  success: boolean;
}

/**
 * Successful site membership deletion response
 */
export interface SiteMembershipDeleteResponse {
  /**
   * Whether the membership was deleted successfully
   */
  success: boolean;
}

export interface SiteMembershipUpdateParams {
  /**
   * New role to assign to the user
   */
  role: 'OWNER' | 'EDITOR' | 'VIEWER';
}

export declare namespace SiteMemberships {
  export {
    type SiteMembershipUpdateResponse as SiteMembershipUpdateResponse,
    type SiteMembershipDeleteResponse as SiteMembershipDeleteResponse,
    type SiteMembershipUpdateParams as SiteMembershipUpdateParams,
  };
}
