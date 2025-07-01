// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Updates a store invoice',
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
      currency: {
        type: 'string',
        description: 'Currency',
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
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { invoiceId, ...body } = args as any;
  return asTextContentResult(await client.invoices.update(invoiceId, body));
};

export default { metadata, tool, handler };
