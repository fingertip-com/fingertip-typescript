// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'update_v1_blocks',
  description:
    'Updates an existing block with the provided data. Allows partial updates. Returns 404 if the block is not found.',
  inputSchema: {
    type: 'object',
    properties: {
      blockId: {
        type: 'string',
      },
      componentBlockId: {
        type: 'string',
        description: 'ID of the component block if this is an instance, can be null',
      },
      content: {
        type: 'object',
        description: 'Content of the block, can be null',
      },
      isComponent: {
        type: 'boolean',
        description: 'Whether this block is a component',
      },
      kind: {
        type: 'string',
        description: 'Type or category of the block, can be null',
      },
      name: {
        type: 'string',
        description: 'Name of the block',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { blockId, ...body } = args;
  return client.v1.blocks.update(blockId, body);
};

export default { tool, handler };
