// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/quotes/{quoteId}/send',
  operationId: 'sendStoreQuote',
};

export const tool: Tool = {
  name: 'send_quotes',
  description: 'Sends a draft store quote',
  inputSchema: {
    type: 'object',
    properties: {
      quoteId: {
        type: 'string',
      },
      siteSlug: {
        type: 'string',
        description: 'Site slug',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { quoteId, ...body } = args as any;
  return asTextContentResult(await client.quotes.send(quoteId, body));
};

export default { metadata, tool, handler };
