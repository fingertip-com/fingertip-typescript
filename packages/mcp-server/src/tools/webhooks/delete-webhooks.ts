// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_webhooks',
  description: 'Removes an existing webhook subscription',
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

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.webhooks.delete(body);
};

export default { metadata, tool, handler };
