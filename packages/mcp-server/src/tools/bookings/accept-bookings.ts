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
  httpPath: '/v1/bookings/{bookingId}/accept',
  operationId: 'acceptBookingRequest',
};

export const tool: Tool = {
  name: 'accept_bookings',
  description: 'Accepts a pending booking request and confirms the booking',
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
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { bookingId, ...body } = args as any;
  return asTextContentResult(await client.bookings.accept(bookingId, body));
};

export default { metadata, tool, handler };
