// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SiteInvitations extends APIResource {
  /**
   * Retrieves details of a specific site invitation
   */
  retrieve(invitationID: string, options?: RequestOptions): APIPromise<SiteInvitationRetrieveResponse> {
    return this._client.get(path`/v1/site-invitations/${invitationID}`, options);
  }

  /**
   * Deletes an existing site invitation
   */
  delete(invitationID: string, options?: RequestOptions): APIPromise<SiteInvitationDeleteResponse> {
    return this._client.delete(path`/v1/site-invitations/${invitationID}`, options);
  }
}

/**
 * Successful site invitation retrieval response
 */
export interface SiteInvitationRetrieveResponse {
  /**
   * The requested site invitation
   */
  invitation: SiteInvitationRetrieveResponse.Invitation;

  /**
   * ID of the site the invitation is for
   */
  siteId: string;

  /**
   * Name of the site the invitation is for
   */
  siteName: string;
}

export namespace SiteInvitationRetrieveResponse {
  /**
   * The requested site invitation
   */
  export interface Invitation {
    /**
     * Unique identifier for the site invitation
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
    email: string | null;

    /**
     * Date and time when the invitation expires
     */
    expiresAt: string;

    /**
     * Role assigned to the invited user
     */
    role: 'OWNER' | 'EDITOR' | 'VIEWER';

    /**
     * ID of the site the user is invited to
     */
    siteId: string;

    /**
     * Date and time when the invitation was last updated
     */
    updatedAt: string;
  }
}

/**
 * Successful site invitation deletion response
 */
export interface SiteInvitationDeleteResponse {
  /**
   * Whether the invitation was deleted successfully
   */
  success: boolean;
}

export declare namespace SiteInvitations {
  export {
    type SiteInvitationRetrieveResponse as SiteInvitationRetrieveResponse,
    type SiteInvitationDeleteResponse as SiteInvitationDeleteResponse,
  };
}
