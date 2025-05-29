// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_invitations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/site-invitations/{invitationId}',
  operationId: 'deleteSiteInvitation',
};

export const tool: Tool = {
  name: 'delete_v1_site_invitations',
  description: 'Deletes an existing site invitation',
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
  return client.v1.siteInvitations.delete(invitationId);
};

export default { metadata, tool, handler };
