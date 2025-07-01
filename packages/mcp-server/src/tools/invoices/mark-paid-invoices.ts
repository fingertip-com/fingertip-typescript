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
  httpPath: '/v1/invoices/{invoiceId}/mark-paid',
  operationId: 'markStoreInvoicePaid',
};

export const tool: Tool = {
  name: 'mark_paid_invoices',
  description: 'Marks a store invoice as paid',
  inputSchema: {
    type: 'object',
    properties: {
      invoiceId: {
        type: 'string',
      },
      completedAt: {
        type: 'string',
        description: 'Completion date (ISO string)',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invoiceId, ...body } = args as any;
  return asTextContentResult(await client.invoices.markPaid(invoiceId, body));
};

export default { metadata, tool, handler };
