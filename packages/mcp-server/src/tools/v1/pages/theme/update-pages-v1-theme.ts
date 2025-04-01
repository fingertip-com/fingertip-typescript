// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'update_pages_v1_theme',
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

export const handler = (client: Fingertip, args: any) => {
  const { pageId, ...body } = args;
  return client.v1.pages.theme.update(pageId, body);
};

export default { tool, handler };
