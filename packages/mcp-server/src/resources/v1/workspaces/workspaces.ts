// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'retrieve_v1_workspaces',
  description: 'Retrieves a specific workspace and its related data by workspace ID',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { workspaceId } = args;
    return client.v1.workspaces.retrieve(workspaceId);
  },
});

registerApiMethod({
  name: 'update_v1_workspaces',
  description: 'Updates an existing workspace with provided partial data',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the workspace',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.update(workspaceId, body);
  },
});

registerApiMethod({
  name: 'list_v1_workspaces',
  description: 'Retrieves a paginated list of workspaces with optional filtering',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 25, max: 100)',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt'],
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction (default: desc)',
        enum: ['asc', 'desc'],
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.workspaces.list(body);
  },
});
