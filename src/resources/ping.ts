// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ping extends APIResource {
  /**
   * Simple health check endpoint to verify the API is running. Requires
   * authentication.
   */
  check(options?: RequestOptions): APIPromise<PingCheckResponse> {
    return this._client.get('/v1/ping', options);
  }
}

/**
 * Successful ping response
 */
export interface PingCheckResponse {
  /**
   * Response message indicating service status
   */
  message: string;
}

export declare namespace Ping {
  export { type PingCheckResponse as PingCheckResponse };
}
