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
  httpPath: '/v1/blog-posts/{blogPostId}',
  operationId: 'getBlogPost',
};

export const tool: Tool = {
  name: 'retrieve_blog_posts',
  description: 'Retrieves a specific published blog post by ID',
  inputSchema: {
    type: 'object',
    properties: {
      blogPostId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { blogPostId, ...body } = args as any;
  return asTextContentResult(await client.blogPosts.retrieve(blogPostId));
};

export default { metadata, tool, handler };
