// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_sample_orders',
  description: 'Retrieves a sample of orders with basic information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Fingertip, args: any) => {
  const {} = args;
  return client.orders.retrieveSample();
};

export default { metadata, tool, handler };
