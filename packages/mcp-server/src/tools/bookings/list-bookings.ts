// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'bookings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bookings',
  operationId: 'getBookings',
};

export const tool: Tool = {
  name: 'list_bookings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of bookings for a site with optional status filtering\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'List of booking items in the current page',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the booking'\n          },\n          cancellationReason: {\n            type: 'string',\n            description: 'Reason for cancellation if the booking was cancelled, can be null'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the booking was created',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string',\n            description: 'Description of the booking, can be null'\n          },\n          destinationCalendarId: {\n            type: 'string',\n            description: 'ID of the destination calendar for this booking, can be null'\n          },\n          endTime: {\n            type: 'string',\n            description: 'End date and time of the booking',\n            format: 'date-time'\n          },\n          eventTypeId: {\n            type: 'string',\n            description: 'ID of the event type for this booking, can be null'\n          },\n          fromReschedule: {\n            type: 'string',\n            description: 'ID of the original booking if this is a rescheduled booking, can be null'\n          },\n          isRecorded: {\n            type: 'boolean',\n            description: 'Indicates if the booking event will be recorded'\n          },\n          location: {\n            type: 'string',\n            description: 'Location where the booking will take place, can be null'\n          },\n          recurringEventId: {\n            type: 'string',\n            description: 'ID of the recurring event this booking belongs to, can be null'\n          },\n          rejectionReason: {\n            type: 'string',\n            description: 'Reason for rejection if the booking was rejected, can be null'\n          },\n          rescheduled: {\n            anyOf: [              {\n                type: 'boolean'\n              },\n              {\n                type: 'null'\n              }\n            ],\n            description: 'Indicates if the booking has been rescheduled, can be null'\n          },\n          rescheduledReason: {\n            type: 'string',\n            description: 'Reason for rescheduling if the booking was rescheduled, can be null'\n          },\n          siteId: {\n            type: 'string',\n            description: 'ID of the site where the booking was made, can be null'\n          },\n          smsReminderNumber: {\n            type: 'string',\n            description: 'Phone number for SMS reminders, can be null'\n          },\n          source: {\n            type: 'string',\n            description: 'Source of the booking (e.g., website, app), can be null'\n          },\n          startTime: {\n            type: 'string',\n            description: 'Start date and time of the booking',\n            format: 'date-time'\n          },\n          status: {\n            type: 'string',\n            description: 'Current status of the booking',\n            enum: [              'CANCELLED',\n              'ACCEPTED',\n              'REJECTED',\n              'PENDING',\n              'COMPLETED',\n              'NO_SHOW',\n              'REFUNDED',\n              'PENDING_CONFIRMATION'\n            ]\n          },\n          title: {\n            type: 'string',\n            description: 'Title of the booking, can be null'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the booking was last updated',\n            format: 'date-time'\n          },\n          userId: {\n            type: 'string',\n            description: 'ID of the user who created the booking, can be null'\n          },\n          attendees: {\n            type: 'object',\n            description: 'List of attendees for the booking'\n          },\n          calendarEvent: {\n            type: 'null',\n            description: 'Calendar event data associated with the booking, can be null'\n          },\n          metadata: {\n            type: 'null',\n            description: 'Additional metadata for the booking, can be null'\n          },\n          response: {\n            type: 'null',\n            description: 'Custom response data associated with the booking, can be null'\n          }\n        },\n        required: [          'id',\n          'cancellationReason',\n          'createdAt',\n          'description',\n          'destinationCalendarId',\n          'endTime',\n          'eventTypeId',\n          'fromReschedule',\n          'isRecorded',\n          'location',\n          'recurringEventId',\n          'rejectionReason',\n          'rescheduled',\n          'rescheduledReason',\n          'siteId',\n          'smsReminderNumber',\n          'source',\n          'startTime',\n          'status',\n          'title',\n          'updatedAt',\n          'userId'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of bookings matching the query'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'Site ID to fetch bookings for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt'],
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction (default: desc)',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        description: 'Filter by booking status',
        enum: [
          'CANCELLED',
          'ACCEPTED',
          'REJECTED',
          'PENDING',
          'COMPLETED',
          'NO_SHOW',
          'REFUNDED',
          'PENDING_CONFIRMATION',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.bookings.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
