// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.pages.theme',
  operation: 'read',
  tags: [],
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

export const handler = (client: Fingertip, args: any) => {
  const { pageId } = args;
  return client.v1.pages.theme.retrieve(pageId);
};

export default { metadata, tool, handler };
