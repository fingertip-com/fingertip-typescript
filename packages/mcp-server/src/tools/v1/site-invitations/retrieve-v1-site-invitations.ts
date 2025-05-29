// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_invitations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/site-invitations/{invitationId}',
  operationId: 'getSiteInvitation',
};

export const tool: Tool = {
  name: 'retrieve_v1_site_invitations',
  description: 'Retrieves details of a specific site invitation',
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invitationId, ...body } = args as any;
  return client.v1.siteInvitations.retrieve(invitationId);
};

export default { metadata, tool, handler };
