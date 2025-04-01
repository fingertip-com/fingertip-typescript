// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

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

export const handler = (client: Fingertip, args: any) => {
  const { pageId } = args;
  return client.v1.pages.retrieve(pageId);
};

export default { tool, handler };
