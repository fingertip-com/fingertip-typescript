// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.pages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_v1_pages',
  description: 'Permanently deletes a page and all associated data.',
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
  return client.v1.pages.delete(pageId);
};

export default { metadata, tool, handler };
