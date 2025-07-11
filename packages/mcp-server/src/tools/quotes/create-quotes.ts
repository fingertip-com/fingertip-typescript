// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/quotes',
  operationId: 'createStoreQuote',
};

export const tool: Tool = {
  name: 'create_quotes',
  description: 'Creates a new store quote',
  inputSchema: {
    type: 'object',
    properties: {
      quoteItems: {
        type: 'array',
        description: 'Quote items',
        items: {
          type: 'object',
          description: 'Schema for a store quote item',
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
      siteSlug: {
        type: 'string',
        description: 'Site slug',
      },
      status: {
        type: 'string',
        description: 'Quote status',
        enum: ['DRAFT', 'PENDING', 'ACCEPTED', 'DECLINED', 'EXPIRED'],
      },
      currency: {
        type: 'string',
        description: 'Currency code',
      },
      expiresAt: {
        type: 'string',
        description: 'Expiration date (ISO string)',
      },
      footer: {
        type: 'string',
        description: 'Footer text',
      },
      memo: {
        type: 'string',
        description: 'Memo',
      },
      notes: {
        type: 'string',
        description: 'Notes',
      },
      quoteDiscounts: {
        type: 'array',
        description: 'Quote discounts',
        items: {
          type: 'object',
          description: 'Schema for a store quote discount',
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
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.quotes.create(body));
};

export default { metadata, tool, handler };
