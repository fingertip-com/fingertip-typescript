// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class HelpDocs extends APIResource {
  /**
   * Search through help documentation articles using full-text search. Returns
   * articles ordered by relevance.
   */
  searchArticles(
    query: HelpDocSearchArticlesParams,
    options?: RequestOptions,
  ): APIPromise<HelpDocSearchArticlesResponse> {
    return this._client.get('/help-docs/articles', { query, ...options });
  }
}

/**
 * Successful search response
 */
export interface HelpDocSearchArticlesResponse {
  /**
   * Array of matching articles
   */
  articles: Array<HelpDocSearchArticlesResponse.Article>;

  /**
   * Total number of matching articles
   */
  total: number;
}

export namespace HelpDocSearchArticlesResponse {
  /**
   * Help documentation article
   */
  export interface Article {
    /**
     * Unique identifier for the article
     */
    id: string;

    /**
     * Full content body of the article
     */
    body: string;

    /**
     * Search relevance score
     */
    relevanceScore: number;

    /**
     * Title of the article
     */
    title: string;

    /**
     * Direct URL to the article
     */
    url: string | null;
  }
}

export interface HelpDocSearchArticlesParams {
  /**
   * Search query string
   */
  search: string;

  /**
   * Number of results to return (default: 10, max: 20)
   */
  limit?: number | null;
}

export declare namespace HelpDocs {
  export {
    type HelpDocSearchArticlesResponse as HelpDocSearchArticlesResponse,
    type HelpDocSearchArticlesParams as HelpDocSearchArticlesParams,
  };
}
