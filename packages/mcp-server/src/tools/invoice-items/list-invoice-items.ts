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
  httpPath: '/v1/invoice-items',
  operationId: 'getInvoiceItems',
};

export const tool: Tool = {
  name: 'list_invoice_items',
  description: 'Retrieves a paginated list of invoice items',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'Site ID',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.invoiceItems.list(body));
};

export default { metadata, tool, handler };
