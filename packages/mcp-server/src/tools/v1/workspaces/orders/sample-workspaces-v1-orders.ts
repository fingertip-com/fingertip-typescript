// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspaces.orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/orders/sample',
  operationId: 'getOrdersSample',
};

export const tool: Tool = {
  name: 'sample_workspaces_v1_orders',
  description: 'Retrieves a sample of orders with basic information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.v1.workspaces.orders.sample()) as object);
};

export default { metadata, tool, handler };
