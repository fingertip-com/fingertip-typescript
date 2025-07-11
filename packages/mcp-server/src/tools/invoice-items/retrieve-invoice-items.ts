// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoice_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/invoice-items/{itemId}',
  operationId: 'getInvoiceItem',
};

export const tool: Tool = {
  name: 'retrieve_invoice_items',
  description: 'Retrieves a invoice item by ID',
  inputSchema: {
    type: 'object',
    properties: {
      itemId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { itemId, ...body } = args as any;
  return asTextContentResult(await client.invoiceItems.retrieve(itemId));
};

export default { metadata, tool, handler };
