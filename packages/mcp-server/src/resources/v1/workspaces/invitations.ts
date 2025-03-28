// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'create_workspaces_v1_invitations',
  description: 'Creates a new invitation for a user to join a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to invite',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the invited user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.invitations.create(workspaceId, body);
  },
});

registerApiMethod({
  name: 'list_workspaces_v1_invitations',
  description: 'Retrieves a paginated list of invitations for a specific workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 25, max: 100)',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.invitations.list(workspaceId, body);
  },
});
