// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'event_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/event-types/{eventTypeId}',
  operationId: 'getEventType',
};

export const tool: Tool = {
  name: 'retrieve_event_types',
  description: 'Retrieves a specific published event type by ID',
  inputSchema: {
    type: 'object',
    properties: {
      eventTypeId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { eventTypeId, ...body } = args as any;
  return asTextContentResult(await client.eventTypes.retrieve(eventTypeId));
};

export default { metadata, tool, handler };
