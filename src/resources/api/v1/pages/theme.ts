// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Theme extends APIResource {
  /**
   * Retrieves the theme associated with a specific page
   */
  retrieve(pageID: string, options?: RequestOptions): APIPromise<ThemeRetrieveResponse> {
    return this._client.get(path`/api/v1/pages/${pageID}/theme`, options);
  }

  /**
   * Creates or updates the theme for a specific page
   */
  update(
    pageID: string,
    body: ThemeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThemeUpdateResponse> {
    return this._client.patch(path`/api/v1/pages/${pageID}/theme`, { body, ...options });
  }
}

export interface ThemeRetrieveResponse {
  pageTheme: ThemeRetrieveResponse.PageTheme;
}

export namespace ThemeRetrieveResponse {
  export interface PageTheme {
    id: string;

    componentPageThemeId: string | null;

    createdAt: string;

    updatedAt: string;

    content?: unknown;

    isComponent?: boolean;
  }
}

export interface ThemeUpdateResponse {
  pageTheme: ThemeUpdateResponse.PageTheme;
}

export namespace ThemeUpdateResponse {
  export interface PageTheme {
    id: string;

    componentPageThemeId: string | null;

    createdAt: string;

    updatedAt: string;

    content?: unknown;

    isComponent?: boolean;
  }
}

export interface ThemeUpdateParams {
  componentPageThemeId?: string | null;

  content?: unknown;

  isComponent?: boolean;
}

export declare namespace Theme {
  export {
    type ThemeRetrieveResponse as ThemeRetrieveResponse,
    type ThemeUpdateResponse as ThemeUpdateResponse,
    type ThemeUpdateParams as ThemeUpdateParams,
  };
}
