// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'blog_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/blog-posts',
  operationId: 'getBlogPosts',
};

export const tool: Tool = {
  name: 'list_blog_posts',
  description: 'Retrieves a paginated list of published blog posts for a specific site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'ID of the site to retrieve blog posts for',
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
        enum: ['createdAt', 'updatedAt', 'publishedAt'],
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
  return asTextContentResult(await client.blogPosts.list(body));
};

export default { metadata, tool, handler };
