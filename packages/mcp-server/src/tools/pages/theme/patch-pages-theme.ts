// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'pages.theme',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/pages/{pageId}/theme/patch',
  operationId: 'patchPageTheme',
};

export const tool: Tool = {
  name: 'patch_pages_theme',
  description: 'Applies JSON Patch operations to the theme content field',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
      body: {
        type: 'array',
        description: 'Array of JSON Patch operations to apply',
        items: {
          type: 'object',
          description: 'JSON Patch operation following RFC 6902',
          properties: {
            op: {
              type: 'string',
              description: 'The operation to perform',
              enum: ['add', 'remove', 'replace', 'move', 'copy', 'test'],
            },
            path: {
              type: 'string',
              description: 'JSON pointer to the target location',
            },
            from: {
              type: 'string',
              description: 'Source path for move and copy operations',
            },
            value: {
              type: 'object',
              description: 'Value for add, replace, and test operations',
            },
          },
          required: ['op', 'path'],
        },
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, ...body } = args as any;
  return asTextContentResult(await client.pages.theme.patch(pageId, body));
};

export default { metadata, tool, handler };
