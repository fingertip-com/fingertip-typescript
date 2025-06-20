// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites.memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/sites/{siteId}/memberships',
  operationId: 'createSiteMembership',
};

export const tool: Tool = {
  name: 'create_sites_memberships',
  description: 'Adds a user to a site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
      userId: {
        type: 'string',
        description: 'ID of the user to add',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return asTextContentResult(await client.sites.memberships.create(siteId, body));
};

export default { metadata, tool, handler };
