// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SiteMemberships extends APIResource {
  /**
   * Retrieves details of a specific site membership
   */
  retrieve(membershipID: string, options?: RequestOptions): APIPromise<SiteMembershipRetrieveResponse> {
    return this._client.get(path`/v1/site-memberships/${membershipID}`, options);
  }

  /**
   * Updates the role of an existing site membership
   */
  update(
    membershipID: string,
    body: SiteMembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SiteMembershipUpdateResponse> {
    return this._client.patch(path`/v1/site-memberships/${membershipID}`, { body, ...options });
  }

  /**
   * Removes a user from a site
   */
  delete(membershipID: string, options?: RequestOptions): APIPromise<SiteMembershipDeleteResponse> {
    return this._client.delete(path`/v1/site-memberships/${membershipID}`, options);
  }
}

/**
 * Successful site membership retrieval response
 */
export interface SiteMembershipRetrieveResponse {
  /**
   * The requested site membership
   */
  membership: SiteMembershipRetrieveResponse.Membership;
}

export namespace SiteMembershipRetrieveResponse {
  /**
   * The requested site membership
   */
  export interface Membership {
    /**
     * Unique identifier for the site membership
     */
    id: string;

    /**
     * Date and time when the membership was created
     */
    createdAt: string;

    /**
     * Role of the user in the site
     */
    role: 'OWNER' | 'EDITOR' | 'VIEWER';

    /**
     * ID of the site
     */
    siteId: string;

    /**
     * Date and time when the membership was last updated
     */
    updatedAt: string;

    user: Membership.User;

    /**
     * ID of the user
     */
    userId: string;
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
    type SiteMembershipRetrieveResponse as SiteMembershipRetrieveResponse,
    type SiteMembershipUpdateResponse as SiteMembershipUpdateResponse,
    type SiteMembershipDeleteResponse as SiteMembershipDeleteResponse,
    type SiteMembershipUpdateParams as SiteMembershipUpdateParams,
  };
}
