// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspaces.orders',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'sample_workspaces_v1_orders',
  description: 'Retrieves a sample of orders with basic information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Fingertip, args: any) => {
  const {} = args;
  return client.v1.workspaces.orders.sample();
};

export default { metadata, tool, handler };
