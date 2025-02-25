// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Retrieves a specific block by its ID. Returns 404 if the block is not found.
   */
  retrieve(blockID: string, options?: RequestOptions): APIPromise<BlockRetrieveResponse> {
    return this._client.get(path`/api/v1/blocks/${blockID}`, options);
  }

  /**
   * Updates an existing block with the provided data. Allows partial updates.
   * Returns 404 if the block is not found.
   */
  update(
    blockID: string,
    body: BlockUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockUpdateResponse> {
    return this._client.patch(path`/api/v1/blocks/${blockID}`, { body, ...options });
  }

  /**
   * Permanently deletes a block. Returns a success status or 404 if the block is not
   * found.
   */
  delete(blockID: string, options?: RequestOptions): APIPromise<BlockDeleteResponse> {
    return this._client.delete(path`/api/v1/blocks/${blockID}`, options);
  }
}

export interface BlockRetrieveResponse {
  block: BlockRetrieveResponse.Block;
}

export namespace BlockRetrieveResponse {
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

export interface BlockUpdateResponse {
  block: BlockUpdateResponse.Block;
}

export namespace BlockUpdateResponse {
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

export interface BlockDeleteResponse {
  success: boolean;
}

export interface BlockUpdateParams {
  componentBlockId?: string | null;

  content?: unknown;

  isComponent?: boolean;

  kind?: string | null;

  name?: string;
}

export declare namespace Blocks {
  export {
    type BlockRetrieveResponse as BlockRetrieveResponse,
    type BlockUpdateResponse as BlockUpdateResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockUpdateParams as BlockUpdateParams,
  };
}
