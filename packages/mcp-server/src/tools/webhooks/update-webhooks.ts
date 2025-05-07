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
  name: 'update_webhooks',
  description: 'Updates an existing webhook subscription',
  inputSchema: {
    type: 'object',
    properties: {
      webhookId: {
        type: 'string',
      },
      endpointUrl: {
        type: 'string',
        description: 'URL that will receive webhook notifications',
      },
      triggers: {
        type: 'array',
        description: 'Triggers for this subscription',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                eventType: {
                  type: 'string',
                  enum: ['site_contact.created'],
                },
                inputData: {
                  type: 'object',
                },
              },
              required: ['eventType'],
            },
            {
              type: 'object',
              properties: {
                eventType: {
                  type: 'string',
                  enum: ['form_response.created'],
                },
                inputData: {
                  type: 'object',
                  properties: {
                    formTemplateSlug: {
                      type: 'string',
                      description: 'The slug of the form template',
                    },
                  },
                  required: ['formTemplateSlug'],
                },
              },
              required: ['eventType', 'inputData'],
            },
            {
              type: 'object',
              properties: {
                eventType: {
                  type: 'string',
                  enum: ['booking.created'],
                },
                inputData: {
                  type: 'object',
                },
              },
              required: ['eventType'],
            },
            {
              type: 'object',
              properties: {
                eventType: {
                  type: 'string',
                  enum: ['booking.cancelled'],
                },
                inputData: {
                  type: 'object',
                },
              },
              required: ['eventType'],
            },
            {
              type: 'object',
              properties: {
                eventType: {
                  type: 'string',
                  enum: ['booking.rescheduled'],
                },
                inputData: {
                  type: 'object',
                },
              },
              required: ['eventType'],
            },
            {
              type: 'object',
              properties: {
                eventType: {
                  type: 'string',
                  enum: ['order.created'],
                },
                inputData: {
                  type: 'object',
                },
              },
              required: ['eventType'],
            },
          ],
        },
      },
    },
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { webhookId, ...body } = args as any;
  return client.webhooks.update(webhookId, body);
};

export default { metadata, tool, handler };
