// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'blocks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/blocks/{blockId}',
  operationId: 'getBlock',
};

export const tool: Tool = {
  name: 'retrieve_blocks',
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

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { blockId, ...body } = args as any;
  return asTextContentResult(await client.blocks.retrieve(blockId));
};

export default { metadata, tool, handler };
