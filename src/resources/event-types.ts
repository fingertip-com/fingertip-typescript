// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EventTypes extends APIResource {
  /**
   * Retrieves a specific published event type by ID
   */
  retrieve(eventTypeID: string, options?: RequestOptions): APIPromise<EventTypeRetrieveResponse> {
    return this._client.get(path`/v1/event-types/${eventTypeID}`, options);
  }

  /**
   * Retrieves a paginated list of published event types for a specific site
   */
  list(
    query: EventTypeListParams,
    options?: RequestOptions,
  ): PagePromise<EventTypeListResponsesMyCursorPage, EventTypeListResponse> {
    return this._client.getAPIList('/v1/event-types', MyCursorPage<EventTypeListResponse>, {
      query,
      ...options,
    });
  }
}

export type EventTypeListResponsesMyCursorPage = MyCursorPage<EventTypeListResponse>;

/**
 * Successful event type retrieval response
 */
export interface EventTypeRetrieveResponse {
  /**
   * The requested event type
   */
  eventType: EventTypeRetrieveResponse.EventType;
}

export namespace EventTypeRetrieveResponse {
  /**
   * The requested event type
   */
  export interface EventType {
    /**
     * Unique identifier for the event type
     */
    id: string;

    /**
     * Type of attendance
     */
    attendanceType: 'MEETING' | 'GROUP' | 'EVENT';

    /**
     * Event type color
     */
    color: string | null;

    /**
     * Date and time when the event type was created
     */
    createdAt: string;

    /**
     * Currency code
     */
    currency: string;

    /**
     * Description of the event type
     */
    description: string | null;

    /**
     * Whether the event type is hidden
     */
    hidden: boolean;

    /**
     * Duration of the event in minutes
     */
    length: number;

    /**
     * Available locations for the event
     */
    locations: Array<unknown> | null;

    /**
     * Maximum number of attendees
     */
    maxAttendees: number | null;

    /**
     * Name of the event type
     */
    name: string;

    /**
     * Price in cents
     */
    priceInCents: number;

    /**
     * Whether booking requires confirmation
     */
    requiresConfirmation: boolean;

    /**
     * ID of the site this event type belongs to
     */
    siteId: string;

    /**
     * URL-friendly identifier for the event type
     */
    slug: string;

    /**
     * Date and time when the event type was last updated
     */
    updatedAt: string;

    /**
     * Event type media
     */
    media?: unknown;

    /**
     * Additional metadata
     */
    metadata?: unknown;
  }
}

/**
 * Schema for an event type
 */
export interface EventTypeListResponse {
  /**
   * Unique identifier for the event type
   */
  id: string;

  /**
   * Type of attendance
   */
  attendanceType: 'MEETING' | 'GROUP' | 'EVENT';

  /**
   * Event type color
   */
  color: string | null;

  /**
   * Date and time when the event type was created
   */
  createdAt: string;

  /**
   * Currency code
   */
  currency: string;

  /**
   * Description of the event type
   */
  description: string | null;

  /**
   * Whether the event type is hidden
   */
  hidden: boolean;

  /**
   * Duration of the event in minutes
   */
  length: number;

  /**
   * Available locations for the event
   */
  locations: Array<unknown> | null;

  /**
   * Maximum number of attendees
   */
  maxAttendees: number | null;

  /**
   * Name of the event type
   */
  name: string;

  /**
   * Price in cents
   */
  priceInCents: number;

  /**
   * Whether booking requires confirmation
   */
  requiresConfirmation: boolean;

  /**
   * ID of the site this event type belongs to
   */
  siteId: string;

  /**
   * URL-friendly identifier for the event type
   */
  slug: string;

  /**
   * Date and time when the event type was last updated
   */
  updatedAt: string;

  /**
   * Event type media
   */
  media?: unknown;

  /**
   * Additional metadata
   */
  metadata?: unknown;
}

export interface EventTypeListParams extends MyCursorPageParams {
  /**
   * ID of the site to retrieve event types for
   */
  siteId: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt' | 'position';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';
}

export declare namespace EventTypes {
  export {
    type EventTypeRetrieveResponse as EventTypeRetrieveResponse,
    type EventTypeListResponse as EventTypeListResponse,
    type EventTypeListResponsesMyCursorPage as EventTypeListResponsesMyCursorPage,
    type EventTypeListParams as EventTypeListParams,
  };
}
