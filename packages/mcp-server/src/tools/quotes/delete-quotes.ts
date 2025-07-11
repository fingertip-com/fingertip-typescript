// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/quotes/{quoteId}',
  operationId: 'deleteStoreQuote',
};

export const tool: Tool = {
  name: 'delete_quotes',
  description: 'Deletes a store quote',
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
  return asTextContentResult(await client.quotes.delete(quoteId));
};

export default { metadata, tool, handler };
