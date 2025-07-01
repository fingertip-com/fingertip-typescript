// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/invoices/{invoiceId}',
  operationId: 'deleteDraftStoreInvoice',
};

export const tool: Tool = {
  name: 'delete_invoices',
  description: 'Deletes a draft store invoice',
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
  return asTextContentResult(await client.invoices.delete(invoiceId));
};

export default { metadata, tool, handler };
