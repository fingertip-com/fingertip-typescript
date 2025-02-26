// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../../../pagination';
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
  ): PagePromise<PageListResponsesMyCursorPage, PageListResponse> {
    return this._client.getAPIList(path`/api/v1/sites/${siteID}/pages`, MyCursorPage<PageListResponse>, {
      query,
      ...options,
    });
  }
}

export type PageListResponsesMyCursorPage = MyCursorPage<PageListResponse>;

export interface PageCreateResponse {
  page: PageCreateResponse.Page;
}

export namespace PageCreateResponse {
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

export interface PageListResponse {
  id: string;

  blocks: Array<PageListResponse.Block>;

  createdAt: string;

  description: string | null;

  name: string | null;

  pageTheme: PageListResponse.PageTheme | null;

  pageThemeId: string | null;

  siteId: string;

  slug: string;

  updatedAt: string;

  bannerMedia?: unknown;

  logoMedia?: unknown;

  position?: number;

  socialIcons?: unknown;
}

export namespace PageListResponse {
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

export interface PageCreateParams {
  name: string | null;

  pageTheme: PageCreateParams.PageTheme;

  body_siteId: string;

  slug: string;

  bannerMedia?: unknown;

  blocks?: Array<PageCreateParams.Block>;

  description?: string | null;

  logoMedia?: unknown;

  position?: number;

  socialIcons?: unknown;
}

export namespace PageCreateParams {
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

export interface PageListParams extends MyCursorPageParams {}

export declare namespace Pages {
  export {
    type PageCreateResponse as PageCreateResponse,
    type PageListResponse as PageListResponse,
    type PageListResponsesMyCursorPage as PageListResponsesMyCursorPage,
    type PageCreateParams as PageCreateParams,
    type PageListParams as PageListParams,
  };
}
