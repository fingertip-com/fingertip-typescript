// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'delete_v1_sites',
  description: 'Permanently deletes a site by its ID',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { siteId } = args;
  return client.v1.sites.delete(siteId);
};

export default { tool, handler };
