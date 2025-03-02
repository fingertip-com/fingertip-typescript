// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class ZapierSubscriptions extends APIResource {
  /**
   * Creates a new webhook subscription for receiving Zapier notifications
   */
  create(
    body: ZapierSubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ZapierSubscriptionCreateResponse> {
    return this._client.post('/api/v1/zapier-subscriptions', { body, ...options });
  }

  /**
   * Removes an existing Zapier webhook subscription
   */
  delete(
    body: ZapierSubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZapierSubscriptionDeleteResponse> {
    return this._client.delete('/api/v1/zapier-subscriptions', { body, ...options });
  }
}

/**
 * Successful subscription creation response
 */
export interface ZapierSubscriptionCreateResponse {
  /**
   * Unique identifier for the created subscription
   */
  id: string;
}

/**
 * Successful subscription deletion response
 */
export interface ZapierSubscriptionDeleteResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

export interface ZapierSubscriptionCreateParams {
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

export interface ZapierSubscriptionDeleteParams {
  /**
   * ID of the subscription to delete
   */
  subscriptionId: string;
}

export declare namespace ZapierSubscriptions {
  export {
    type ZapierSubscriptionCreateResponse as ZapierSubscriptionCreateResponse,
    type ZapierSubscriptionDeleteResponse as ZapierSubscriptionDeleteResponse,
    type ZapierSubscriptionCreateParams as ZapierSubscriptionCreateParams,
    type ZapierSubscriptionDeleteParams as ZapierSubscriptionDeleteParams,
  };
}
