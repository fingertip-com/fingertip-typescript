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
  httpPath: '/v1/site-invitations/{invitationId}',
  operationId: 'getSiteInvitation',
};

export const tool: Tool = {
  name: 'retrieve_site_invitations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves details of a specific site invitation\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful site invitation retrieval response',\n  properties: {\n    invitation: {\n      type: 'object',\n      description: 'The requested site invitation',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the site invitation'\n        },\n        accepted: {\n          type: 'boolean',\n          description: 'Whether the invitation has been accepted'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the invitation was created',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the invited user'\n        },\n        expiresAt: {\n          type: 'string',\n          description: 'Date and time when the invitation expires',\n          format: 'date-time'\n        },\n        role: {\n          type: 'string',\n          description: 'Role assigned to the invited user',\n          enum: [            'OWNER',\n            'EDITOR',\n            'VIEWER'\n          ]\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site the user is invited to'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the invitation was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'accepted',\n        'createdAt',\n        'email',\n        'expiresAt',\n        'role',\n        'siteId',\n        'updatedAt'\n      ]\n    },\n    siteId: {\n      type: 'string',\n      description: 'ID of the site the invitation is for'\n    },\n    siteName: {\n      type: 'string',\n      description: 'Name of the site the invitation is for'\n    }\n  },\n  required: [    'invitation',\n    'siteId',\n    'siteName'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['invitationId'],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invitationId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.siteInvitations.retrieve(invitationId)));
};

export default { metadata, tool, handler };
