// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.invitations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/invitations/{invitationId}',
  operationId: 'getWorkspaceInvitation',
};

export const tool: Tool = {
  name: 'retrieve_v1_invitations',
  description: 'Retrieves details of a specific workspace invitation',
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
  return asTextContentResult(await client.v1.invitations.retrieve(invitationId));
};

export default { metadata, tool, handler };
