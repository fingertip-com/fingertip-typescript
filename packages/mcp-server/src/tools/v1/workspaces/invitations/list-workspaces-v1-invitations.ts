// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
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
};

export const handler = (client: Fingertip, args: any) => {
  const { workspaceId, ...body } = args;
  return client.v1.workspaces.invitations.list(workspaceId, body);
};

export default { tool, handler };
