// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'bookings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bookings/requests',
  operationId: 'getBookingRequests',
};

export const tool: Tool = {
  name: 'list_requests_bookings',
  description: 'Retrieves a paginated list of pending booking requests for a site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'Site ID to fetch booking requests for',
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
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bookings.listRequests(body));
};

export default { metadata, tool, handler };
