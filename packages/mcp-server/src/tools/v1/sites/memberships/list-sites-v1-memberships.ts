// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.sites.memberships',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_sites_v1_memberships',
  description: 'Retrieves a paginated list of members for a specific site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
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
  const { siteId, ...body } = args;
  return client.v1.sites.memberships.list(siteId, body);
};

export default { metadata, tool, handler };
