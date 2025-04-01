// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'create_workspaces_v1_memberships',
  description: 'Adds a user to a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to add',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { workspaceId, ...body } = args;
  return client.v1.workspaces.memberships.create(workspaceId, body);
};

export default { tool, handler };
