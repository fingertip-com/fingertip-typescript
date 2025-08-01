// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'site_invitations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites/{siteId}/invitations',
  operationId: 'getSiteInvitations',
};

export const tool: Tool = {
  name: 'list_site_invitations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of invitations for a specific site\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful site invitations listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of invitations in the current page of results',\n      items: {\n        type: 'object',\n        description: 'Schema for a site invitation entity',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the site invitation'\n          },\n          accepted: {\n            type: 'boolean',\n            description: 'Whether the invitation has been accepted'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the invitation was created',\n            format: 'date-time'\n          },\n          email: {\n            type: 'string',\n            description: 'Email address of the invited user'\n          },\n          expiresAt: {\n            type: 'string',\n            description: 'Date and time when the invitation expires',\n            format: 'date-time'\n          },\n          role: {\n            type: 'string',\n            description: 'Role assigned to the invited user',\n            enum: [              'OWNER',\n              'EDITOR',\n              'VIEWER'\n            ]\n          },\n          siteId: {\n            type: 'string',\n            description: 'ID of the site the user is invited to'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the invitation was last updated',\n            format: 'date-time'\n          }\n        },\n        required: [          'id',\n          'accepted',\n          'createdAt',\n          'email',\n          'expiresAt',\n          'role',\n          'siteId',\n          'updatedAt'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of invitations matching the query'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['siteId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, jq_filter, ...body } = args as any;
  const response = await client.siteInvitations.list(siteId, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
