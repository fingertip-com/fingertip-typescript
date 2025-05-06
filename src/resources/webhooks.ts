// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook subscription for receiving Webhook notifications
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/v1/webhooks', { body, ...options });
  }

  /**
   * Retrieves a paginated list of webhooks with optional filtering
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookListResponsesMyCursorPage, WebhookListResponse> {
    return this._client.getAPIList('/v1/webhooks', MyCursorPage<WebhookListResponse>, { query, ...options });
  }

  /**
   * Removes an existing webhook subscription
   */
  delete(body: WebhookDeleteParams, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete('/v1/webhooks', { body, ...options });
  }
}

export type WebhookListResponsesMyCursorPage = MyCursorPage<WebhookListResponse>;

/**
 * Successful subscription creation response
 */
export interface WebhookCreateResponse {
  /**
   * Unique identifier for the created subscription
   */
  id: string;
}

/**
 * Webhook schema including related triggers
 */
export interface WebhookListResponse {
  /**
   * Unique identifier for the webhook
   */
  id: string;

  /**
   * Date and time when the webhook was created
   */
  createdAt: string;

  /**
   * URL of the webhook endpoint
   */
  endpointUrl: string;

  /**
   * Array of triggers associated with this webhook
   */
  triggers: Array<WebhookListResponse.Trigger>;

  /**
   * Date and time when the webhook was last updated
   */
  updatedAt: string;

  /**
   * User ID of the webhook
   */
  userId: string;
}

export namespace WebhookListResponse {
  export interface Trigger {
    /**
     * Unique identifier for the trigger
     */
    id: string;

    /**
     * Date and time when the trigger was created
     */
    createdAt: string;

    /**
     * Type of event that triggers this webhook
     */
    eventType: string;

    /**
     * Date and time when the trigger was last updated
     */
    updatedAt: string;

    /**
     * ID of the parent webhook
     */
    webhookId: string;

    /**
     * Additional input data for the trigger
     */
    inputData?: unknown;
  }
}

/**
 * Successful subscription deletion response
 */
export interface WebhookDeleteResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

export interface WebhookCreateParams {
  /**
   * URL that will receive webhook notifications
   */
  targetUrl: string;

  /**
   * Key that identifies the type of trigger for this subscription
   */
  triggerKey: string;

  /**
   * Slug of the form template to subscribe to, can be null or undefined
   */
  formTemplateSlug?: string | null;
}

export interface WebhookListParams extends MyCursorPageParams {
  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';
}

export interface WebhookDeleteParams {
  /**
   * ID of the subscription to delete
   */
  subscriptionId: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookListResponsesMyCursorPage as WebhookListResponsesMyCursorPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
  };
}
