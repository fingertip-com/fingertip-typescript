// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspace_memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workspace-memberships/{membershipId}',
  operationId: 'getWorkspaceMembership',
};

export const tool: Tool = {
  name: 'retrieve_v1_workspace_memberships',
  description: 'Retrieves details of a specific workspace membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { membershipId, ...body } = args as any;
  return client.v1.workspaceMemberships.retrieve(membershipId);
};

export default { metadata, tool, handler };
