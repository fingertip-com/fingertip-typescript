// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class FormResponses extends APIResource {
  /**
   * Retrieves form responses for a specific form template and site.
   */
  list(
    query: FormResponseListParams,
    options?: RequestOptions,
  ): PagePromise<FormResponseListResponsesMyCursorPage, FormResponseListResponse | null> {
    return this._client.getAPIList('/v1/form-responses', MyCursorPage<FormResponseListResponse | null>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a sample of form responses for a specific form template.
   */
  listSample(
    query: FormResponseListSampleParams,
    options?: RequestOptions,
  ): PagePromise<FormResponseListSampleResponsesMyCursorPage, FormResponseListSampleResponse | null> {
    return this._client.getAPIList(
      '/v1/form-responses/sample',
      MyCursorPage<FormResponseListSampleResponse | null>,
      { query, ...options },
    );
  }
}

export type FormResponseListResponsesMyCursorPage = MyCursorPage<FormResponseListResponse | null>;

export type FormResponseListSampleResponsesMyCursorPage = MyCursorPage<FormResponseListSampleResponse | null>;

export type FormResponseListResponse = unknown;

export type FormResponseListSampleResponse = unknown;

export interface FormResponseListParams extends MyCursorPageParams {
  /**
   * ID of the form template to retrieve responses for
   */
  form_template_id: string;

  /**
   * ID of the site to retrieve responses for
   */
  site_id: string;
}

export interface FormResponseListSampleParams extends MyCursorPageParams {
  /**
   * Slug of the form template to retrieve responses for
   */
  form_template_slug: string;
}

export declare namespace FormResponses {
  export {
    type FormResponseListResponse as FormResponseListResponse,
    type FormResponseListSampleResponse as FormResponseListSampleResponse,
    type FormResponseListResponsesMyCursorPage as FormResponseListResponsesMyCursorPage,
    type FormResponseListSampleResponsesMyCursorPage as FormResponseListSampleResponsesMyCursorPage,
    type FormResponseListParams as FormResponseListParams,
    type FormResponseListSampleParams as FormResponseListSampleParams,
  };
}
