// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.sites.invitations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites/{siteId}/invitations',
  operationId: 'getSiteInvitations',
};

export const tool: Tool = {
  name: 'list_sites_v1_invitations',
  description: 'Retrieves a paginated list of invitations for a specific site',
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

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return client.v1.sites.invitations.list(siteId, body);
};

export default { metadata, tool, handler };
