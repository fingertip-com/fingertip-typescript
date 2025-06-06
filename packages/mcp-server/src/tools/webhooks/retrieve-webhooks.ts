// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/webhooks/{webhookId}',
  operationId: 'getWebhook',
};

export const tool: Tool = {
  name: 'retrieve_webhooks',
  description: 'Retrieves a specific webhook by ID with its related triggers',
  inputSchema: {
    type: 'object',
    properties: {
      webhookId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { webhookId, ...body } = args as any;
  return asTextContentResult(await client.webhooks.retrieve(webhookId));
};

export default { metadata, tool, handler };
