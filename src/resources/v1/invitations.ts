// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Retrieves details of a specific workspace invitation
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<InvitationRetrieveResponse> {
    return this._client.get(path`/v1/invitations/${invitationID}`, options);
  }

  /**
   * Deletes an existing workspace invitation
   */
  delete(invitationID: string, options?: RequestOptions): APIPromise<InvitationDeleteResponse> {
    return this._client.delete(path`/v1/invitations/${invitationID}`, options);
  }
}

/**
 * Successful workspace invitation retrieval response
 */
export interface InvitationRetrieveResponse {
  /**
   * The requested workspace invitation
   */
  invitation: InvitationRetrieveResponse.Invitation;

  /**
   * ID of the workspace the invitation is for
   */
  workspaceId: string;

  /**
   * Name of the workspace the invitation is for
   */
  workspaceName: string;
}

export namespace InvitationRetrieveResponse {
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
 * Successful workspace invitation deletion response
 */
export interface InvitationDeleteResponse {
  /**
   * Whether the invitation was deleted successfully
   */
  success: boolean;
}

export declare namespace Invitations {
  export {
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationDeleteResponse as InvitationDeleteResponse,
  };
}
