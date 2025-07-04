// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'bookings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bookings/{bookingId}/reschedule',
  operationId: 'rescheduleBooking',
};

export const tool: Tool = {
  name: 'reschedule_bookings',
  description: 'Changes the start and end time of an existing booking',
  inputSchema: {
    type: 'object',
    properties: {
      bookingId: {
        type: 'string',
      },
      endTime: {
        type: 'string',
        description: 'New end time for the booking',
        format: 'date-time',
      },
      startTime: {
        type: 'string',
        description: 'New start time for the booking',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { bookingId, ...body } = args as any;
  return asTextContentResult(await client.bookings.reschedule(bookingId, body));
};

export default { metadata, tool, handler };
