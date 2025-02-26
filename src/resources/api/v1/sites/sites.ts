// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
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
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Sites extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);

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
   * Permanently deletes a site by its ID
   */
  delete(siteID: string, options?: RequestOptions): APIPromise<SiteDeleteResponse> {
    return this._client.delete(path`/api/v1/sites/${siteID}`, options);
  }
}

export interface SiteCreateResponse {
  site: SiteCreateResponse.Site;
}

export namespace SiteCreateResponse {
  export interface Site {
    id: string;

    businessType: string | null;

    createdAt: string;

    description: string | null;

    homePageId: string | null;

    locationId: string | null;

    name: string;

    overridePlan: string | null;

    pages: Array<Site.Page>;

    slug: string;

    timeZone: string | null;

    updatedAt: string;

    workspaceId: string | null;

    logoMedia?: unknown;

    socialIcons?: unknown;

    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
  }

  export namespace Site {
    export interface Page {
      id: string;

      createdAt: string;

      description: string | null;

      name: string | null;

      pageThemeId: string | null;

      siteId: string;

      slug: string;

      updatedAt: string;

      bannerMedia?: unknown;

      logoMedia?: unknown;

      position?: number;

      socialIcons?: unknown;
    }
  }
}

export interface SiteRetrieveResponse {
  site: SiteRetrieveResponse.Site;
}

export namespace SiteRetrieveResponse {
  export interface Site {
    id: string;

    businessType: string | null;

    createdAt: string;

    description: string | null;

    homePageId: string | null;

    locationId: string | null;

    name: string;

    overridePlan: string | null;

    pages: Array<Site.Page>;

    slug: string;

    timeZone: string | null;

    updatedAt: string;

    workspaceId: string | null;

    logoMedia?: unknown;

    socialIcons?: unknown;

    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
  }

  export namespace Site {
    export interface Page {
      id: string;

      createdAt: string;

      description: string | null;

      name: string | null;

      pageThemeId: string | null;

      siteId: string;

      slug: string;

      updatedAt: string;

      bannerMedia?: unknown;

      logoMedia?: unknown;

      position?: number;

      socialIcons?: unknown;
    }
  }
}

export interface SiteUpdateResponse {
  site: SiteUpdateResponse.Site;
}

export namespace SiteUpdateResponse {
  export interface Site {
    id: string;

    businessType: string | null;

    createdAt: string;

    description: string | null;

    homePageId: string | null;

    locationId: string | null;

    name: string;

    overridePlan: string | null;

    pages: Array<Site.Page>;

    slug: string;

    timeZone: string | null;

    updatedAt: string;

    workspaceId: string | null;

    logoMedia?: unknown;

    socialIcons?: unknown;

    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
  }

  export namespace Site {
    export interface Page {
      id: string;

      createdAt: string;

      description: string | null;

      name: string | null;

      pageThemeId: string | null;

      siteId: string;

      slug: string;

      updatedAt: string;

      bannerMedia?: unknown;

      logoMedia?: unknown;

      position?: number;

      socialIcons?: unknown;
    }
  }
}

export interface SiteDeleteResponse {
  success: boolean;
}

export interface SiteCreateParams {
  businessType: string | null;

  name: string;

  pages: Array<SiteCreateParams.Page>;

  slug: string;

  description?: string | null;

  homePageId?: string | null;

  locationId?: string | null;

  logoMedia?: unknown;

  socialIcons?: unknown;

  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';

  timeZone?: string | null;

  workspaceId?: string | null;
}

export namespace SiteCreateParams {
  export interface Page {
    name: string | null;

    pageTheme: Page.PageTheme;

    slug: string;

    bannerMedia?: unknown;

    blocks?: Array<Page.Block>;

    description?: string | null;

    logoMedia?: unknown;

    position?: number;

    socialIcons?: unknown;
  }

  export namespace Page {
    export interface PageTheme {
      componentPageThemeId?: string | null;

      content?: unknown;

      isComponent?: boolean;
    }

    export interface Block {
      componentBlockId: string | null;

      kind: string | null;

      name: string;

      content?: unknown;

      isComponent?: boolean;
    }
  }
}

export interface SiteUpdateParams {
  businessType?: string | null;

  description?: string | null;

  homePageId?: string | null;

  locationId?: string | null;

  logoMedia?: unknown;

  name?: string;

  slug?: string;

  socialIcons?: unknown;

  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';

  timeZone?: string | null;

  workspaceId?: string | null;
}

Sites.Pages = Pages;

export declare namespace Sites {
  export {
    type SiteCreateResponse as SiteCreateResponse,
    type SiteRetrieveResponse as SiteRetrieveResponse,
    type SiteUpdateResponse as SiteUpdateResponse,
    type SiteDeleteResponse as SiteDeleteResponse,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
  };

  export {
    Pages as Pages,
    type PageCreateResponse as PageCreateResponse,
    type PageListResponse as PageListResponse,
    type PageListResponsesMyCursorPage as PageListResponsesMyCursorPage,
    type PageCreateParams as PageCreateParams,
    type PageListParams as PageListParams,
  };
}
