// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/invoices',
  operationId: 'getInvoices',
};

export const tool: Tool = {
  name: 'list_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of invoices for sites the user has access to\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful invoices listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of invoices in the current page',\n      items: {\n        type: 'object',\n        description: 'Schema for an invoice',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the invoice'\n          },\n          amountPaidInCents: {\n            type: 'number',\n            description: 'Amount paid in cents'\n          },\n          amountRemainingInCents: {\n            type: 'number',\n            description: 'Amount remaining in cents'\n          },\n          completedAt: {\n            type: 'string',\n            description: 'Date and time when the invoice was completed',\n            format: 'date-time'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the invoice was created',\n            format: 'date-time'\n          },\n          currency: {\n            type: 'string',\n            description: 'Currency code for the invoice'\n          },\n          dueAt: {\n            type: 'string',\n            description: 'Due date for the invoice',\n            format: 'date-time'\n          },\n          footer: {\n            type: 'string',\n            description: 'Optional footer for the invoice'\n          },\n          invoiceNumber: {\n            type: 'number',\n            description: 'Sequential invoice number'\n          },\n          memo: {\n            type: 'string',\n            description: 'Optional memo for the invoice'\n          },\n          siteId: {\n            type: 'string',\n            description: 'ID of the site this invoice belongs to'\n          },\n          status: {\n            type: 'string',\n            description: 'Current status of the invoice',\n            enum: [              'DRAFT',\n              'PENDING',\n              'PAID',\n              'VOID',\n              'OVERDUE',\n              'REFUNDED'\n            ]\n          },\n          totalInCents: {\n            type: 'number',\n            description: 'Total amount in cents'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the invoice was last updated',\n            format: 'date-time'\n          }\n        },\n        required: [          'id',\n          'amountPaidInCents',\n          'amountRemainingInCents',\n          'completedAt',\n          'createdAt',\n          'currency',\n          'dueAt',\n          'footer',\n          'invoiceNumber',\n          'memo',\n          'siteId',\n          'status',\n          'totalInCents',\n          'updatedAt'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of invoices'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'ID of the site to retrieve invoices for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt', 'dueAt', 'invoiceNumber'],
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction (default: desc)',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        description: 'Filter by invoice status',
        enum: ['DRAFT', 'PENDING', 'PAID', 'VOID', 'OVERDUE', 'REFUNDED'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['siteId'],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.invoices.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
