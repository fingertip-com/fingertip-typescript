// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BlogPosts extends APIResource {
  /**
   * Retrieves a specific published blog post by ID
   */
  retrieve(blogPostID: string, options?: RequestOptions): APIPromise<BlogPostRetrieveResponse> {
    return this._client.get(path`/v1/blog-posts/${blogPostID}`, options);
  }

  /**
   * Retrieves a paginated list of published blog posts for a specific site
   */
  list(
    query: BlogPostListParams,
    options?: RequestOptions,
  ): PagePromise<BlogPostListResponsesMyCursorPage, BlogPostListResponse> {
    return this._client.getAPIList('/v1/blog-posts', MyCursorPage<BlogPostListResponse>, {
      query,
      ...options,
    });
  }
}

export type BlogPostListResponsesMyCursorPage = MyCursorPage<BlogPostListResponse>;

/**
 * Successful blog post retrieval response
 */
export interface BlogPostRetrieveResponse {
  /**
   * The requested blog post
   */
  post: BlogPostRetrieveResponse.Post;
}

export namespace BlogPostRetrieveResponse {
  /**
   * The requested blog post
   */
  export interface Post {
    /**
     * Unique identifier for the blog post
     */
    id: string;

    /**
     * Date and time when the post was created
     */
    createdAt: string;

    /**
     * Excerpt of the blog post content
     */
    excerpt: string | null;

    /**
     * Caption for the feature image
     */
    featureImageCaption: string | null;

    /**
     * Rendered HTML content
     */
    html: string | null;

    /**
     * Whether this post is featured
     */
    isFeatured: boolean;

    /**
     * SEO meta description
     */
    metaDescription: string | null;

    /**
     * SEO meta title
     */
    metaTitle: string | null;

    /**
     * Date and time when the post was published
     */
    publishedAt: string | null;

    /**
     * ID of the site this post belongs to
     */
    siteId: string;

    /**
     * URL-friendly identifier for the blog post
     */
    slug: string;

    /**
     * Publication status of the post
     */
    status: 'PUBLIC' | 'DRAFT' | 'UNLISTED';

    /**
     * Title of the blog post
     */
    title: string;

    /**
     * Date and time when the post was last updated
     */
    updatedAt: string;

    /**
     * Feature image for the blog post
     */
    featureImage?: unknown;
  }
}

/**
 * Schema for a blog post
 */
export interface BlogPostListResponse {
  /**
   * Unique identifier for the blog post
   */
  id: string;

  /**
   * Date and time when the post was created
   */
  createdAt: string;

  /**
   * Excerpt of the blog post content
   */
  excerpt: string | null;

  /**
   * Caption for the feature image
   */
  featureImageCaption: string | null;

  /**
   * Rendered HTML content
   */
  html: string | null;

  /**
   * Whether this post is featured
   */
  isFeatured: boolean;

  /**
   * SEO meta description
   */
  metaDescription: string | null;

  /**
   * SEO meta title
   */
  metaTitle: string | null;

  /**
   * Date and time when the post was published
   */
  publishedAt: string | null;

  /**
   * ID of the site this post belongs to
   */
  siteId: string;

  /**
   * URL-friendly identifier for the blog post
   */
  slug: string;

  /**
   * Publication status of the post
   */
  status: 'PUBLIC' | 'DRAFT' | 'UNLISTED';

  /**
   * Title of the blog post
   */
  title: string;

  /**
   * Date and time when the post was last updated
   */
  updatedAt: string;

  /**
   * Feature image for the blog post
   */
  featureImage?: unknown;
}

export interface BlogPostListParams extends MyCursorPageParams {
  /**
   * ID of the site to retrieve blog posts for
   */
  siteId: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt' | 'publishedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';
}

export declare namespace BlogPosts {
  export {
    type BlogPostRetrieveResponse as BlogPostRetrieveResponse,
    type BlogPostListResponse as BlogPostListResponse,
    type BlogPostListResponsesMyCursorPage as BlogPostListResponsesMyCursorPage,
    type BlogPostListParams as BlogPostListParams,
  };
}
