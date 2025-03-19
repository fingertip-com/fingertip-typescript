// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Creates a new invitation for a user to join a workspace
   */
  create(
    workspaceID: string,
    body: InvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvitationCreateResponse> {
    return this._client.post(path`/v1/workspaces/${workspaceID}/invitations`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of invitations for a specific workspace
   */
  list(
    workspaceID: string,
    query: InvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvitationListResponsesMyCursorPage, InvitationListResponse> {
    return this._client.getAPIList(
      path`/v1/workspaces/${workspaceID}/invitations`,
      MyCursorPage<InvitationListResponse>,
      { query, ...options },
    );
  }
}

export type InvitationListResponsesMyCursorPage = MyCursorPage<InvitationListResponse>;

/**
 * Successful workspace invitation creation response
 */
export interface InvitationCreateResponse {
  /**
   * Whether the invitation was created successfully
   */
  success: boolean;

  /**
   * The created workspace invitation
   */
  invitation?: InvitationCreateResponse.Invitation;
}

export namespace InvitationCreateResponse {
  /**
   * The created workspace invitation
   */
  export interface Invitation {
    /**
     * Unique identifier for the workspace invitation
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
    email: string;

    /**
     * Date and time when the invitation expires
     */
    expiresAt: string;

    /**
     * Role assigned to the invited user
     */
    role: 'OWNER' | 'MEMBER';

    /**
     * Date and time when the invitation was last updated
     */
    updatedAt: string;

    /**
     * ID of the invited user
     */
    userId: string;

    /**
     * ID of the workspace the user is invited to
     */
    workspaceId: string;
  }
}

/**
 * Schema for a workspace invitation entity
 */
export interface InvitationListResponse {
  /**
   * Unique identifier for the workspace invitation
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
  email: string;

  /**
   * Date and time when the invitation expires
   */
  expiresAt: string;

  /**
   * Role assigned to the invited user
   */
  role: 'OWNER' | 'MEMBER';

  /**
   * Date and time when the invitation was last updated
   */
  updatedAt: string;

  /**
   * ID of the invited user
   */
  userId: string;

  /**
   * ID of the workspace the user is invited to
   */
  workspaceId: string;
}

export interface InvitationCreateParams {
  /**
   * Email address of the user to invite
   */
  email: string;

  /**
   * Role to assign to the invited user
   */
  role: 'OWNER' | 'MEMBER';
}

export interface InvitationListParams extends MyCursorPageParams {}

export declare namespace Invitations {
  export {
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationListResponsesMyCursorPage as InvitationListResponsesMyCursorPage,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
  };
}
