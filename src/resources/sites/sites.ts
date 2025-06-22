// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvitationsAPI from './invitations';
import { Invitations } from './invitations';
import * as MembershipsAPI from './memberships';
import {
  MembershipCreateParams,
  MembershipCreateResponse,
  MembershipDeleteResponse,
  MembershipListParams,
  MembershipListResponse,
  MembershipListResponsesMyCursorPage,
  MembershipRetrieveResponse,
  MembershipUpdateParams,
  MembershipUpdateResponse,
  Memberships,
} from './memberships';
import * as PagesAPI from './pages';
import {
  PageCreateParams,
  PageCreateResponse,
  PageListParams,
  PageListResponse,
  PageListResponsesMyCursorPage,
  Pages,
} from './pages';
import { APIPromise } from '../../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sites extends APIResource {
  pages: PagesAPI.Pages = new PagesAPI.Pages(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);

  /**
   * Creates a new site with associated pages, themes, and blocks
   */
  create(body: SiteCreateParams, options?: RequestOptions): APIPromise<SiteCreateResponse> {
    return this._client.post('/v1/sites', { body, ...options });
  }

  /**
   * Retrieves a specific site and its related data by site ID
   */
  retrieve(siteID: string, options?: RequestOptions): APIPromise<SiteRetrieveResponse> {
    return this._client.get(path`/v1/sites/${siteID}`, options);
  }

  /**
   * Updates an existing site with provided partial data
   */
  update(
    siteID: string,
    body: SiteUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SiteUpdateResponse> {
    return this._client.patch(path`/v1/sites/${siteID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of sites with optional filtering
   */
  list(
    query: SiteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SiteListResponsesMyCursorPage, SiteListResponse> {
    return this._client.getAPIList('/v1/sites', MyCursorPage<SiteListResponse>, { query, ...options });
  }

  /**
   * Permanently deletes a site by its ID
   */
  delete(siteID: string, options?: RequestOptions): APIPromise<SiteDeleteResponse> {
    return this._client.delete(path`/v1/sites/${siteID}`, options);
  }

  /**
   * Retrieves comprehensive analytics data including views, clicks, traffic sources,
   * geographic data, and store metrics for the specified site
   */
  retrieveAnalytics(
    siteID: string,
    query: SiteRetrieveAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SiteRetrieveAnalyticsResponse> {
    return this._client.get(path`/v1/sites/${siteID}/analytics`, { query, ...options });
  }
}

export type SiteListResponsesMyCursorPage = MyCursorPage<SiteListResponse>;

/**
 * Successful site creation response
 */
export interface SiteCreateResponse {
  /**
   * The newly created site with all relations
   */
  site: SiteCreateResponse.Site;
}

export namespace SiteCreateResponse {
  /**
   * The newly created site with all relations
   */
  export interface Site {
    /**
     * Unique identifier for the site
     */
    id: string;

    /**
     * Type of business the site represents, can be null
     */
    businessType: string | null;

    /**
     * Date and time when the site was created
     */
    createdAt: string;

    /**
     * Description of the site, can be null
     */
    description: string | null;

    /**
     * ID of the site's home page, can be null
     */
    homePageId: string | null;

    /**
     * ID of the associated location, can be null
     */
    locationId: string | null;

    /**
     * Name of the site
     */
    name: string;

    /**
     * Custom plan override for the site, can be null
     */
    overridePlan: string | null;

    /**
     * Array of pages associated with this site
     */
    pages: Array<Site.Page>;

    /**
     * URL-friendly identifier for the site
     */
    slug: string;

    /**
     * Time zone for the site, can be null
     */
    timeZone: string | null;

    /**
     * Date and time when the site was last updated
     */
    updatedAt: string;

    /**
     * ID of the workspace this site belongs to, can be null
     */
    workspaceId: string | null;

    /**
     * Logo media for the site, can be null
     */
    logoMedia?: unknown;

    /**
     * Social media icons configuration, can be null
     */
    socialIcons?: unknown;

    /**
     * Current status of the site
     */
    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED';
  }

  export namespace Site {
    /**
     * Schema for a page entity
     */
    export interface Page {
      /**
       * Unique identifier for the page
       */
      id: string;

      /**
       * Date and time when the page was created
       */
      createdAt: string;

      /**
       * Description of the page content, can be null
       */
      description: string | null;

      /**
       * Name of the page, can be null
       */
      name: string | null;

      /**
       * ID of the theme applied to this page, can be null
       */
      pageThemeId: string | null;

      /**
       * ID of the site this page belongs to
       */
      siteId: string;

      /**
       * URL-friendly path segment for the page
       */
      slug: string;

      /**
       * Date and time when the page was last updated
       */
      updatedAt: string;

      /**
       * Banner media for the page, can be null
       */
      bannerMedia?: unknown;

      /**
       * Logo media for the page, can be null
       */
      logoMedia?: unknown;

      /**
       * Display position of the page within the site
       */
      position?: number;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;
    }
  }
}

/**
 * Successful site retrieval response
 */
export interface SiteRetrieveResponse {
  /**
   * The requested site with all relations
   */
  site: SiteRetrieveResponse.Site;
}

export namespace SiteRetrieveResponse {
  /**
   * The requested site with all relations
   */
  export interface Site {
    /**
     * Unique identifier for the site
     */
    id: string;

    /**
     * Type of business the site represents, can be null
     */
    businessType: string | null;

    /**
     * Date and time when the site was created
     */
    createdAt: string;

    /**
     * Description of the site, can be null
     */
    description: string | null;

    /**
     * ID of the site's home page, can be null
     */
    homePageId: string | null;

    /**
     * ID of the associated location, can be null
     */
    locationId: string | null;

    /**
     * Name of the site
     */
    name: string;

    /**
     * Custom plan override for the site, can be null
     */
    overridePlan: string | null;

    /**
     * Array of pages associated with this site
     */
    pages: Array<Site.Page>;

    /**
     * URL-friendly identifier for the site
     */
    slug: string;

    /**
     * Time zone for the site, can be null
     */
    timeZone: string | null;

    /**
     * Date and time when the site was last updated
     */
    updatedAt: string;

    /**
     * ID of the workspace this site belongs to, can be null
     */
    workspaceId: string | null;

    /**
     * Logo media for the site, can be null
     */
    logoMedia?: unknown;

    /**
     * Social media icons configuration, can be null
     */
    socialIcons?: unknown;

    /**
     * Current status of the site
     */
    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED';
  }

  export namespace Site {
    /**
     * Schema for a page entity
     */
    export interface Page {
      /**
       * Unique identifier for the page
       */
      id: string;

      /**
       * Date and time when the page was created
       */
      createdAt: string;

      /**
       * Description of the page content, can be null
       */
      description: string | null;

      /**
       * Name of the page, can be null
       */
      name: string | null;

      /**
       * ID of the theme applied to this page, can be null
       */
      pageThemeId: string | null;

      /**
       * ID of the site this page belongs to
       */
      siteId: string;

      /**
       * URL-friendly path segment for the page
       */
      slug: string;

      /**
       * Date and time when the page was last updated
       */
      updatedAt: string;

      /**
       * Banner media for the page, can be null
       */
      bannerMedia?: unknown;

      /**
       * Logo media for the page, can be null
       */
      logoMedia?: unknown;

      /**
       * Display position of the page within the site
       */
      position?: number;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;
    }
  }
}

/**
 * Successful site update response
 */
export interface SiteUpdateResponse {
  /**
   * The updated site with all relations
   */
  site: SiteUpdateResponse.Site;
}

export namespace SiteUpdateResponse {
  /**
   * The updated site with all relations
   */
  export interface Site {
    /**
     * Unique identifier for the site
     */
    id: string;

    /**
     * Type of business the site represents, can be null
     */
    businessType: string | null;

    /**
     * Date and time when the site was created
     */
    createdAt: string;

    /**
     * Description of the site, can be null
     */
    description: string | null;

    /**
     * ID of the site's home page, can be null
     */
    homePageId: string | null;

    /**
     * ID of the associated location, can be null
     */
    locationId: string | null;

    /**
     * Name of the site
     */
    name: string;

    /**
     * Custom plan override for the site, can be null
     */
    overridePlan: string | null;

    /**
     * Array of pages associated with this site
     */
    pages: Array<Site.Page>;

    /**
     * URL-friendly identifier for the site
     */
    slug: string;

    /**
     * Time zone for the site, can be null
     */
    timeZone: string | null;

    /**
     * Date and time when the site was last updated
     */
    updatedAt: string;

    /**
     * ID of the workspace this site belongs to, can be null
     */
    workspaceId: string | null;

    /**
     * Logo media for the site, can be null
     */
    logoMedia?: unknown;

    /**
     * Social media icons configuration, can be null
     */
    socialIcons?: unknown;

    /**
     * Current status of the site
     */
    status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED';
  }

  export namespace Site {
    /**
     * Schema for a page entity
     */
    export interface Page {
      /**
       * Unique identifier for the page
       */
      id: string;

      /**
       * Date and time when the page was created
       */
      createdAt: string;

      /**
       * Description of the page content, can be null
       */
      description: string | null;

      /**
       * Name of the page, can be null
       */
      name: string | null;

      /**
       * ID of the theme applied to this page, can be null
       */
      pageThemeId: string | null;

      /**
       * ID of the site this page belongs to
       */
      siteId: string;

      /**
       * URL-friendly path segment for the page
       */
      slug: string;

      /**
       * Date and time when the page was last updated
       */
      updatedAt: string;

      /**
       * Banner media for the page, can be null
       */
      bannerMedia?: unknown;

      /**
       * Logo media for the page, can be null
       */
      logoMedia?: unknown;

      /**
       * Display position of the page within the site
       */
      position?: number;

      /**
       * Social media icons configuration, can be null
       */
      socialIcons?: unknown;
    }
  }
}

/**
 * Schema for a site entity
 */
export interface SiteListResponse {
  /**
   * Unique identifier for the site
   */
  id: string;

  /**
   * Type of business the site represents, can be null
   */
  businessType: string | null;

  /**
   * Date and time when the site was created
   */
  createdAt: string;

  /**
   * Description of the site, can be null
   */
  description: string | null;

  /**
   * ID of the site's home page, can be null
   */
  homePageId: string | null;

  /**
   * ID of the associated location, can be null
   */
  locationId: string | null;

  /**
   * Name of the site
   */
  name: string;

  /**
   * Custom plan override for the site, can be null
   */
  overridePlan: string | null;

  /**
   * URL-friendly identifier for the site
   */
  slug: string;

  /**
   * Time zone for the site, can be null
   */
  timeZone: string | null;

  /**
   * Date and time when the site was last updated
   */
  updatedAt: string;

  /**
   * ID of the workspace this site belongs to, can be null
   */
  workspaceId: string | null;

  /**
   * Logo media for the site, can be null
   */
  logoMedia?: unknown;

  /**
   * Social media icons configuration, can be null
   */
  socialIcons?: unknown;

  /**
   * Current status of the site
   */
  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED';
}

/**
 * Successful site deletion response
 */
export interface SiteDeleteResponse {
  /**
   * Whether the deletion was successful
   */
  success: boolean;
}

/**
 * Comprehensive analytics data
 */
export interface SiteRetrieveAnalyticsResponse {
  /**
   * Daily activity breakdown
   */
  activities: Array<SiteRetrieveAnalyticsResponse.Activity>;

  /**
   * Browser usage breakdown
   */
  browsers: Array<SiteRetrieveAnalyticsResponse.Browser>;

  /**
   * Geographic breakdown by city
   */
  cities: Array<SiteRetrieveAnalyticsResponse.City>;

  /**
   * Geographic breakdown by country
   */
  countries: Array<SiteRetrieveAnalyticsResponse.Country>;

  /**
   * Device type breakdown
   */
  devices: Array<SiteRetrieveAnalyticsResponse.Device>;

  /**
   * Traffic sources breakdown
   */
  referrers: Array<SiteRetrieveAnalyticsResponse.Referrer>;

  /**
   * Total number of click events
   */
  totalClicks: number;

  /**
   * Total number of page views
   */
  totalViews: number;

  /**
   * Block interaction analytics
   */
  blocks?: Array<SiteRetrieveAnalyticsResponse.Block>;

  /**
   * Store analytics data
   */
  store?: SiteRetrieveAnalyticsResponse.Store;
}

export namespace SiteRetrieveAnalyticsResponse {
  /**
   * Daily activity data
   */
  export interface Activity {
    /**
     * Number of clicks on this date
     */
    clicks: number;

    /**
     * Date in YYYY-MM-DD format
     */
    date: string;

    /**
     * Number of views on this date
     */
    views: number;
  }

  /**
   * Donut chart data point
   */
  export interface Browser {
    /**
     * Category label
     */
    label: string;

    /**
     * Percentage of total
     */
    percentage: number;

    /**
     * Category value/count
     */
    value: number;
  }

  /**
   * Donut chart data point
   */
  export interface City {
    /**
     * Category label
     */
    label: string;

    /**
     * Percentage of total
     */
    percentage: number;

    /**
     * Category value/count
     */
    value: number;
  }

  /**
   * Donut chart data point
   */
  export interface Country {
    /**
     * Category label
     */
    label: string;

    /**
     * Percentage of total
     */
    percentage: number;

    /**
     * Category value/count
     */
    value: number;
  }

  /**
   * Donut chart data point
   */
  export interface Device {
    /**
     * Category label
     */
    label: string;

    /**
     * Percentage of total
     */
    percentage: number;

    /**
     * Category value/count
     */
    value: number;
  }

  /**
   * Donut chart data point
   */
  export interface Referrer {
    /**
     * Category label
     */
    label: string;

    /**
     * Percentage of total
     */
    percentage: number;

    /**
     * Category value/count
     */
    value: number;
  }

  /**
   * Block interaction analytics
   */
  export interface Block {
    /**
     * Block identifier
     */
    blockId: string;

    /**
     * Type of block
     */
    blockType: string;

    /**
     * Number of interactions
     */
    interactions: number;
  }

  /**
   * Store analytics data
   */
  export interface Store {
    /**
     * Best selling products
     */
    bestSellers: Array<Store.BestSeller>;

    /**
     * Whether payment processing is connected
     */
    hasActiveConnection: boolean;

    /**
     * Whether the store has sales history
     */
    hasSalesHistory: boolean;

    /**
     * Store statistics
     */
    stats: Store.Stats;

    /**
     * Store sales summary
     */
    summary: Store.Summary;
  }

  export namespace Store {
    /**
     * Best selling product data
     */
    export interface BestSeller {
      /**
       * Product ID
       */
      productId: string;

      /**
       * Product name
       */
      productName: string;

      /**
       * Revenue in cents
       */
      revenue: number;

      /**
       * Number of units sold
       */
      unitsSold: number;
    }

    /**
     * Store statistics
     */
    export interface Stats {
      /**
       * Total number of coupons
       */
      totalCoupons: number;

      /**
       * Total number of invoices
       */
      totalInvoices: number;

      /**
       * Total number of orders
       */
      totalOrders: number;

      /**
       * Total number of products
       */
      totalProducts: number;

      /**
       * Total number of quotes
       */
      totalQuotes: number;
    }

    /**
     * Store sales summary
     */
    export interface Summary {
      /**
       * Bookings summary
       */
      bookings: Summary.Bookings;

      /**
       * Invoices summary
       */
      invoices: Summary.Invoices;

      /**
       * Orders summary
       */
      orders: Summary.Orders;

      /**
       * Tips summary
       */
      tips: Summary.Tips;

      /**
       * Combined sales summary
       */
      totalSales: Summary.TotalSales;
    }

    export namespace Summary {
      /**
       * Bookings summary
       */
      export interface Bookings {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Total fees in cents
         */
        fees: number;

        /**
         * Total taxes in cents
         */
        taxes: number;

        /**
         * Total number of transactions
         */
        totalCount: number;

        /**
         * Total revenue in cents
         */
        totalRevenue: number;
      }

      /**
       * Invoices summary
       */
      export interface Invoices {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Total fees in cents
         */
        fees: number;

        /**
         * Total taxes in cents
         */
        taxes: number;

        /**
         * Total number of transactions
         */
        totalCount: number;

        /**
         * Total revenue in cents
         */
        totalRevenue: number;
      }

      /**
       * Orders summary
       */
      export interface Orders {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Total fees in cents
         */
        fees: number;

        /**
         * Total taxes in cents
         */
        taxes: number;

        /**
         * Total number of transactions
         */
        totalCount: number;

        /**
         * Total revenue in cents
         */
        totalRevenue: number;
      }

      /**
       * Tips summary
       */
      export interface Tips {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Total fees in cents
         */
        fees: number;

        /**
         * Total taxes in cents
         */
        taxes: number;

        /**
         * Total number of transactions
         */
        totalCount: number;

        /**
         * Total revenue in cents
         */
        totalRevenue: number;
      }

      /**
       * Combined sales summary
       */
      export interface TotalSales {
        /**
         * Currency code
         */
        currency: string;

        /**
         * Total fees in cents
         */
        fees: number;

        /**
         * Total taxes in cents
         */
        taxes: number;

        /**
         * Total number of transactions
         */
        totalCount: number;

        /**
         * Total revenue in cents
         */
        totalRevenue: number;
      }
    }
  }
}

export interface SiteCreateParams {
  /**
   * Type of business the site represents, can be null
   */
  businessType: string | null;

  /**
   * Name of the site
   */
  name: string;

  /**
   * Array of pages to create with the site
   */
  pages: Array<SiteCreateParams.Page>;

  /**
   * URL-friendly identifier for the site
   */
  slug: string;

  /**
   * Description of the site, can be null
   */
  description?: string | null;

  /**
   * ID of the site's home page, can be null
   */
  homePageId?: string | null;

  /**
   * ID of the associated location, can be null
   */
  locationId?: string | null;

  /**
   * Logo media for the site, can be null
   */
  logoMedia?: unknown;

  /**
   * Social media icons configuration, can be null
   */
  socialIcons?: unknown;

  /**
   * Current status of the site
   */
  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED';

  /**
   * Time zone for the site, can be null
   */
  timeZone?: string | null;

  /**
   * ID of the workspace this site belongs to, can be null
   */
  workspaceId?: string | null;
}

export namespace SiteCreateParams {
  /**
   * Page to create with theme and blocks
   */
  export interface Page {
    /**
     * Name of the page, can be null
     */
    name: string | null;

    /**
     * Theme for the page
     */
    pageTheme: Page.PageTheme;

    /**
     * URL-friendly path segment for the page
     */
    slug: string;

    /**
     * Banner media for the page, can be null
     */
    bannerMedia?: unknown;

    /**
     * Content blocks for the page
     */
    blocks?: Array<Page.Block>;

    /**
     * Description of the page content, can be null
     */
    description?: string | null;

    /**
     * Logo media for the page, can be null
     */
    logoMedia?: unknown;

    /**
     * Display position of the page within the site
     */
    position?: number;

    /**
     * Social media icons configuration, can be null
     */
    socialIcons?: unknown;
  }

  export namespace Page {
    /**
     * Theme for the page
     */
    export interface PageTheme {
      /**
       * ID of the parent component theme if this is an instance, can be null
       */
      componentPageThemeId?: string | null;

      /**
       * Theme content configuration, can be null
       */
      content?: unknown;

      /**
       * Whether this theme is a reusable component
       */
      isComponent?: boolean;
    }

    /**
     * Schema for creating a new block
     */
    export interface Block {
      /**
       * ID of the component block if this is an instance, can be null
       */
      componentBlockId: string | null;

      /**
       * Type or category of the block, can be null
       */
      kind: string | null;

      /**
       * Name of the block
       */
      name: string;

      /**
       * Content of the block, can be null
       */
      content?: unknown;

      /**
       * Whether this block is a component
       */
      isComponent?: boolean;
    }
  }
}

export interface SiteUpdateParams {
  /**
   * Type of business the site represents, can be null
   */
  businessType?: string | null;

  /**
   * Description of the site, can be null
   */
  description?: string | null;

  /**
   * ID of the site's home page, can be null
   */
  homePageId?: string | null;

  /**
   * ID of the associated location, can be null
   */
  locationId?: string | null;

  /**
   * Logo media for the site, can be null
   */
  logoMedia?: unknown;

  /**
   * Name of the site
   */
  name?: string;

  /**
   * URL-friendly identifier for the site
   */
  slug?: string;

  /**
   * Social media icons configuration, can be null
   */
  socialIcons?: unknown;

  /**
   * Current status of the site
   */
  status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED';

  /**
   * Time zone for the site, can be null
   */
  timeZone?: string | null;

  /**
   * ID of the workspace this site belongs to, can be null
   */
  workspaceId?: string | null;
}

export interface SiteListParams extends MyCursorPageParams {
  /**
   * Search query
   */
  search?: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';

  /**
   * Filter sites by status
   */
  statuses?: Array<'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO' | 'ARCHIVED'>;

  /**
   * Filter sites by workspace ID
   */
  workspaceId?: string;
}

export interface SiteRetrieveAnalyticsParams {
  /**
   * Include store analytics data
   */
  includeStore?: boolean;

  /**
   * Time period for analytics data
   */
  period?: '7d' | '30d' | '90d' | '1y' | 'all';
}

Sites.Pages = Pages;
Sites.Invitations = Invitations;
Sites.Memberships = Memberships;

export declare namespace Sites {
  export {
    type SiteCreateResponse as SiteCreateResponse,
    type SiteRetrieveResponse as SiteRetrieveResponse,
    type SiteUpdateResponse as SiteUpdateResponse,
    type SiteListResponse as SiteListResponse,
    type SiteDeleteResponse as SiteDeleteResponse,
    type SiteRetrieveAnalyticsResponse as SiteRetrieveAnalyticsResponse,
    type SiteListResponsesMyCursorPage as SiteListResponsesMyCursorPage,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
    type SiteListParams as SiteListParams,
    type SiteRetrieveAnalyticsParams as SiteRetrieveAnalyticsParams,
  };

  export {
    Pages as Pages,
    type PageCreateResponse as PageCreateResponse,
    type PageListResponse as PageListResponse,
    type PageListResponsesMyCursorPage as PageListResponsesMyCursorPage,
    type PageCreateParams as PageCreateParams,
    type PageListParams as PageListParams,
  };

  export { Invitations as Invitations };

  export {
    Memberships as Memberships,
    type MembershipCreateResponse as MembershipCreateResponse,
    type MembershipRetrieveResponse as MembershipRetrieveResponse,
    type MembershipUpdateResponse as MembershipUpdateResponse,
    type MembershipListResponse as MembershipListResponse,
    type MembershipDeleteResponse as MembershipDeleteResponse,
    type MembershipListResponsesMyCursorPage as MembershipListResponsesMyCursorPage,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
  };
}
