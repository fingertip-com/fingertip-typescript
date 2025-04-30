// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_sample_bookings_v1',
  description: 'Retrieves a sample of bookings with basic information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  return client.v1.retrieveSampleBookings();
};

export default { metadata, tool, handler };
