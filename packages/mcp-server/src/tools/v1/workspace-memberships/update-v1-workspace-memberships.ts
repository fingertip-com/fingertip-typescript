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
  name: 'update_v1_workspace_memberships',
  description: 'Updates the role of an existing workspace membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'New role to assign to the user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { membershipId, ...body } = args as any;
  return client.v1.workspaceMemberships.update(membershipId, body);
};

export default { metadata, tool, handler };
