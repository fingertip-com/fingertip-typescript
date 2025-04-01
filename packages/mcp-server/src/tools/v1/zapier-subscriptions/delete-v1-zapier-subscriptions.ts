// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
  name: 'delete_v1_zapier_subscriptions',
  description: 'Removes an existing Zapier webhook subscription',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionId: {
        type: 'string',
        description: 'ID of the subscription to delete',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { ...body } = args;
  return client.v1.zapierSubscriptions.delete(body);
};

export default { tool, handler };
