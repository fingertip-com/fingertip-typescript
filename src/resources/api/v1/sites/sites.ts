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
import * as PagesAPI from './pages';
import {
  PageCreateParams,
  PageCreateResponse,
  PageListParams,
  PageListResponse,
  PageListResponsesMyCursorPage,
  Pages,
} from './pages';
import { APIPromise } from '../../../../api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Sites extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);

  /**
   * Creates a new site with associated pages, themes, and blocks
   */
  create(body: SiteCreateParams, options?: RequestOptions): APIPromise<SiteCreateResponse> {
    return this._client.post('/api/v1/sites', { body, ...options });
  }

  /**
   * Retrieves a specific site and its related data by site ID
   */
  retrieve(siteID: string, options?: RequestOptions): APIPromise<SiteRetrieveResponse> {
    return this._client.get(path`/api/v1/sites/${siteID}`, options);
  }

  /**
   * Updates an existing site with provided partial data
   */
  update(
    siteID: string,
    body: SiteUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SiteUpdateResponse> {
    return this._client.patch(path`/api/v1/sites/${siteID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of sites with optional filtering
   */
  list(
    query: SiteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SiteListResponsesMyCursorPage, SiteListResponse> {
    return this._client.getAPIList('/api/v1/sites', MyCursorPage<SiteListResponse>, { query, ...options });
  }

  /**
   * Permanently deletes a site by its ID
   */
  delete(siteID: string, options?: RequestOptions): APIPromise<SiteDeleteResponse> {
    return this._client.delete(path`/api/v1/sites/${siteID}`, options);
  }
}

export type SiteListResponsesMyCursorPage = MyCursorPage<SiteListResponse>;

/**
 * Successful site creation response
 */
export interface SiteCreateResponse {
  /**
   * The newly created site with all relations
   */
  site: SiteCreateResponse.Site;
}

export namespace SiteCreateResponse {
  /**
   * The newly created site with all relations
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
     * Array of pages associated with this site
     */
    pages: Array<Site.Page>;

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

  export namespace Site {
    /**
     * Schema for a page entity
     */
    export interface Page {
      /**
       * Unique identifier for the page
       */
      id: string;

      /**
       * Date and time when the page was created
       */
      createdAt: string;

      /**
       * Description of the page content, can be null
       */
      description: string | null;

      /**
       * Name of the page, can be null
       */
      name: string | null;

      /**
       * ID of the theme applied to this page, can be null
       */
      pageThemeId: string | null;

      /**
       * ID of the site this page belongs to
       */
      siteId: string;

      /**
       * URL-friendly path segment for the page
       */
      slug: string;

      /**
       * Date and time when the page was last updated
       */
      updatedAt: string;

      /**
       * Banner media for the page, can be null
       */
      bannerMedia?: unknown;

      /**
       * Logo media for the page, can be null
       */
      logoMedia?: unknown;

      /**
       * Display position of the page within the site
       */
      position?: number;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;
    }
  }
}

/**
 * Successful site retrieval response
 */
export interface SiteRetrieveResponse {
  /**
   * The requested site with all relations
   */
  site: SiteRetrieveResponse.Site;
}

export namespace SiteRetrieveResponse {
  /**
   * The requested site with all relations
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
     * Array of pages associated with this site
     */
    pages: Array<Site.Page>;

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

  export namespace Site {
    /**
     * Schema for a page entity
     */
    export interface Page {
      /**
       * Unique identifier for the page
       */
      id: string;

      /**
       * Date and time when the page was created
       */
      createdAt: string;

      /**
       * Description of the page content, can be null
       */
      description: string | null;

      /**
       * Name of the page, can be null
       */
      name: string | null;

      /**
       * ID of the theme applied to this page, can be null
       */
      pageThemeId: string | null;

      /**
       * ID of the site this page belongs to
       */
      siteId: string;

      /**
       * URL-friendly path segment for the page
       */
      slug: string;

      /**
       * Date and time when the page was last updated
       */
      updatedAt: string;

      /**
       * Banner media for the page, can be null
       */
      bannerMedia?: unknown;

      /**
       * Logo media for the page, can be null
       */
      logoMedia?: unknown;

      /**
       * Display position of the page within the site
       */
      position?: number;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;
    }
  }
}

/**
 * Successful site update response
 */
export interface SiteUpdateResponse {
  /**
   * The updated site with all relations
   */
  site: SiteUpdateResponse.Site;
}

export namespace SiteUpdateResponse {
  /**
   * The updated site with all relations
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
     * Array of pages associated with this site
     */
    pages: Array<Site.Page>;

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

  export namespace Site {
    /**
     * Schema for a page entity
     */
    export interface Page {
      /**
       * Unique identifier for the page
       */
      id: string;

      /**
       * Date and time when the page was created
       */
      createdAt: string;

      /**
       * Description of the page content, can be null
       */
      description: string | null;

      /**
       * Name of the page, can be null
       */
      name: string | null;

      /**
       * ID of the theme applied to this page, can be null
       */
      pageThemeId: string | null;

      /**
       * ID of the site this page belongs to
       */
      siteId: string;

      /**
       * URL-friendly path segment for the page
       */
      slug: string;

      /**
       * Date and time when the page was last updated
       */
      updatedAt: string;

      /**
       * Banner media for the page, can be null
       */
      bannerMedia?: unknown;

      /**
       * Logo media for the page, can be null
       */
      logoMedia?: unknown;

      /**
       * Display position of the page within the site
       */
      position?: number;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;
    }
  }
}

/**
 * Schema for a site entity
 */
export interface SiteListResponse {
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

/**
 * Successful site deletion response
 */
export interface SiteDeleteResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

export interface SiteCreateParams {
  /**
   * Type of business the site represents, can be null
   */
  businessType: string | null;

  /**
   * Name of the site
   */
  name: string;

  /**
   * Array of pages to create with the site
   */
  pages: Array<SiteCreateParams.Page>;

  /**
   * URL-friendly identifier for the site
   */
  slug: string;

  /**
   * Description of the site, can be null
   */
  description?: string | null;

  /**
   * ID of the site's home page, can be null
   */
  homePageId?: string | null;

  /**
   * ID of the associated location, can be null
   */
  locationId?: string | null;

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

  /**
   * Time zone for the site, can be null
   */
  timeZone?: string | null;

  /**
   * ID of the workspace this site belongs to, can be null
   */
  workspaceId?: string | null;
}

export namespace SiteCreateParams {
  /**
   * Page to create with theme and blocks
   */
  export interface Page {
    /**
     * Name of the page, can be null
     */
    name: string | null;

    /**
     * Theme for the page
     */
    pageTheme: Page.PageTheme;

    /**
     * URL-friendly path segment for the page
     */
    slug: string;

    /**
     * Banner media for the page, can be null
     */
    bannerMedia?: unknown;

    /**
     * Content blocks for the page
     */
    blocks?: Array<Page.Block>;

    /**
     * Description of the page content, can be null
     */
    description?: string | null;

    /**
     * Logo media for the page, can be null
     */
    logoMedia?: unknown;

    /**
     * Display position of the page within the site
     */
    position?: number;

    /**
     * Social media icons configuration, can be null
     */
    socialIcons?: unknown;
  }

  export namespace Page {
    /**
     * Theme for the page
     */
    export interface PageTheme {
      /**
       * ID of the parent component theme if this is an instance, can be null
       */
      componentPageThemeId?: string | null;

      /**
       * Theme content configuration, can be null
       */
      content?: unknown;

      /**
       * Whether this theme is a reusable component
       */
      isComponent?: boolean;
    }

    /**
     * Schema for creating a new block
     */
    export interface Block {
      /**
       * ID of the component block if this is an instance, can be null
       */
      componentBlockId: string | null;

      /**
       * Type or category of the block, can be null
       */
      kind: string | null;

      /**
       * Name of the block
       */
      name: string;

      /**
       * Content of the block, can be null
       */
      content?: unknown;

      /**
       * Whether this block is a component
       */
      isComponent?: boolean;
    }
  }
}

export interface SiteUpdateParams {
  /**
   * Type of business the site represents, can be null
   */
  businessType?: string | null;

  /**
   * Description of the site, can be null
   */
  description?: string | null;

  /**
   * ID of the site's home page, can be null
   */
  homePageId?: string | null;

  /**
   * ID of the associated location, can be null
   */
  locationId?: string | null;

  /**
   * Logo media for the site, can be null
   */
  logoMedia?: unknown;

  /**
   * Name of the site
   */
  name?: string;

  /**
   * URL-friendly identifier for the site
   */
  slug?: string;

  /**
   * Social media icons configuration, can be null
   */
  socialIcons?: unknown;

  /**
   * Current status of the site
   */
  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';

  /**
   * Time zone for the site, can be null
   */
  timeZone?: string | null;

  /**
   * ID of the workspace this site belongs to, can be null
   */
  workspaceId?: string | null;
}

export interface SiteListParams extends MyCursorPageParams {
  /**
   * Search query
   */
  search?: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';

  /**
   * Filter sites by status
   */
  statuses?: Array<'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO'>;

  /**
   * Filter sites by workspace ID
   */
  workspaceId?: string;
}

Sites.Pages = Pages;
Sites.Invitations = Invitations;
Sites.Memberships = Memberships;

export declare namespace Sites {
  export {
    type SiteCreateResponse as SiteCreateResponse,
    type SiteRetrieveResponse as SiteRetrieveResponse,
    type SiteUpdateResponse as SiteUpdateResponse,
    type SiteListResponse as SiteListResponse,
    type SiteDeleteResponse as SiteDeleteResponse,
    type SiteListResponsesMyCursorPage as SiteListResponsesMyCursorPage,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
    type SiteListParams as SiteListParams,
  };

  export {
    Pages as Pages,
    type PageCreateResponse as PageCreateResponse,
    type PageListResponse as PageListResponse,
    type PageListResponsesMyCursorPage as PageListResponsesMyCursorPage,
    type PageCreateParams as PageCreateParams,
    type PageListParams as PageListParams,
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
