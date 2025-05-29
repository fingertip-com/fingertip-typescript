// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.pages.blocks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/pages/{pageId}/blocks',
  operationId: 'createBlock',
};

export const tool: Tool = {
  name: 'create_pages_v1_blocks',
  description:
    'Creates a new block within the specified page. Returns the created block or validation errors.',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
      componentBlockId: {
        type: 'string',
        description: 'ID of the component block if this is an instance, can be null',
      },
      kind: {
        type: 'string',
        description: 'Type or category of the block, can be null',
      },
      name: {
        type: 'string',
        description: 'Name of the block',
      },
      content: {
        type: 'object',
        description: 'Content of the block, can be null',
      },
      isComponent: {
        type: 'boolean',
        description: 'Whether this block is a component',
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, ...body } = args as any;
  return client.v1.pages.blocks.create(pageId, body);
};

export default { metadata, tool, handler };
