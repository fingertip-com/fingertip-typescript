// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoices',
  operationId: 'createStoreInvoice',
};

export const tool: Tool = {
  name: 'create_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new store invoice\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful invoice creation response',\n  properties: {\n    invoiceId: {\n      type: 'string',\n      description: 'Created invoice ID'\n    }\n  },\n  required: [    'invoiceId'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invoiceItems: {
        type: 'array',
        description: 'Invoice items',
        items: {
          type: 'object',
          description: 'Schema for a store invoice item',
          properties: {
            description: {
              type: 'string',
              description: 'Description of the item',
            },
            quantity: {
              type: 'number',
              description: 'Quantity',
            },
            taxRate: {
              type: 'number',
              description: 'Tax rate',
            },
            unitPriceInCents: {
              type: 'number',
              description: 'Unit price in cents',
            },
            id: {
              type: 'string',
            },
            itemId: {
              type: 'string',
              description: 'Store item ID (optional for custom items)',
            },
            lineNumber: {
              type: 'number',
              description: 'Line number',
            },
          },
          required: ['description', 'quantity', 'taxRate', 'unitPriceInCents'],
        },
      },
      siteContactId: {
        type: 'string',
        description: 'Site contact ID',
      },
      siteId: {
        type: 'string',
        description: 'Site ID',
      },
      status: {
        type: 'string',
        description: 'Invoice status',
        enum: ['DRAFT', 'PENDING', 'PAID', 'VOID', 'OVERDUE', 'REFUNDED'],
      },
      businessName: {
        type: 'string',
        description: 'Business name',
      },
      dueAt: {
        type: 'string',
        description: 'Due date (ISO string)',
      },
      footer: {
        type: 'string',
        description: 'Footer text',
      },
      invoiceDiscounts: {
        type: 'array',
        description: 'Invoice discounts',
        items: {
          type: 'object',
          description: 'Schema for a store invoice discount',
          properties: {
            valueType: {
              type: 'string',
              description: 'Discount value type',
              enum: ['FIXED', 'PERCENT'],
            },
            discountId: {
              type: 'string',
            },
            lineNumber: {
              type: 'number',
              description: 'Line number',
            },
            valueFixedInCents: {
              type: 'number',
              description: 'Fixed discount in cents',
            },
            valuePercent: {
              type: 'number',
              description: 'Percentage discount',
            },
          },
          required: ['valueType'],
        },
      },
      memo: {
        type: 'string',
        description: 'Memo',
      },
      passThroughPaymentFee: {
        type: 'boolean',
        description: 'Pass through payment fee',
      },
      paymentReference: {
        type: 'string',
        description: 'Payment reference',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['invoiceItems', 'siteContactId', 'siteId', 'status'],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.invoices.create(body)));
};

export default { metadata, tool, handler };
