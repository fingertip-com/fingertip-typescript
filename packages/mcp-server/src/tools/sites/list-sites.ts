// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites',
  operationId: 'getSites',
};

export const tool: Tool = {
  name: 'list_sites',
  description: 'Retrieves a paginated list of sites with optional filtering',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 25, max: 100)',
      },
      search: {
        type: 'string',
        description: 'Search query',
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
      statuses: {
        type: 'array',
        description: 'Filter sites by status',
        items: {
          type: 'string',
          enum: ['EMPTY', 'UNPUBLISHED', 'PREVIEW', 'SOFT_CLAIM', 'ENABLED', 'DEMO', 'ARCHIVED'],
        },
      },
      workspaceId: {
        type: 'string',
        description: 'Filter sites by workspace ID',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sites.list(body));
};

export default { metadata, tool, handler };
