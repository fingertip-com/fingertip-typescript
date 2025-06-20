// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'site_memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/site-memberships/{membershipId}',
  operationId: 'getSiteMembership',
};

export const tool: Tool = {
  name: 'retrieve_site_memberships',
  description: 'Retrieves details of a specific site membership',
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
  return asTextContentResult(await client.siteMemberships.retrieve(membershipId));
};

export default { metadata, tool, handler };
