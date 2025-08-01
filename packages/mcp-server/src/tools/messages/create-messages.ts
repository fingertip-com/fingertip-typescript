// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/messages',
  operationId: 'createMessage',
};

export const tool: Tool = {
  name: 'create_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSends a message as the site owner to a site contact\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful message creation response',\n  properties: {\n    message: {\n      type: 'object',\n      description: 'The created message',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the message'\n        },\n        content: {\n          type: 'string',\n          description: 'Plain text content of the message'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Timestamp when message was created'\n        },\n        sentAt: {\n          type: 'string',\n          description: 'Timestamp when message was sent, can be null'\n        },\n        siteContactId: {\n          type: 'string',\n          description: 'ID of the site contact recipient'\n        },\n        status: {\n          type: 'string',\n          description: 'Delivery status of the message',\n          enum: [            'QUEUED',\n            'SENDING',\n            'DELIVERED',\n            'OPENED',\n            'CLICKED',\n            'FAILED',\n            'REJECTED'\n          ]\n        }\n      },\n      required: [        'id',\n        'content',\n        'createdAt',\n        'sentAt',\n        'siteContactId',\n        'status'\n      ]\n    }\n  },\n  required: [    'message'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      content: {
        type: 'string',
        description: 'Plain text content of the message',
      },
      siteContactId: {
        type: 'string',
        description: 'ID of the site contact recipient',
      },
      siteSlug: {
        type: 'string',
        description: 'Slug of the site',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['content', 'siteContactId', 'siteSlug'],
  },
  annotations: {},
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.messages.create(body)));
};

export default { metadata, tool, handler };
