// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * Sends a message as the site owner to a site contact
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<MessageCreateResponse> {
    return this._client.post('/v1/messages', { body, ...options });
  }

  /**
   * Retrieves messages for a site contact or all site owner messages
   */
  list(
    query: MessageListParams,
    options?: RequestOptions,
  ): PagePromise<MessageListResponsesMyCursorPage, MessageListResponse> {
    return this._client.getAPIList('/v1/messages', MyCursorPage<MessageListResponse>, { query, ...options });
  }
}

export type MessageListResponsesMyCursorPage = MyCursorPage<MessageListResponse>;

/**
 * Successful message creation response
 */
export interface MessageCreateResponse {
  /**
   * The created message
   */
  message: MessageCreateResponse.Message;
}

export namespace MessageCreateResponse {
  /**
   * The created message
   */
  export interface Message {
    /**
     * Unique identifier for the message
     */
    id: string;

    /**
     * Plain text content of the message
     */
    content: string;

    /**
     * Timestamp when message was created
     */
    createdAt: string;

    /**
     * Timestamp when message was sent, can be null
     */
    sentAt: string | null;

    /**
     * ID of the site contact recipient
     */
    siteContactId: string;

    /**
     * Delivery status of the message
     */
    status: 'QUEUED' | 'SENDING' | 'DELIVERED' | 'OPENED' | 'CLICKED' | 'FAILED' | 'REJECTED';
  }
}

/**
 * Schema for a simplified message entity
 */
export interface MessageListResponse {
  /**
   * Unique identifier for the message
   */
  id: string;

  /**
   * Plain text content of the message
   */
  content: string;

  /**
   * Timestamp when message was created
   */
  createdAt: string;

  /**
   * Timestamp when message was sent, can be null
   */
  sentAt: string | null;

  /**
   * ID of the site contact recipient
   */
  siteContactId: string;

  /**
   * Delivery status of the message
   */
  status: 'QUEUED' | 'SENDING' | 'DELIVERED' | 'OPENED' | 'CLICKED' | 'FAILED' | 'REJECTED';
}

export interface MessageCreateParams {
  /**
   * Plain text content of the message
   */
  content: string;

  /**
   * ID of the site contact recipient
   */
  siteContactId: string;

  /**
   * Slug of the site
   */
  siteSlug: string;
}

export interface MessageListParams extends MyCursorPageParams {
  /**
   * Site slug to filter messages
   */
  siteSlug: string;

  /**
   * Site contact ID to filter messages for specific contact
   */
  siteContactId?: string;
}

export declare namespace Messages {
  export {
    type MessageCreateResponse as MessageCreateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageListResponsesMyCursorPage as MessageListResponsesMyCursorPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
