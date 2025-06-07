// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.pages.theme',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/pages/{pageId}/theme',
  operationId: 'getPageTheme',
};

export const tool: Tool = {
  name: 'retrieve_pages_v1_theme',
  description: 'Retrieves the theme associated with a specific page',
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
  return asTextContentResult(await client.v1.pages.theme.retrieve(pageId));
};

export default { metadata, tool, handler };
