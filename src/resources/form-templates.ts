// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FormTemplates extends APIResource {
  /**
   * Retrieves a specific form template with its fields and theme
   */
  retrieve(
    formTemplateID: string,
    query: FormTemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FormTemplateRetrieveResponse> {
    return this._client.get(path`/v1/form-templates/${formTemplateID}`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of form templates for a specific site
   */
  list(
    query: FormTemplateListParams,
    options?: RequestOptions,
  ): PagePromise<FormTemplateListResponsesMyCursorPage, FormTemplateListResponse> {
    return this._client.getAPIList('/v1/form-templates', MyCursorPage<FormTemplateListResponse>, {
      query,
      ...options,
    });
  }
}

export type FormTemplateListResponsesMyCursorPage = MyCursorPage<FormTemplateListResponse>;

/**
 * Successful form template retrieval response
 */
export interface FormTemplateRetrieveResponse {
  /**
   * The requested form template
   */
  formTemplate: FormTemplateRetrieveResponse.FormTemplate;
}

export namespace FormTemplateRetrieveResponse {
  /**
   * The requested form template
   */
  export interface FormTemplate {
    /**
     * Unique identifier for the form template
     */
    id: string;

    /**
     * Submit button text
     */
    buttonText: string | null;

    /**
     * Date and time when the form was created
     */
    createdAt: string;

    /**
     * Custom email recipients
     */
    customRecipients: Array<string>;

    /**
     * Description of the form template
     */
    description: string | null;

    /**
     * Form fields
     */
    formFields: Array<FormTemplate.FormField>;

    /**
     * Form theme
     */
    formTheme: FormTemplate.FormTheme | null;

    /**
     * ID of the form theme
     */
    formThemeId: string | null;

    /**
     * ID of the site this form belongs to
     */
    siteId: string;

    /**
     * URL-friendly identifier for the form template
     */
    slug: string;

    /**
     * Status of the form template
     */
    status: 'ENABLED' | 'PLACEHOLDER';

    /**
     * Thank you message after submission
     */
    thankYouMessage: string | null;

    /**
     * Title of the form template
     */
    title: string | null;

    /**
     * Date and time when the form was last updated
     */
    updatedAt: string;

    /**
     * Whether to use custom recipients
     */
    useCustomRecipients: boolean;

    /**
     * Banner media for the form
     */
    bannerMedia?: unknown;

    /**
     * Number of responses received
     */
    responseCount?: number;
  }

  export namespace FormTemplate {
    /**
     * Form field definition
     */
    export interface FormField {
      /**
       * Form field ID
       */
      id: string;

      /**
       * Field position in the form
       */
      position: number;

      /**
       * Field configuration and properties
       */
      content?: unknown;
    }

    /**
     * Form theme
     */
    export interface FormTheme {
      /**
       * Form theme ID
       */
      id: string;

      /**
       * Theme name
       */
      name: string;

      /**
       * Theme configuration
       */
      config?: unknown;
    }
  }
}

/**
 * Schema for a form template
 */
export interface FormTemplateListResponse {
  /**
   * Unique identifier for the form template
   */
  id: string;

  /**
   * Submit button text
   */
  buttonText: string | null;

  /**
   * Date and time when the form was created
   */
  createdAt: string;

  /**
   * Custom email recipients
   */
  customRecipients: Array<string>;

  /**
   * Description of the form template
   */
  description: string | null;

  /**
   * ID of the form theme
   */
  formThemeId: string | null;

  /**
   * ID of the site this form belongs to
   */
  siteId: string;

  /**
   * URL-friendly identifier for the form template
   */
  slug: string;

  /**
   * Status of the form template
   */
  status: 'ENABLED' | 'PLACEHOLDER';

  /**
   * Thank you message after submission
   */
  thankYouMessage: string | null;

  /**
   * Title of the form template
   */
  title: string | null;

  /**
   * Date and time when the form was last updated
   */
  updatedAt: string;

  /**
   * Whether to use custom recipients
   */
  useCustomRecipients: boolean;

  /**
   * Banner media for the form
   */
  bannerMedia?: unknown;

  /**
   * Number of responses received
   */
  responseCount?: number;
}

export interface FormTemplateRetrieveParams {
  /**
   * ID of the site that owns the form template
   */
  siteId: string;
}

export interface FormTemplateListParams extends MyCursorPageParams {
  /**
   * ID of the site to retrieve form templates for
   */
  siteId: string;

  /**
   * Search query for form template titles
   */
  search?: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt' | 'title';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';
}

export declare namespace FormTemplates {
  export {
    type FormTemplateRetrieveResponse as FormTemplateRetrieveResponse,
    type FormTemplateListResponse as FormTemplateListResponse,
    type FormTemplateListResponsesMyCursorPage as FormTemplateListResponsesMyCursorPage,
    type FormTemplateRetrieveParams as FormTemplateRetrieveParams,
    type FormTemplateListParams as FormTemplateListParams,
  };
}
