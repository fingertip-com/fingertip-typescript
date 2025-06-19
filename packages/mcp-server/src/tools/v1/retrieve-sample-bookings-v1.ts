// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bookings/sample',
  operationId: 'getBookingsSample',
};

export const tool: Tool = {
  name: 'retrieve_sample_bookings_v1',
  description: 'Retrieves a sample of bookings with basic information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.v1.retrieveSampleBookings()) as object);
};

export default { metadata, tool, handler };
