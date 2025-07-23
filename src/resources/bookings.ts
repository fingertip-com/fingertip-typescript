// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MyCursorPage, type MyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   * Accepts a pending booking request and confirms the booking
   */
  accept(
    bookingID: string,
    body: BookingAcceptParams,
    options?: RequestOptions,
  ): APIPromise<BookingAcceptResponse> {
    return this._client.post(path`/v1/bookings/${bookingID}/accept`, { body, ...options });
  }

  /**
   * Cancels an existing booking as a host
   */
  cancel(
    bookingID: string,
    body: BookingCancelParams,
    options?: RequestOptions,
  ): APIPromise<BookingCancelResponse> {
    return this._client.post(path`/v1/bookings/${bookingID}/cancel`, { body, ...options });
  }

  /**
   * Marks a booking as completed or no-show
   */
  complete(
    bookingID: string,
    body: BookingCompleteParams,
    options?: RequestOptions,
  ): APIPromise<BookingCompleteResponse> {
    return this._client.post(path`/v1/bookings/${bookingID}/complete`, { body, ...options });
  }

  /**
   * Declines a pending booking request
   */
  decline(
    bookingID: string,
    body: BookingDeclineParams,
    options?: RequestOptions,
  ): APIPromise<BookingDeclineResponse> {
    return this._client.post(path`/v1/bookings/${bookingID}/decline`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of pending booking requests for a site
   */
  listRequests(
    query: BookingListRequestsParams,
    options?: RequestOptions,
  ): PagePromise<BookingListRequestsResponsesMyCursorPage, BookingListRequestsResponse> {
    return this._client.getAPIList('/v1/bookings/requests', MyCursorPage<BookingListRequestsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a sample of bookings with basic information
   */
  listSample(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/bookings/sample', options);
  }

  /**
   * Changes the start and end time of an existing booking
   */
  reschedule(
    bookingID: string,
    body: BookingRescheduleParams,
    options?: RequestOptions,
  ): APIPromise<BookingRescheduleResponse> {
    return this._client.post(path`/v1/bookings/${bookingID}/reschedule`, { body, ...options });
  }
}

export type BookingListResponsesMyCursorPage = MyCursorPage<BookingListResponse>;

export type BookingListRequestsResponsesMyCursorPage = MyCursorPage<BookingListRequestsResponse>;

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

export interface BookingAcceptResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface BookingCancelResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface BookingCompleteResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface BookingDeclineResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface BookingListRequestsResponse {
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

export interface BookingRescheduleResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface BookingListParams extends MyCursorPageParams {
  /**
   * Site ID to fetch bookings for
   */
  siteId: string;

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

export interface BookingAcceptParams {
  /**
   * Site ID for permission validation
   */
  siteId: string;
}

export interface BookingCancelParams {
  /**
   * Site ID for permission validation
   */
  siteId: string;

  /**
   * Reason for cancelling the booking
   */
  cancellationReason?: string;

  /**
   * Whether to charge a cancellation fee
   */
  chargeCancellationFee?: boolean;
}

export interface BookingCompleteParams {
  /**
   * Site ID for permission validation
   */
  siteId: string;

  /**
   * Amount to charge in cents
   */
  chargeAmountInCents?: number;

  /**
   * Whether the booking was a no-show
   */
  noShow?: boolean;
}

export interface BookingDeclineParams {
  /**
   * Site ID for permission validation
   */
  siteId: string;

  /**
   * Reason for declining the booking
   */
  cancellationReason?: string;
}

export interface BookingListRequestsParams extends MyCursorPageParams {
  /**
   * Site ID to fetch booking requests for
   */
  siteId: string;
}

export interface BookingRescheduleParams {
  /**
   * New end time for the booking
   */
  endTime: string;

  /**
   * New start time for the booking
   */
  startTime: string;
}

export declare namespace Bookings {
  export {
    type BookingListResponse as BookingListResponse,
    type BookingAcceptResponse as BookingAcceptResponse,
    type BookingCancelResponse as BookingCancelResponse,
    type BookingCompleteResponse as BookingCompleteResponse,
    type BookingDeclineResponse as BookingDeclineResponse,
    type BookingListRequestsResponse as BookingListRequestsResponse,
    type BookingListSampleResponse as BookingListSampleResponse,
    type BookingRescheduleResponse as BookingRescheduleResponse,
    type BookingListResponsesMyCursorPage as BookingListResponsesMyCursorPage,
    type BookingListRequestsResponsesMyCursorPage as BookingListRequestsResponsesMyCursorPage,
    type BookingListParams as BookingListParams,
    type BookingAcceptParams as BookingAcceptParams,
    type BookingCancelParams as BookingCancelParams,
    type BookingCompleteParams as BookingCompleteParams,
    type BookingDeclineParams as BookingDeclineParams,
    type BookingListRequestsParams as BookingListRequestsParams,
    type BookingRescheduleParams as BookingRescheduleParams,
  };
}
