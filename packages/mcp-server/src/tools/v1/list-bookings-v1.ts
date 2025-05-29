// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bookings',
  operationId: 'getBookings',
};

export const tool: Tool = {
  name: 'list_bookings_v1',
  description: 'Retrieves a paginated list of bookings for a site with optional status filtering',
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
        description: 'Number of items per page (default: 25, max: 100)',
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
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.listBookings(body);
};

export default { metadata, tool, handler };
