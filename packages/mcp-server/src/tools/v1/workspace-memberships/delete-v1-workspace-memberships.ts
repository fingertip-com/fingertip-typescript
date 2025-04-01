// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'delete_v1_workspace_memberships',
  description: 'Removes a user from a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { membershipId } = args;
  return client.v1.workspaceMemberships.delete(membershipId);
};

export default { tool, handler };
