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

export interface MembershipListParams extends MyCursorPageParams {}

export declare namespace Memberships {
  export {
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipListResponse as MembershipListResponse,
    type MembershipListResponsesMyCursorPage as MembershipListResponsesMyCursorPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipListParams as MembershipListParams,
  };
}
