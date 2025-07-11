// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/messages',
  operationId: 'getMessages',
};

export const tool: Tool = {
  name: 'list_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves messages for a site contact or all site owner messages\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Messages list with pagination',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'Schema for a simplified message entity',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the message'\n          },\n          content: {\n            type: 'string',\n            description: 'Plain text content of the message'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Timestamp when message was created'\n          },\n          sentAt: {\n            type: 'string',\n            description: 'Timestamp when message was sent, can be null'\n          },\n          siteContactId: {\n            type: 'string',\n            description: 'ID of the site contact recipient'\n          },\n          status: {\n            type: 'string',\n            description: 'Delivery status of the message',\n            enum: [              'QUEUED',\n              'SENDING',\n              'DELIVERED',\n              'OPENED',\n              'CLICKED',\n              'FAILED',\n              'REJECTED'\n            ]\n          }\n        },\n        required: [          'id',\n          'content',\n          'createdAt',\n          'sentAt',\n          'siteContactId',\n          'status'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information for cursor-based pagination',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteSlug: {
        type: 'string',
        description: 'Site slug to filter messages',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      siteContactId: {
        type: 'string',
        description: 'Site contact ID to filter messages for specific contact',
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
  const body = args as any;
  const response = await client.messages.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
