// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'delete_v1_blocks',
  description: 'Permanently deletes a block. Returns a success status or 404 if the block is not found.',
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
  return client.v1.blocks.delete(blockId);
};

export default { tool, handler };
