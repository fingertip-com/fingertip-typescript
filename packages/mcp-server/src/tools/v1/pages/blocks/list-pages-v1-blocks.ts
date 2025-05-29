// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.pages.blocks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/pages/{pageId}/blocks',
  operationId: 'getBlocks',
};

export const tool: Tool = {
  name: 'list_pages_v1_blocks',
  description: 'Retrieves all blocks associated with the specified page ID',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, ...body } = args as any;
  return client.v1.pages.blocks.list(pageId);
};

export default { metadata, tool, handler };
