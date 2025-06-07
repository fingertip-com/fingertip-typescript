// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.sites.invitations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/sites/{siteId}/invitations',
  operationId: 'createSiteInvitation',
};

export const tool: Tool = {
  name: 'create_sites_v1_invitations',
  description: 'Creates a new invitation for a user to join a site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to invite',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the invited user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return asTextContentResult(await client.v1.sites.invitations.create(siteId, body));
};

export default { metadata, tool, handler };
