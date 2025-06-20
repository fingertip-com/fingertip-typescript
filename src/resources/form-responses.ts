// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FormResponses extends APIResource {
  /**
   * Retrieves form responses for a specific form template and site.
   */
  list(query: FormResponseListParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/form-responses', { query, ...options });
  }

  /**
   * Retrieves a sample of form responses for a specific form template.
   */
  listSample(query: FormResponseListSampleParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/form-responses/sample', { query, ...options });
  }
}

/**
 * Array of form responses matching the query
 */
export type FormResponseListResponse = unknown;

/**
 * Array of form responses matching the query
 */
export type FormResponseListSampleResponse = unknown;

export interface FormResponseListParams {
  /**
   * ID of the form template to retrieve responses for
   */
  form_template_id: string;

  /**
   * ID of the site to retrieve responses for
   */
  site_id: string;
}

export interface FormResponseListSampleParams {
  /**
   * Slug of the form template to retrieve responses for
   */
  form_template_slug: string;
}

export declare namespace FormResponses {
  export {
    type FormResponseListResponse as FormResponseListResponse,
    type FormResponseListSampleResponse as FormResponseListSampleResponse,
    type FormResponseListParams as FormResponseListParams,
    type FormResponseListSampleParams as FormResponseListSampleParams,
  };
}
