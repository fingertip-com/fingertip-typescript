// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites.memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/site-memberships/{membershipId}',
  operationId: 'deleteSiteMembership',
};

export const tool: Tool = {
  name: 'delete_sites_memberships',
  description: 'Removes a user from a site',
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
  return asTextContentResult(await client.sites.memberships.delete(membershipId));
};

export default { metadata, tool, handler };
