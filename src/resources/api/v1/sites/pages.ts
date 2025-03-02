// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pages extends APIResource {
  /**
   * Creates a new page within a site with the provided content.
   */
  create(siteID: string, body: PageCreateParams, options?: RequestOptions): APIPromise<PageCreateResponse> {
    return this._client.post(path`/api/v1/sites/${siteID}/pages`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of pages for a specific site.
   */
  list(
    siteID: string,
    query: PageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageListResponse> {
    return this._client.get(path`/api/v1/sites/${siteID}/pages`, { query, ...options });
  }
}

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
     * Array of content blocks associated with the page
     */
    blocks: Array<Page.Block>;

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
     * Theme applied to the page, can be null
     */
    pageTheme: Page.PageTheme | null;

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

  export namespace Page {
    export interface Block {
      /**
       * Unique identifier for the block
       */
      id: string;

      /**
       * ID of the component block if this is an instance, can be null
       */
      componentBlockId: string | null;

      /**
       * Date and time when the block was created
       */
      createdAt: string;

      /**
       * Type or category of the block, can be null
       */
      kind: string | null;

      /**
       * Name of the block
       */
      name: string;

      /**
       * ID of the page this block belongs to
       */
      pageId: string;

      /**
       * Date and time when the block was last updated
       */
      updatedAt: string;

      /**
       * Content of the block, can be null
       */
      content?: unknown;

      /**
       * Whether this block is a component
       */
      isComponent?: boolean;
    }

    /**
     * Theme applied to the page, can be null
     */
    export interface PageTheme {
      /**
       * Unique identifier for the page theme
       */
      id: string;

      /**
       * ID of the parent component theme if this is an instance, can be null
       */
      componentPageThemeId: string | null;

      /**
       * Date and time when the theme was created
       */
      createdAt: string;

      /**
       * Date and time when the theme was last updated
       */
      updatedAt: string;

      /**
       * Theme content configuration, can be null
       */
      content?: unknown;

      /**
       * Whether this theme is a reusable component
       */
      isComponent?: boolean;
    }
  }
}

/**
 * Successful pages listing response
 */
export interface PageListResponse {
  /**
   * Array of pages in the current page of results
   */
  items: Array<PageListResponse.Item>;

  /**
   * Pagination information
   */
  pageInfo: PageListResponse.PageInfo;

  /**
   * Total number of pages matching the query
   */
  total: number;
}

export namespace PageListResponse {
  /**
   * Page schema including related blocks and theme information
   */
  export interface Item {
    /**
     * Unique identifier for the page
     */
    id: string;

    /**
     * Array of content blocks associated with the page
     */
    blocks: Array<Item.Block>;

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
     * Theme applied to the page, can be null
     */
    pageTheme: Item.PageTheme | null;

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

  export namespace Item {
    export interface Block {
      /**
       * Unique identifier for the block
       */
      id: string;

      /**
       * ID of the component block if this is an instance, can be null
       */
      componentBlockId: string | null;

      /**
       * Date and time when the block was created
       */
      createdAt: string;

      /**
       * Type or category of the block, can be null
       */
      kind: string | null;

      /**
       * Name of the block
       */
      name: string;

      /**
       * ID of the page this block belongs to
       */
      pageId: string;

      /**
       * Date and time when the block was last updated
       */
      updatedAt: string;

      /**
       * Content of the block, can be null
       */
      content?: unknown;

      /**
       * Whether this block is a component
       */
      isComponent?: boolean;
    }

    /**
     * Theme applied to the page, can be null
     */
    export interface PageTheme {
      /**
       * Unique identifier for the page theme
       */
      id: string;

      /**
       * ID of the parent component theme if this is an instance, can be null
       */
      componentPageThemeId: string | null;

      /**
       * Date and time when the theme was created
       */
      createdAt: string;

      /**
       * Date and time when the theme was last updated
       */
      updatedAt: string;

      /**
       * Theme content configuration, can be null
       */
      content?: unknown;

      /**
       * Whether this theme is a reusable component
       */
      isComponent?: boolean;
    }
  }

  /**
   * Pagination information
   */
  export interface PageInfo {
    /**
     * Indicates if there are more pages after the current one
     */
    hasNextPage: boolean;

    /**
     * Indicates if there are previous pages before the current one
     */
    hasPreviousPage: boolean;

    /**
     * Cursor pointing to the last item in the current page, if available
     */
    endCursor?: string;

    /**
     * Cursor pointing to the first item in the current page, if available
     */
    startCursor?: string;
  }
}

export interface PageCreateParams {
  /**
   * Name of the page, can be null
   */
  name: string | null;

  /**
   * Theme to apply to the new page
   */
  pageTheme: PageCreateParams.PageTheme;

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
   * Initial content blocks for the page
   */
  blocks?: Array<PageCreateParams.Block>;

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

export namespace PageCreateParams {
  /**
   * Theme to apply to the new page
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

export interface PageListParams {
  /**
   * Pagination cursor
   */
  cursor?: string;

  /**
   * Number of items per page (default: varies, max: 100)
   */
  pageSize?: unknown;

  /**
   * Field to sort by (createdAt or updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (ascending or descending)
   */
  sortDirection?: 'asc' | 'desc';
}

export declare namespace Pages {
  export {
    type PageCreateResponse as PageCreateResponse,
    type PageListResponse as PageListResponse,
    type PageCreateParams as PageCreateParams,
    type PageListParams as PageListParams,
  };
}
