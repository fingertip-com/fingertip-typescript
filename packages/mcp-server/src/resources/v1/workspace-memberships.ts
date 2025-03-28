// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'retrieve_v1_workspace_memberships',
  description: 'Retrieves details of a specific workspace membership',
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
    return client.v1.workspaceMemberships.retrieve(membershipId);
  },
});

registerApiMethod({
  name: 'update_v1_workspace_memberships',
  description: 'Updates the role of an existing workspace membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'New role to assign to the user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { membershipId, ...body } = args;
    return client.v1.workspaceMemberships.update(membershipId, body);
  },
});

registerApiMethod({
  name: 'delete_v1_workspace_memberships',
  description: 'Removes a user from a workspace',
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
    return client.v1.workspaceMemberships.delete(membershipId);
  },
});
