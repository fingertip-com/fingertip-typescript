// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

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

export const handler = (client: Fingertip, args: any) => {
  const { invitationId } = args;
  return client.v1.siteInvitations.retrieve(invitationId);
};

export default { tool, handler };
