// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.blocks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v1_blocks',
  description: 'Retrieves a specific block by its ID. Returns 404 if the block is not found.',
  inputSchema: {
    type: 'object',
    properties: {
      blockId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { blockId } = args;
  return client.v1.blocks.retrieve(blockId);
};

export default { metadata, tool, handler };
