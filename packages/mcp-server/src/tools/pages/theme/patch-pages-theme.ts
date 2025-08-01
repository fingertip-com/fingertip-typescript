// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'pages.theme',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/pages/{pageId}/theme/patch',
  operationId: 'patchPageTheme',
};

export const tool: Tool = {
  name: 'patch_pages_theme',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nApplies JSON Patch operations to the theme content field\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful patch application response',\n  properties: {\n    pageTheme: {\n      type: 'object',\n      description: 'The updated page theme after applying patches',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the page theme'\n        },\n        componentPageThemeId: {\n          type: 'string',\n          description: 'ID of the parent component theme if this is an instance, can be null'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the theme was created',\n          format: 'date-time'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the theme was last updated',\n          format: 'date-time'\n        },\n        content: {\n          type: 'object',\n          description: 'Theme content configuration, can be null'\n        },\n        isComponent: {\n          type: 'boolean',\n          description: 'Whether this theme is a reusable component'\n        }\n      },\n      required: [        'id',\n        'componentPageThemeId',\n        'createdAt',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'pageTheme'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
      body: {
        type: 'array',
        description: 'Array of JSON Patch operations to apply',
        items: {
          type: 'object',
          description: 'JSON Patch operation following RFC 6902',
          properties: {
            op: {
              type: 'string',
              description: 'The operation to perform',
              enum: ['add', 'remove', 'replace', 'move', 'copy', 'test'],
            },
            path: {
              type: 'string',
              description: 'JSON pointer to the target location',
            },
            from: {
              type: 'string',
              description: 'Source path for move and copy operations',
            },
            value: {
              type: 'object',
              description: 'Value for add, replace, and test operations',
            },
          },
          required: ['op', 'path'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['pageId'],
  },
  annotations: {},
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { pageId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.pages.theme.patch(pageId, body)));
};

export default { metadata, tool, handler };
