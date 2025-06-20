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
  httpPath: '/v1/pages/{pageId}/theme',
  operationId: 'upsertPageTheme',
};

export const tool: Tool = {
  name: 'update_pages_theme',
  description: 'Creates or updates the theme for a specific page',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
      componentPageThemeId: {
        type: 'string',
        description: 'ID of the parent component theme if this is an instance, can be null',
      },
      content: {
        type: 'object',
        description: 'Theme content configuration, can be null',
      },
      isComponent: {
        type: 'boolean',
        description: 'Whether this theme is a reusable component',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, ...body } = args as any;
  return asTextContentResult(await client.pages.theme.update(pageId, body));
};

export default { metadata, tool, handler };
