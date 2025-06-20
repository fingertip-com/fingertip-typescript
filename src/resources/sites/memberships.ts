// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Adds a user to a site
   */
  create(
    siteID: string,
    body: MembershipCreateParams,
    options?: RequestOptions,
  ): APIPromise<MembershipCreateResponse> {
    return this._client.post(path`/v1/sites/${siteID}/memberships`, { body, ...options });
  }

  /**
   * Retrieves details of a specific site membership
   */
  retrieve(membershipID: string, options?: RequestOptions): APIPromise<MembershipRetrieveResponse> {
    return this._client.get(path`/v1/site-memberships/${membershipID}`, options);
  }

  /**
   * Updates the role of an existing site membership
   */
  update(
    membershipID: string,
    body: MembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MembershipUpdateResponse> {
    return this._client.patch(path`/v1/site-memberships/${membershipID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of members for a specific site
   */
  list(
    siteID: string,
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembershipListResponsesMyCursorPage, MembershipListResponse> {
    return this._client.getAPIList(
      path`/v1/sites/${siteID}/memberships`,
      MyCursorPage<MembershipListResponse>,
      { query, ...options },
    );
  }

  /**
   * Removes a user from a site
   */
  delete(membershipID: string, options?: RequestOptions): APIPromise<MembershipDeleteResponse> {
    return this._client.delete(path`/v1/site-memberships/${membershipID}`, options);
  }
}

export type MembershipListResponsesMyCursorPage = MyCursorPage<MembershipListResponse>;

/**
 * Successful site membership creation response
 */
export interface MembershipCreateResponse {
  /**
   * Whether the membership was created successfully
   */
  success: boolean;
}

/**
 * Successful site membership retrieval response
 */
export interface MembershipRetrieveResponse {
  /**
   * The requested site membership
   */
  membership: MembershipRetrieveResponse.Membership;
}

export namespace MembershipRetrieveResponse {
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
export interface MembershipUpdateResponse {
  /**
   * Whether the membership was updated successfully
   */
  success: boolean;
}

/**
 * Schema for a site membership entity
 */
export interface MembershipListResponse {
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

  user: MembershipListResponse.User;

  /**
   * ID of the user
   */
  userId: string;
}

export namespace MembershipListResponse {
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
 * Successful site membership deletion response
 */
export interface MembershipDeleteResponse {
  /**
   * Whether the membership was deleted successfully
   */
  success: boolean;
}

export interface MembershipCreateParams {
  /**
   * Role to assign to the user
   */
  role: 'OWNER' | 'EDITOR' | 'VIEWER';

  /**
   * ID of the user to add
   */
  userId: string;
}

export interface MembershipUpdateParams {
  /**
   * New role to assign to the user
   */
  role: 'OWNER' | 'EDITOR' | 'VIEWER';
}

export interface MembershipListParams extends MyCursorPageParams {}

export declare namespace Memberships {
  export {
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipRetrieveResponse as MembershipRetrieveResponse,
    type MembershipUpdateResponse as MembershipUpdateResponse,
    type MembershipListResponse as MembershipListResponse,
    type MembershipDeleteResponse as MembershipDeleteResponse,
    type MembershipListResponsesMyCursorPage as MembershipListResponsesMyCursorPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
  };
}
