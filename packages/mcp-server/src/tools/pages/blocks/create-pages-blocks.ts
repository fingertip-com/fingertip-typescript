// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'pages.blocks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/pages/{pageId}/blocks',
  operationId: 'createBlock',
};

export const tool: Tool = {
  name: 'create_pages_blocks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new block within the specified page. Returns the created block or validation errors.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful block creation response',\n  properties: {\n    block: {\n      type: 'object',\n      description: 'The newly created block',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the block'\n        },\n        componentBlockId: {\n          type: 'string',\n          description: 'ID of the component block if this is an instance, can be null'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the block was created',\n          format: 'date-time'\n        },\n        kind: {\n          type: 'string',\n          description: 'Type or category of the block, can be null'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the block'\n        },\n        pageId: {\n          type: 'string',\n          description: 'ID of the page this block belongs to'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the block was last updated',\n          format: 'date-time'\n        },\n        content: {\n          type: 'object',\n          description: 'Content of the block, can be null'\n        },\n        isComponent: {\n          type: 'boolean',\n          description: 'Whether this block is a component'\n        }\n      },\n      required: [        'id',\n        'componentBlockId',\n        'createdAt',\n        'kind',\n        'name',\n        'pageId',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'block'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['pageId', 'componentBlockId', 'kind', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.pages.blocks.create(pageId, body)));
};

export default { metadata, tool, handler };
