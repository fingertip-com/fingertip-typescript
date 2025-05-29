// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/site-memberships/{membershipId}',
  operationId: 'deleteSiteMembership',
};

export const tool: Tool = {
  name: 'delete_v1_site_memberships',
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

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { membershipId, ...body } = args as any;
  return client.v1.siteMemberships.delete(membershipId);
};

export default { metadata, tool, handler };
