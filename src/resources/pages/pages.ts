// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from './blocks';
import { BlockCreateParams, BlockCreateResponse, BlockListResponse, Blocks } from './blocks';
import * as ThemeAPI from './theme';
import {
  Theme,
  ThemePatchParams,
  ThemePatchResponse,
  ThemeRetrieveResponse,
  ThemeUpsertParams,
  ThemeUpsertResponse,
} from './theme';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pages extends APIResource {
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  theme: ThemeAPI.Theme = new ThemeAPI.Theme(this._client);

  /**
   * Retrieves a specific page by ID.
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
    type ThemePatchResponse as ThemePatchResponse,
    type ThemeUpsertResponse as ThemeUpsertResponse,
    type ThemePatchParams as ThemePatchParams,
    type ThemeUpsertParams as ThemeUpsertParams,
  };
}
