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
  httpPath: '/v1/bookings/{bookingId}/complete',
  operationId: 'completeBooking',
};

export const tool: Tool = {
  name: 'complete_bookings',
  description: 'Marks a booking as completed or no-show',
  inputSchema: {
    type: 'object',
    properties: {
      bookingId: {
        type: 'string',
      },
      siteId: {
        type: 'string',
        description: 'Site ID for permission validation',
      },
      chargeAmountInCents: {
        type: 'number',
        description: 'Amount to charge in cents',
      },
      noShow: {
        type: 'boolean',
        description: 'Whether the booking was a no-show',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { bookingId, ...body } = args as any;
  return asTextContentResult(await client.bookings.complete(bookingId, body));
};

export default { metadata, tool, handler };
