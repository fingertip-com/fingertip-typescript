// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { blockId } = args;
    return client.v1.blocks.retrieve(blockId);
  },
});

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { blockId, ...body } = args;
    return client.v1.blocks.update(blockId, body);
  },
});

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { blockId } = args;
    return client.v1.blocks.delete(blockId);
  },
});
