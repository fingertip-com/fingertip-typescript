// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WorkspaceInvitations extends APIResource {
  /**
   * Creates a new invitation for a user to join a workspace
   */
  create(
    workspaceID: string,
    body: WorkspaceInvitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspaceInvitationCreateResponse> {
    return this._client.post(path`/v1/workspaces/${workspaceID}/invitations`, { body, ...options });
  }

  /**
   * Retrieves details of a specific workspace invitation
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<WorkspaceInvitationRetrieveResponse> {
    return this._client.get(path`/v1/workspace-invitations/${invitationID}`, options);
  }

  /**
   * Retrieves a paginated list of invitations for a specific workspace
   */
  list(
    workspaceID: string,
    query: WorkspaceInvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkspaceInvitationListResponsesMyCursorPage, WorkspaceInvitationListResponse> {
    return this._client.getAPIList(
      path`/v1/workspaces/${workspaceID}/invitations`,
      MyCursorPage<WorkspaceInvitationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing workspace invitation
   */
  delete(invitationID: string, options?: RequestOptions): APIPromise<WorkspaceInvitationDeleteResponse> {
    return this._client.delete(path`/v1/workspace-invitations/${invitationID}`, options);
  }
}

export type WorkspaceInvitationListResponsesMyCursorPage = MyCursorPage<WorkspaceInvitationListResponse>;

/**
 * Successful workspace invitation creation response
 */
export interface WorkspaceInvitationCreateResponse {
  /**
   * Whether the invitation was created successfully
   */
  success: boolean;

  /**
   * The created workspace invitation
   */
  invitation?: WorkspaceInvitationCreateResponse.Invitation;
}

export namespace WorkspaceInvitationCreateResponse {
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
 * Successful workspace invitation retrieval response
 */
export interface WorkspaceInvitationRetrieveResponse {
  /**
   * The requested workspace invitation
   */
  invitation: WorkspaceInvitationRetrieveResponse.Invitation;

  /**
   * ID of the workspace the invitation is for
   */
  workspaceId: string;

  /**
   * Name of the workspace the invitation is for
   */
  workspaceName: string;
}

export namespace WorkspaceInvitationRetrieveResponse {
  /**
   * The requested workspace invitation
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
export interface WorkspaceInvitationListResponse {
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

/**
 * Successful workspace invitation deletion response
 */
export interface WorkspaceInvitationDeleteResponse {
  /**
   * Whether the invitation was deleted successfully
   */
  success: boolean;
}

export interface WorkspaceInvitationCreateParams {
  /**
   * Email address of the user to invite
   */
  email: string;

  /**
   * Role to assign to the invited user
   */
  role: 'OWNER' | 'MEMBER';
}

export interface WorkspaceInvitationListParams extends MyCursorPageParams {}

export declare namespace WorkspaceInvitations {
  export {
    type WorkspaceInvitationCreateResponse as WorkspaceInvitationCreateResponse,
    type WorkspaceInvitationRetrieveResponse as WorkspaceInvitationRetrieveResponse,
    type WorkspaceInvitationListResponse as WorkspaceInvitationListResponse,
    type WorkspaceInvitationDeleteResponse as WorkspaceInvitationDeleteResponse,
    type WorkspaceInvitationListResponsesMyCursorPage as WorkspaceInvitationListResponsesMyCursorPage,
    type WorkspaceInvitationCreateParams as WorkspaceInvitationCreateParams,
    type WorkspaceInvitationListParams as WorkspaceInvitationListParams,
  };
}
