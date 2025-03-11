// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Adds a user to a workspace
   */
  create(
    workspaceID: string,
    body: MembershipCreateParams,
    options?: RequestOptions,
  ): APIPromise<MembershipCreateResponse> {
    return this._client.post(path`/api/v1/workspaces/${workspaceID}/memberships`, { body, ...options });
  }

  /**
   * Retrieves details of a specific workspace membership
   */
  retrieve(
    userID: string,
    params: MembershipRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MembershipRetrieveResponse> {
    const { workspaceId } = params;
    return this._client.get(path`/api/v1/workspaces/${workspaceId}/memberships/${userID}`, options);
  }

  /**
   * Retrieves a paginated list of members for a specific workspace
   */
  list(
    workspaceID: string,
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembershipListResponsesMyCursorPage, MembershipListResponse> {
    return this._client.getAPIList(
      path`/api/v1/workspaces/${workspaceID}/memberships`,
      MyCursorPage<MembershipListResponse>,
      { query, ...options },
    );
  }
}

export type MembershipListResponsesMyCursorPage = MyCursorPage<MembershipListResponse>;

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
 * Successful workspace membership retrieval response
 */
export interface MembershipRetrieveResponse {
  /**
   * The requested workspace membership
   */
  membership: MembershipRetrieveResponse.Membership;
}

export namespace MembershipRetrieveResponse {
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

    /**
     * ID of the user
     */
    userId: string;

    /**
     * ID of the workspace
     */
    workspaceId: string;
  }
}

/**
 * Schema for a workspace membership entity
 */
export interface MembershipListResponse {
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

  /**
   * ID of the user
   */
  userId: string;

  /**
   * ID of the workspace
   */
  workspaceId: string;
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

export interface MembershipRetrieveParams {
  /**
   * ID of the workspace
   */
  workspaceId: string;
}

export interface MembershipListParams extends MyCursorPageParams {}

export declare namespace Memberships {
  export {
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipRetrieveResponse as MembershipRetrieveResponse,
    type MembershipListResponse as MembershipListResponse,
    type MembershipListResponsesMyCursorPage as MembershipListResponsesMyCursorPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipRetrieveParams as MembershipRetrieveParams,
    type MembershipListParams as MembershipListParams,
  };
}
