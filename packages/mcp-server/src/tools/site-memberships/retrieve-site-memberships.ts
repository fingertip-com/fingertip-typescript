// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'site_memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/site-memberships/{membershipId}',
  operationId: 'getSiteMembership',
};

export const tool: Tool = {
  name: 'retrieve_site_memberships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves details of a specific site membership\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful site membership retrieval response',\n  properties: {\n    membership: {\n      type: 'object',\n      description: 'The requested site membership',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the site membership'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the membership was created',\n          format: 'date-time'\n        },\n        role: {\n          type: 'string',\n          description: 'Role of the user in the site',\n          enum: [            'OWNER',\n            'EDITOR',\n            'VIEWER'\n          ]\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the membership was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the user'\n            },\n            email: {\n              type: 'string',\n              description: 'Email of the user'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the user'\n            }\n          },\n          required: [            'id',\n            'email'\n          ]\n        },\n        userId: {\n          type: 'string',\n          description: 'ID of the user'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'role',\n        'siteId',\n        'updatedAt',\n        'user',\n        'userId'\n      ]\n    }\n  },\n  required: [    'membership'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['membershipId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { membershipId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.siteMemberships.retrieve(membershipId)),
  );
};

export default { metadata, tool, handler };
