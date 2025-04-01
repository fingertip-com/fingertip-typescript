// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'create_sites_v1_memberships',
  description: 'Adds a user to a site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
      userId: {
        type: 'string',
        description: 'ID of the user to add',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { siteId, ...body } = args;
  return client.v1.sites.memberships.create(siteId, body);
};

export default { tool, handler };
