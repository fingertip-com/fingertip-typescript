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

export interface ZapierSubscriptionCreateResponse {
  id: string;
}

export interface ZapierSubscriptionDeleteResponse {
  success: boolean;
}

export interface ZapierSubscriptionCreateParams {
  targetUrl: string;

  triggerKey: string;

  formTemplateSlug?: string | null;
}

export interface ZapierSubscriptionDeleteParams {
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
