// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.blocks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/blocks/{blockId}',
  operationId: 'deleteBlock',
};

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

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { blockId, ...body } = args as any;
  return asTextContentResult(await client.v1.blocks.delete(blockId));
};

export default { metadata, tool, handler };
