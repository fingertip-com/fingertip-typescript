// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_memberships',
  operation: 'write',
  tags: [],
};

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

export default { metadata, tool, handler };
