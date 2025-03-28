// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'retrieve_v1_site_memberships',
  description: 'Retrieves details of a specific site membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { membershipId } = args;
    return client.v1.siteMemberships.retrieve(membershipId);
  },
});

registerApiMethod({
  name: 'update_v1_site_memberships',
  description: 'Updates the role of an existing site membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'New role to assign to the user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { membershipId, ...body } = args;
    return client.v1.siteMemberships.update(membershipId, body);
  },
});

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { membershipId } = args;
    return client.v1.siteMemberships.delete(membershipId);
  },
});
