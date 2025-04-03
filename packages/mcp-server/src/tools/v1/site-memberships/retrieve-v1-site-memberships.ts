// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_memberships',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: Fingertip, args: any) => {
  const { membershipId } = args;
  return client.v1.siteMemberships.retrieve(membershipId);
};

export default { metadata, tool, handler };
