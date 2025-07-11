// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pages extends APIResource {
  /**
   * Creates a new page within a site with the provided content.
   */
  create(siteID: string, body: PageCreateParams, options?: RequestOptions): APIPromise<PageCreateResponse> {
    return this._client.post(path`/v1/sites/${siteID}/pages`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of pages for a specific site.
   */
  list(
    siteID: string,
    query: PageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PageListResponsesMyCursorPage, PageListResponse> {
    return this._client.getAPIList(path`/v1/sites/${siteID}/pages`, MyCursorPage<PageListResponse>, {
      query,
      ...options,
    });
  }
}

export type PageListResponsesMyCursorPage = MyCursorPage<PageListResponse>;

/**
 * Successful page creation response
 */
export interface PageCreateResponse {
  /**
   * The newly created page with all relations
   */
  page: PageCreateResponse.Page;
}

export namespace PageCreateResponse {
  /**
   * The newly created page with all relations
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

/**
 * Schema for a page entity
 */
export interface PageListResponse {
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

export interface PageCreateParams {
  /**
   * Name of the page, can be null
   */
  name: string | null;

  /**
   * ID of the site this page belongs to
   */
  body_siteId: string;

  /**
   * URL-friendly path segment for the page
   */
  slug: string;

  /**
   * Banner media for the page, can be null
   */
  bannerMedia?: unknown;

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

export interface PageListParams extends MyCursorPageParams {
  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';
}

export declare namespace Pages {
  export {
    type PageCreateResponse as PageCreateResponse,
    type PageListResponse as PageListResponse,
    type PageListResponsesMyCursorPage as PageListResponsesMyCursorPage,
    type PageCreateParams as PageCreateParams,
    type PageListParams as PageListParams,
  };
}
