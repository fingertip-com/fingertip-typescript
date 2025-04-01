// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
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
};

export const handler = (client: Fingertip, args: any) => {
  const { membershipId, ...body } = args;
  return client.v1.siteMemberships.update(membershipId, body);
};

export default { tool, handler };
