// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ping',
  operationId: 'getPing',
};

export const tool: Tool = {
  name: 'ping_v1',
  description: 'Simple health check endpoint to verify the API is running. Requires authentication.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  return client.v1.ping();
};

export default { metadata, tool, handler };
