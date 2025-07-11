// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Theme extends APIResource {
  /**
   * Retrieves the theme associated with a specific page
   */
  retrieve(pageID: string, options?: RequestOptions): APIPromise<ThemeRetrieveResponse> {
    return this._client.get(path`/v1/pages/${pageID}/theme`, options);
  }

  /**
   * Creates or updates the theme for a specific page
   */
  update(
    pageID: string,
    body: ThemeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThemeUpdateResponse> {
    return this._client.patch(path`/v1/pages/${pageID}/theme`, { body, ...options });
  }

  /**
   * Applies JSON Patch operations to the theme content field
   */
  patch(
    pageID: string,
    params: ThemePatchParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<ThemePatchResponse> {
    const { body } = params ?? {};
    return this._client.patch(path`/v1/pages/${pageID}/theme/patch`, { body: body, ...options });
  }
}

/**
 * Successful theme retrieval response
 */
export interface ThemeRetrieveResponse {
  /**
   * The theme associated with the requested page
   */
  pageTheme: ThemeRetrieveResponse.PageTheme;
}

export namespace ThemeRetrieveResponse {
  /**
   * The theme associated with the requested page
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
 * Successful theme update response
 */
export interface ThemeUpdateResponse {
  /**
   * The updated or created page theme
   */
  pageTheme: ThemeUpdateResponse.PageTheme;
}

export namespace ThemeUpdateResponse {
  /**
   * The updated or created page theme
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
 * Successful patch application response
 */
export interface ThemePatchResponse {
  /**
   * The updated page theme after applying patches
   */
  pageTheme: ThemePatchResponse.PageTheme;
}

export namespace ThemePatchResponse {
  /**
   * The updated page theme after applying patches
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

export interface ThemeUpdateParams {
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

export interface ThemePatchParams {
  /**
   * Array of JSON Patch operations to apply
   */
  body?: Array<ThemePatchParams.Body>;
}

export namespace ThemePatchParams {
  /**
   * JSON Patch operation following RFC 6902
   */
  export interface Body {
    /**
     * The operation to perform
     */
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

    /**
     * JSON pointer to the target location
     */
    path: string;

    /**
     * Source path for move and copy operations
     */
    from?: string;

    /**
     * Value for add, replace, and test operations
     */
    value?: unknown;
  }
}

export declare namespace Theme {
  export {
    type ThemeRetrieveResponse as ThemeRetrieveResponse,
    type ThemeUpdateResponse as ThemeUpdateResponse,
    type ThemePatchResponse as ThemePatchResponse,
    type ThemeUpdateParams as ThemeUpdateParams,
    type ThemePatchParams as ThemePatchParams,
  };
}
