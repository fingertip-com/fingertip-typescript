// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoice_items',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoice-items',
  operationId: 'createInvoiceItem',
};

export const tool: Tool = {
  name: 'create_invoice_items',
  description: 'Creates a new invoice item',
  inputSchema: {
    type: 'object',
    properties: {
      priceInCents: {
        type: 'number',
        description: 'Price in cents',
      },
      siteId: {
        type: 'string',
        description: 'Site ID',
      },
      title: {
        type: 'string',
        description: 'Item title',
      },
      description: {
        type: 'string',
        description: 'Item description',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.invoiceItems.create(body));
};

export default { metadata, tool, handler };
