// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BlocksAPI from './blocks';
import { BlockCreateParams, BlockCreateResponse, BlockListResponse, Blocks } from './blocks';
import * as ThemeAPI from './theme';
import { Theme, ThemeRetrieveResponse, ThemeUpdateParams, ThemeUpdateResponse } from './theme';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pages extends APIResource {
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  theme: ThemeAPI.Theme = new ThemeAPI.Theme(this._client);

  /**
   * Retrieves a specific page by ID including all related blocks and theme
   * information.
   */
  retrieve(pageID: string, options?: RequestOptions): APIPromise<PageRetrieveResponse> {
    return this._client.get(path`/v1/pages/${pageID}`, options);
  }

  /**
   * Updates an existing page with the provided data.
   */
  update(
    pageID: string,
    body: PageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageUpdateResponse> {
    return this._client.patch(path`/v1/pages/${pageID}`, { body, ...options });
  }

  /**
   * Permanently deletes a page and all associated data.
   */
  delete(pageID: string, options?: RequestOptions): APIPromise<PageDeleteResponse> {
    return this._client.delete(path`/v1/pages/${pageID}`, options);
  }
}

/**
 * Successful page retrieval response
 */
export interface PageRetrieveResponse {
  /**
   * The requested page with all relations
   */
  page: PageRetrieveResponse.Page;
}

export namespace PageRetrieveResponse {
  /**
   * The requested page with all relations
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
 * Successful page update response
 */
export interface PageUpdateResponse {
  /**
   * The updated page with all relations
   */
  page: PageUpdateResponse.Page;
}

export namespace PageUpdateResponse {
  /**
   * The updated page with all relations
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
 * Successful page deletion response
 */
export interface PageDeleteResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

export interface PageUpdateParams {
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
   * Name of the page, can be null
   */
  name?: string | null;

  /**
   * Display position of the page within the site
   */
  position?: number;

  /**
   * ID of the site this page belongs to
   */
  siteId?: string;

  /**
   * URL-friendly path segment for the page
   */
  slug?: string;

  /**
   * Social media icons configuration, can be null
   */
  socialIcons?: unknown;
}

Pages.Blocks = Blocks;
Pages.Theme = Theme;

export declare namespace Pages {
  export {
    type PageRetrieveResponse as PageRetrieveResponse,
    type PageUpdateResponse as PageUpdateResponse,
    type PageDeleteResponse as PageDeleteResponse,
    type PageUpdateParams as PageUpdateParams,
  };

  export {
    Blocks as Blocks,
    type BlockCreateResponse as BlockCreateResponse,
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
  };

  export {
    Theme as Theme,
    type ThemeRetrieveResponse as ThemeRetrieveResponse,
    type ThemeUpdateResponse as ThemeUpdateResponse,
    type ThemeUpdateParams as ThemeUpdateParams,
  };
}
