// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites.pages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites/{siteId}/pages',
  operationId: 'getPages',
};

export const tool: Tool = {
  name: 'list_sites_pages',
  description: 'Retrieves a paginated list of pages for a specific site.',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
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
  const { siteId, ...body } = args as any;
  return asTextContentResult(await client.sites.pages.list(siteId, body));
};

export default { metadata, tool, handler };
