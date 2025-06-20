// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Bookings extends APIResource {
  /**
   * Retrieves a paginated list of bookings for a site with optional status filtering
   */
  list(
    query: BookingListParams,
    options?: RequestOptions,
  ): PagePromise<BookingListResponsesMyCursorPage, BookingListResponse> {
    return this._client.getAPIList('/v1/bookings', MyCursorPage<BookingListResponse>, { query, ...options });
  }

  /**
   * Retrieves a sample of bookings with basic information
   */
  listSample(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/bookings/sample', options);
  }
}

export type BookingListResponsesMyCursorPage = MyCursorPage<BookingListResponse>;

export interface BookingListResponse {
  /**
   * Unique identifier for the booking
   */
  id: string;

  /**
   * Reason for cancellation if the booking was cancelled, can be null
   */
  cancellationReason: string | null;

  /**
   * Date and time when the booking was created
   */
  createdAt: string;

  /**
   * Description of the booking, can be null
   */
  description: string | null;

  /**
   * ID of the destination calendar for this booking, can be null
   */
  destinationCalendarId: string | null;

  /**
   * End date and time of the booking
   */
  endTime: string;

  /**
   * ID of the event type for this booking, can be null
   */
  eventTypeId: string | null;

  /**
   * ID of the original booking if this is a rescheduled booking, can be null
   */
  fromReschedule: string | null;

  /**
   * Indicates if the booking event will be recorded
   */
  isRecorded: boolean;

  /**
   * Location where the booking will take place, can be null
   */
  location: string | null;

  /**
   * ID of the recurring event this booking belongs to, can be null
   */
  recurringEventId: string | null;

  /**
   * Reason for rejection if the booking was rejected, can be null
   */
  rejectionReason: string | null;

  /**
   * Indicates if the booking has been rescheduled, can be null
   */
  rescheduled: boolean | null;

  /**
   * Reason for rescheduling if the booking was rescheduled, can be null
   */
  rescheduledReason: string | null;

  /**
   * ID of the site where the booking was made, can be null
   */
  siteId: string | null;

  /**
   * Phone number for SMS reminders, can be null
   */
  smsReminderNumber: string | null;

  /**
   * Source of the booking (e.g., website, app), can be null
   */
  source: string | null;

  /**
   * Start date and time of the booking
   */
  startTime: string;

  /**
   * Current status of the booking
   */
  status:
    | 'CANCELLED'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'PENDING'
    | 'COMPLETED'
    | 'NO_SHOW'
    | 'REFUNDED'
    | 'PENDING_CONFIRMATION';

  /**
   * Title of the booking, can be null
   */
  title: string | null;

  /**
   * Date and time when the booking was last updated
   */
  updatedAt: string;

  /**
   * ID of the user who created the booking, can be null
   */
  userId: string | null;

  /**
   * List of attendees for the booking
   */
  attendees?: unknown;

  /**
   * Calendar event data associated with the booking, can be null
   */
  calendarEvent?: null;

  /**
   * Additional metadata for the booking, can be null
   */
  metadata?: null;

  /**
   * Custom response data associated with the booking, can be null
   */
  response?: null;
}

/**
 * Array of simplified bookings with basic information
 */
export type BookingListSampleResponse = unknown;

export interface BookingListParams extends MyCursorPageParams {
  /**
   * Site ID to fetch bookings for
   */
  siteId: string;

  /**
   * Field to sort by (default: updatedAt)
   */
  sortBy?: 'createdAt' | 'updatedAt';

  /**
   * Sort direction (default: desc)
   */
  sortDirection?: 'asc' | 'desc';

  /**
   * Filter by booking status
   */
  status?:
    | 'CANCELLED'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'PENDING'
    | 'COMPLETED'
    | 'NO_SHOW'
    | 'REFUNDED'
    | 'PENDING_CONFIRMATION';
}

export declare namespace Bookings {
  export {
    type BookingListResponse as BookingListResponse,
    type BookingListSampleResponse as BookingListSampleResponse,
    type BookingListResponsesMyCursorPage as BookingListResponsesMyCursorPage,
    type BookingListParams as BookingListParams,
  };
}
