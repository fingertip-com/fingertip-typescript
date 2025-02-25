// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as BlocksAPI from './blocks';
import { BlockCreateParams, BlockCreateResponse, BlockListResponse, Blocks } from './blocks';
import * as ThemeAPI from './theme';
import { Theme, ThemeRetrieveResponse, ThemeUpdateParams, ThemeUpdateResponse } from './theme';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pages extends APIResource {
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  theme: ThemeAPI.Theme = new ThemeAPI.Theme(this._client);

  /**
   * Retrieves a specific page by ID including all related blocks and theme
   * information.
   */
  retrieve(pageID: string, options?: RequestOptions): APIPromise<PageRetrieveResponse> {
    return this._client.get(path`/api/v1/pages/${pageID}`, options);
  }

  /**
   * Updates an existing page with the provided data.
   */
  update(
    pageID: string,
    body: PageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageUpdateResponse> {
    return this._client.patch(path`/api/v1/pages/${pageID}`, { body, ...options });
  }

  /**
   * Permanently deletes a page and all associated data.
   */
  delete(pageID: string, options?: RequestOptions): APIPromise<PageDeleteResponse> {
    return this._client.delete(path`/api/v1/pages/${pageID}`, options);
  }
}

export interface PageRetrieveResponse {
  page: PageRetrieveResponse.Page;
}

export namespace PageRetrieveResponse {
  export interface Page {
    id: string;

    blocks: Array<Page.Block>;

    createdAt: string;

    description: string | null;

    name: string | null;

    pageTheme: Page.PageTheme | null;

    pageThemeId: string | null;

    siteId: string;

    slug: string;

    updatedAt: string;

    bannerMedia?: unknown;

    logoMedia?: unknown;

    position?: number;

    socialIcons?: unknown;
  }

  export namespace Page {
    export interface Block {
      id: string;

      componentBlockId: string | null;

      createdAt: string;

      kind: string | null;

      name: string;

      pageId: string;

      updatedAt: string;

      content?: unknown;

      isComponent?: boolean;
    }

    export interface PageTheme {
      id: string;

      componentPageThemeId: string | null;

      createdAt: string;

      updatedAt: string;

      content?: unknown;

      isComponent?: boolean;
    }
  }
}

export interface PageUpdateResponse {
  page: PageUpdateResponse.Page;
}

export namespace PageUpdateResponse {
  export interface Page {
    id: string;

    blocks: Array<Page.Block>;

    createdAt: string;

    description: string | null;

    name: string | null;

    pageTheme: Page.PageTheme | null;

    pageThemeId: string | null;

    siteId: string;

    slug: string;

    updatedAt: string;

    bannerMedia?: unknown;

    logoMedia?: unknown;

    position?: number;

    socialIcons?: unknown;
  }

  export namespace Page {
    export interface Block {
      id: string;

      componentBlockId: string | null;

      createdAt: string;

      kind: string | null;

      name: string;

      pageId: string;

      updatedAt: string;

      content?: unknown;

      isComponent?: boolean;
    }

    export interface PageTheme {
      id: string;

      componentPageThemeId: string | null;

      createdAt: string;

      updatedAt: string;

      content?: unknown;

      isComponent?: boolean;
    }
  }
}

export interface PageDeleteResponse {
  success: boolean;
}

export interface PageUpdateParams {
  bannerMedia?: unknown;

  description?: string | null;

  logoMedia?: unknown;

  name?: string | null;

  position?: number;

  siteId?: string;

  slug?: string;

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
