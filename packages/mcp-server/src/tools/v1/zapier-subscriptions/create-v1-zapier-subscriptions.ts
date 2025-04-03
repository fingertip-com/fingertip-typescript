// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.zapier_subscriptions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v1_zapier_subscriptions',
  description: 'Creates a new webhook subscription for receiving Zapier notifications',
  inputSchema: {
    type: 'object',
    properties: {
      targetUrl: {
        type: 'string',
        description: 'URL that will receive webhook notifications',
      },
      triggerKey: {
        type: 'string',
        description: 'Key that identifies the type of trigger for this subscription',
      },
      formTemplateSlug: {
        type: 'string',
        description: 'Slug of the form template to subscribe to, can be null or undefined',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { ...body } = args;
  return client.v1.zapierSubscriptions.create(body);
};

export default { metadata, tool, handler };
