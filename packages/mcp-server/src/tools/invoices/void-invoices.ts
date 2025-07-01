// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoices/{invoiceId}/void',
  operationId: 'voidStoreInvoice',
};

export const tool: Tool = {
  name: 'void_invoices',
  description: 'Voids a store invoice',
  inputSchema: {
    type: 'object',
    properties: {
      invoiceId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invoiceId, ...body } = args as any;
  return asTextContentResult(await client.invoices.void(invoiceId, body));
};

export default { metadata, tool, handler };
