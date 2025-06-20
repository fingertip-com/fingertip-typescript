// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Creates a new block within the specified page. Returns the created block or
   * validation errors.
   */
  create(pageID: string, body: BlockCreateParams, options?: RequestOptions): APIPromise<BlockCreateResponse> {
    return this._client.post(path`/v1/pages/${pageID}/blocks`, { body, ...options });
  }

  /**
   * Retrieves all blocks associated with the specified page ID
   */
  list(pageID: string, options?: RequestOptions): APIPromise<BlockListResponse> {
    return this._client.get(path`/v1/pages/${pageID}/blocks`, options);
  }
}

/**
 * Successful block creation response
 */
export interface BlockCreateResponse {
  /**
   * The newly created block
   */
  block: BlockCreateResponse.Block;
}

export namespace BlockCreateResponse {
  /**
   * The newly created block
   */
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
}

/**
 * Successful response containing page blocks
 */
export interface BlockListResponse {
  /**
   * Array of blocks associated with the page
   */
  blocks: Array<BlockListResponse.Block>;
}

export namespace BlockListResponse {
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
}

export interface BlockCreateParams {
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

export declare namespace Blocks {
  export {
    type BlockCreateResponse as BlockCreateResponse,
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
  };
}
