// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'workspace_memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/workspace-memberships/{membershipId}',
  operationId: 'updateWorkspaceMembership',
};

export const tool: Tool = {
  name: 'update_workspace_memberships',
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

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { membershipId, ...body } = args as any;
  return asTextContentResult(await client.workspaceMemberships.update(membershipId, body));
};

export default { metadata, tool, handler };
