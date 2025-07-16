// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/invoices/{invoiceId}',
  operationId: 'updateStoreInvoice',
};

export const tool: Tool = {
  name: 'update_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a store invoice\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful update response',\n  properties: {\n    success: {\n      type: 'boolean',\n      description: 'Success status'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invoiceId: {
        type: 'string',
      },
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
      dueAt: {
        type: 'string',
        description: 'Due date (ISO string)',
      },
      footer: {
        type: 'string',
        description: 'Footer',
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
      notes: {
        type: 'string',
        description: 'Notes',
      },
      passThroughPaymentFee: {
        type: 'boolean',
        description: 'Pass through payment fee',
      },
      paymentReference: {
        type: 'string',
        description: 'Payment reference',
      },
      siteContactId: {
        type: 'string',
        description: 'Site contact ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invoiceId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.invoices.update(invoiceId, body)));
};

export default { metadata, tool, handler };
