// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.memberships.create(siteId, body);
  },
});

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.memberships.list(siteId, body);
  },
});
