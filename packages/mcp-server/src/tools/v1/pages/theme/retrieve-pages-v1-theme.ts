// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

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

export const handler = (client: Fingertip, args: any) => {
  const { pageId } = args;
  return client.v1.pages.theme.retrieve(pageId);
};

export default { tool, handler };
