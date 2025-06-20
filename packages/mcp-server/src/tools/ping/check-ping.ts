// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'ping',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ping',
  operationId: 'getPing',
};

export const tool: Tool = {
  name: 'check_ping',
  description: 'Simple health check endpoint to verify the API is running. Requires authentication.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.ping.check());
};

export default { metadata, tool, handler };
