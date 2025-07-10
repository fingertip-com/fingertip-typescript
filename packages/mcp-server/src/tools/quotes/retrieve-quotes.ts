// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/quotes/{quoteId}',
  operationId: 'getStoreQuote',
};

export const tool: Tool = {
  name: 'retrieve_quotes',
  description: 'Retrieves a single store quote by ID',
  inputSchema: {
    type: 'object',
    properties: {
      quoteId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { quoteId, ...body } = args as any;
  return asTextContentResult(await client.quotes.retrieve(quoteId));
};

export default { metadata, tool, handler };
