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
  httpPath: '/v1/bookings/{bookingId}/cancel',
  operationId: 'cancelBooking',
};

export const tool: Tool = {
  name: 'cancel_bookings',
  description: 'Cancels an existing booking as a host',
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
      cancellationReason: {
        type: 'string',
        description: 'Reason for cancelling the booking',
      },
      chargeCancellationFee: {
        type: 'boolean',
        description: 'Whether to charge a cancellation fee',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { bookingId, ...body } = args as any;
  return asTextContentResult(await client.bookings.cancel(bookingId, body));
};

export default { metadata, tool, handler };
