// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Creates a new block within the specified page. Returns the created block or
   * validation errors.
   */
  create(pageID: string, body: BlockCreateParams, options?: RequestOptions): APIPromise<BlockCreateResponse> {
    return this._client.post(path`/api/v1/pages/${pageID}/blocks`, { body, ...options });
  }

  /**
   * Retrieves all blocks associated with the specified page ID
   */
  list(pageID: string, options?: RequestOptions): APIPromise<BlockListResponse> {
    return this._client.get(path`/api/v1/pages/${pageID}/blocks`, options);
  }
}

export interface BlockCreateResponse {
  block: BlockCreateResponse.Block;
}

export namespace BlockCreateResponse {
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
}

export interface BlockListResponse {
  blocks: Array<BlockListResponse.Block>;
}

export namespace BlockListResponse {
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
}

export interface BlockCreateParams {
  componentBlockId: string | null;

  kind: string | null;

  name: string;

  content?: unknown;

  isComponent?: boolean;
}

export declare namespace Blocks {
  export {
    type BlockCreateResponse as BlockCreateResponse,
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
  };
}
