// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'workspaces.memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/workspace-memberships/{membershipId}',
  operationId: 'getWorkspaceMembership',
};

export const tool: Tool = {
  name: 'retrieve_workspaces_memberships',
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

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { membershipId, ...body } = args as any;
  return asTextContentResult(await client.workspaces.memberships.retrieve(membershipId));
};

export default { metadata, tool, handler };
