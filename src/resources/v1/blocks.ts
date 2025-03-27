// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Retrieves a specific block by its ID. Returns 404 if the block is not found.
   */
  retrieve(blockID: string, options?: RequestOptions): APIPromise<BlockRetrieveResponse> {
    return this._client.get(path`/v1/blocks/${blockID}`, options);
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
    return this._client.patch(path`/v1/blocks/${blockID}`, { body, ...options });
  }

  /**
   * Permanently deletes a block. Returns a success status or 404 if the block is not
   * found.
   */
  delete(blockID: string, options?: RequestOptions): APIPromise<BlockDeleteResponse> {
    return this._client.delete(path`/v1/blocks/${blockID}`, options);
  }
}

/**
 * Successful block retrieval response
 */
export interface BlockRetrieveResponse {
  /**
   * The requested block
   */
  block: BlockRetrieveResponse.Block;
}

export namespace BlockRetrieveResponse {
  /**
   * The requested block
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
 * Successful block update response
 */
export interface BlockUpdateResponse {
  /**
   * The updated block
   */
  block: BlockUpdateResponse.Block;
}

export namespace BlockUpdateResponse {
  /**
   * The updated block
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
 * Successful block deletion response
 */
export interface BlockDeleteResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

export interface BlockUpdateParams {
  /**
   * ID of the component block if this is an instance, can be null
   */
  componentBlockId?: string | null;

  /**
   * Content of the block, can be null
   */
  content?: unknown;

  /**
   * Whether this block is a component
   */
  isComponent?: boolean;

  /**
   * Type or category of the block, can be null
   */
  kind?: string | null;

  /**
   * Name of the block
   */
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
