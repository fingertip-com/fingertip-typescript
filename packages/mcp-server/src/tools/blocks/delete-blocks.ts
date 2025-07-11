// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'blocks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/blocks/{blockId}',
  operationId: 'deleteBlock',
};

export const tool: Tool = {
  name: 'delete_blocks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPermanently deletes a block. Returns a success status or 404 if the block is not found.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful block deletion response',\n  properties: {\n    success: {\n      type: 'boolean',\n      description: 'Whether the deletion was successful'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      blockId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { blockId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.blocks.delete(blockId)));
};

export default { metadata, tool, handler };
