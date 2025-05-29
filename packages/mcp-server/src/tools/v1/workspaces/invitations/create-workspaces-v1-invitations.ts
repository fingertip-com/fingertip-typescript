// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspaces.invitations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/workspaces/{workspaceId}/invitations',
  operationId: 'createWorkspaceInvitation',
};

export const tool: Tool = {
  name: 'create_workspaces_v1_invitations',
  description: 'Creates a new invitation for a user to join a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to invite',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the invited user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { workspaceId, ...body } = args as any;
  return client.v1.workspaces.invitations.create(workspaceId, body);
};

export default { metadata, tool, handler };
