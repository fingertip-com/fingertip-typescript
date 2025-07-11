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

export declare namespace Theme {
  export { type ThemeRetrieveResponse as ThemeRetrieveResponse };
}
