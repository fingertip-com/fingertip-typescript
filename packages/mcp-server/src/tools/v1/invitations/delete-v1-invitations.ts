// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.invitations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/invitations/{invitationId}',
  operationId: 'deleteWorkspaceInvitation',
};

export const tool: Tool = {
  name: 'delete_v1_invitations',
  description: 'Deletes an existing workspace invitation',
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invitationId, ...body } = args as any;
  return asTextContentResult(await client.v1.invitations.delete(invitationId));
};

export default { metadata, tool, handler };
