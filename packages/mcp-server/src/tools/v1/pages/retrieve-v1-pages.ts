// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.pages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/pages/{pageId}',
  operationId: 'getPage',
};

export const tool: Tool = {
  name: 'retrieve_v1_pages',
  description: 'Retrieves a specific page by ID including all related blocks and theme information.',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, ...body } = args as any;
  return asTextContentResult(await client.v1.pages.retrieve(pageId));
};

export default { metadata, tool, handler };
