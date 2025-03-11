// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as InvitationsAPI from './invitations';
import {
  InvitationCreateParams,
  InvitationCreateResponse,
  InvitationListParams,
  InvitationListResponse,
  InvitationListResponsesMyCursorPage,
  Invitations,
} from './invitations';
import * as MembershipsAPI from './memberships';
import {
  MembershipCreateParams,
  MembershipCreateResponse,
  MembershipListParams,
  MembershipListResponse,
  MembershipListResponsesMyCursorPage,
  Memberships,
} from './memberships';
import { APIPromise } from '../../../../api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Workspaces extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);

  /**
   * Retrieves a specific workspace and its related data by workspace ID
   */
  retrieve(workspaceID: string, options?: RequestOptions): APIPromise<WorkspaceRetrieveResponse> {
    return this._client.get(path`/api/v1/workspaces/${workspaceID}`, options);
  }

  /**
   * Updates an existing workspace with provided partial data
   */
  update(
    workspaceID: string,
    body: WorkspaceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkspaceUpdateResponse> {
    return this._client.patch(path`/api/v1/workspaces/${workspaceID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of workspaces with optional filtering
   */
  list(
    query: WorkspaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkspaceListResponsesMyCursorPage, WorkspaceListResponse> {
    return this._client.getAPIList('/api/v1/workspaces', MyCursorPage<WorkspaceListResponse>, {
      query,
      ...options,
    });
  }
}

export type WorkspaceListResponsesMyCursorPage = MyCursorPage<WorkspaceListResponse>;

/**
 * Successful workspace retrieval response
 */
export interface WorkspaceRetrieveResponse {
  /**
   * The requested workspace with all relations
   */
  workspace: WorkspaceRetrieveResponse.Workspace;
}

export namespace WorkspaceRetrieveResponse {
  /**
   * The requested workspace with all relations
   */
  export interface Workspace {
    /**
     * Unique identifier for the workspace
     */
    id: string;

    /**
     * Date and time when the workspace was created
     */
    createdAt: string;

    /**
     * Name of the workspace
     */
    name: string;

    /**
     * Array of sites associated with this workspace
     */
    sites: Array<Workspace.Site>;

    /**
     * URL-friendly identifier for the workspace
     */
    slug: string;

    /**
     * Date and time when the workspace was last updated
     */
    updatedAt: string;
  }

  export namespace Workspace {
    /**
     * Schema for a site entity
     */
    export interface Site {
      /**
       * Unique identifier for the site
       */
      id: string;

      /**
       * Type of business the site represents, can be null
       */
      businessType: string | null;

      /**
       * Date and time when the site was created
       */
      createdAt: string;

      /**
       * Description of the site, can be null
       */
      description: string | null;

      /**
       * ID of the site's home page, can be null
       */
      homePageId: string | null;

      /**
       * ID of the associated location, can be null
       */
      locationId: string | null;

      /**
       * Name of the site
       */
      name: string;

      /**
       * Custom plan override for the site, can be null
       */
      overridePlan: string | null;

      /**
       * URL-friendly identifier for the site
       */
      slug: string;

      /**
       * Time zone for the site, can be null
       */
      timeZone: string | null;

      /**
       * Date and time when the site was last updated
       */
      updatedAt: string;

      /**
       * ID of the workspace this site belongs to, can be null
       */
      workspaceId: string | null;

      /**
       * Logo media for the site, can be null
       */
      logoMedia?: unknown;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;

      /**
       * Current status of the site
       */
      status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
    }
  }
}

/**
 * Successful workspace update response
 */
export interface WorkspaceUpdateResponse {
  /**
   * The updated workspace with all relations
   */
  workspace: WorkspaceUpdateResponse.Workspace;
}

export namespace WorkspaceUpdateResponse {
  /**
   * The updated workspace with all relations
   */
  export interface Workspace {
    /**
     * Unique identifier for the workspace
     */
    id: string;

    /**
     * Date and time when the workspace was created
     */
    createdAt: string;

    /**
     * Name of the workspace
     */
    name: string;

    /**
     * Array of sites associated with this workspace
     */
    sites: Array<Workspace.Site>;

    /**
     * URL-friendly identifier for the workspace
     */
    slug: string;

    /**
     * Date and time when the workspace was last updated
     */
    updatedAt: string;
  }

  export namespace Workspace {
    /**
     * Schema for a site entity
     */
    export interface Site {
      /**
       * Unique identifier for the site
       */
      id: string;

      /**
       * Type of business the site represents, can be null
       */
      businessType: string | null;

      /**
       * Date and time when the site was created
       */
      createdAt: string;

      /**
       * Description of the site, can be null
       */
      description: string | null;

      /**
       * ID of the site's home page, can be null
       */
      homePageId: string | null;

      /**
       * ID of the associated location, can be null
       */
      locationId: string | null;

      /**
       * Name of the site
       */
      name: string;

      /**
       * Custom plan override for the site, can be null
       */
      overridePlan: string | null;

      /**
       * URL-friendly identifier for the site
       */
      slug: string;

      /**
       * Time zone for the site, can be null
       */
      timeZone: string | null;

      /**
       * Date and time when the site was last updated
       */
      updatedAt: string;

      /**
       * ID of the workspace this site belongs to, can be null
       */
      workspaceId: string | null;

      /**
       * Logo media for the site, can be null
       */
      logoMedia?: unknown;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;

      /**
       * Current status of the site
       */
      status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
    }
  }
}

/**
 * Workspace schema including related sites
 */
export interface WorkspaceListResponse {
  /**
   * Unique identifier for the workspace
   */
  id: string;

  /**
   * Date and time when the workspace was created
   */
  createdAt: string;

  /**
   * Name of the workspace
   */
  name: string;

  /**
   * Array of sites associated with this workspace
   */
  sites: Array<WorkspaceListResponse.Site>;

  /**
   * URL-friendly identifier for the workspace
   */
  slug: string;

  /**
   * Date and time when the workspace was last updated
   */
  updatedAt: string;
}

export namespace WorkspaceListResponse {
  /**
   * Schema for a site entity
   */
  export interface Site {
    /**
     * Unique identifier for the site
     */
    id: string;

    /**
     * Type of business the site represents, can be null
     */
    businessType: string | null;

    /**
     * Date and time when the site was created
     */
    createdAt: string;

    /**
     * Description of the site, can be null
     */
    description: string | null;

    /**
     * ID of the site's home page, can be null
     */
    homePageId: string | null;

    /**
     * ID of the associated location, can be null
     */
    locationId: string | null;

    /**
     * Name of the site
     */
    name: string;

    /**
     * Custom plan override for the site, can be null
     */
    overridePlan: string | null;

    /**
     * URL-friendly identifier for the site
     */
    slug: string;

    /**
     * Time zone for the site, can be null
     */
    timeZone: string | null;

    /**
     * Date and time when the site was last updated
     */
    updatedAt: string;

    /**
     * ID of the workspace this site belongs to, can be null
     */
    workspaceId: string | null;

    /**
     * Logo media for the site, can be null
     */
    logoMedia?: unknown;

    /**
     * Social media icons configuration, can be null
     */
    socialIcons?: unknown;

    /**
     * Current status of the site
     */
    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
  }
}

export interface WorkspaceUpdateParams {
  /**
   * Name of the workspace
   */
  name?: string;
}

export interface WorkspaceListParams extends MyCursorPageParams {
  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';
}

Workspaces.Invitations = Invitations;
Workspaces.Memberships = Memberships;

export declare namespace Workspaces {
  export {
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceListResponse as WorkspaceListResponse,
    type WorkspaceListResponsesMyCursorPage as WorkspaceListResponsesMyCursorPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
  };

  export {
    Invitations as Invitations,
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationListResponsesMyCursorPage as InvitationListResponsesMyCursorPage,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
  };

  export {
    Memberships as Memberships,
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipListResponse as MembershipListResponse,
    type MembershipListResponsesMyCursorPage as MembershipListResponsesMyCursorPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipListParams as MembershipListParams,
  };
}
