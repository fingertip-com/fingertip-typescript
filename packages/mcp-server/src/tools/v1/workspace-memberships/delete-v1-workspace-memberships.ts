// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspace_memberships',
  operation: 'write',
  tags: [],
};

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

export default { metadata, tool, handler };
