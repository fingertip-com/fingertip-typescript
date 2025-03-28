// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { invitationId } = args;
    return client.v1.siteInvitations.retrieve(invitationId);
  },
});

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { invitationId } = args;
    return client.v1.siteInvitations.delete(invitationId);
  },
});
