// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new store quote\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful quote creation response',\n  properties: {\n    quoteId: {\n      type: 'string',\n      description: 'Created quote ID'\n    }\n  },\n  required: [    'quoteId'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['quoteItems', 'siteContactId', 'siteSlug', 'status'],
  },
  annotations: {},
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.quotes.create(body)));
};

export default { metadata, tool, handler };
