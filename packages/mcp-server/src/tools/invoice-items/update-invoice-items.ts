// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoice_items',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/invoice-items/{itemId}',
  operationId: 'updateInvoiceItem',
};

export const tool: Tool = {
  name: 'update_invoice_items',
  description: 'Updates a invoice item',
  inputSchema: {
    type: 'object',
    properties: {
      itemId: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Item description',
      },
      priceInCents: {
        type: 'number',
        description: 'Price in cents',
      },
      title: {
        type: 'string',
        description: 'Item title',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { itemId, ...body } = args as any;
  return asTextContentResult(await client.invoiceItems.update(itemId, body));
};

export default { metadata, tool, handler };
