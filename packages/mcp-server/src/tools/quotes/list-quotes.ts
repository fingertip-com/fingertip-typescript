// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/quotes',
  operationId: 'getQuotes',
};

export const tool: Tool = {
  name: 'list_quotes',
  description: 'Retrieves a paginated list of quotes for sites the user has access to',
  inputSchema: {
    type: 'object',
    properties: {
      siteSlug: {
        type: 'string',
        description: 'Site slug to retrieve quotes for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term',
      },
      siteContactId: {
        type: 'string',
        description: 'Site contact ID',
      },
      statusFilters: {
        type: 'array',
        description: 'Filter by quote status',
        items: {
          type: 'string',
          enum: ['DRAFT', 'PENDING', 'ACCEPTED', 'DECLINED', 'EXPIRED'],
        },
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.quotes.list(body));
};

export default { metadata, tool, handler };
