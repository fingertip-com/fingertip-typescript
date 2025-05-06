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
  name: 'create_webhooks',
  description: 'Creates a new webhook subscription for receiving Webhook notifications',
  inputSchema: {
    type: 'object',
    properties: {
      endpointUrl: {
        type: 'string',
        description: 'URL that will receive webhook notifications',
      },
      triggers: {
        type: 'array',
        description: 'Triggers for this subscription',
        items: {
          type: 'object',
          properties: {
            eventType: {
              type: 'string',
              description: 'Type of trigger',
            },
            inputData: {
              type: 'object',
              description: 'Data for the trigger',
            },
          },
          required: ['eventType'],
        },
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.webhooks.create(body);
};

export default { metadata, tool, handler };
