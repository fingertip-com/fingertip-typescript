// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'retrieve_v1_invitations',
  description: 'Retrieves details of a specific workspace invitation',
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
    return client.v1.invitations.retrieve(invitationId);
  },
});

registerApiMethod({
  name: 'delete_v1_invitations',
  description: 'Deletes an existing workspace invitation',
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
    return client.v1.invitations.delete(invitationId);
  },
});
