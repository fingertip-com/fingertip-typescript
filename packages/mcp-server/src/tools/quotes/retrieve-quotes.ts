// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/quotes/{quoteId}',
  operationId: 'getStoreQuote',
};

export const tool: Tool = {
  name: 'retrieve_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a single store quote by ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful quote retrieval response',\n  properties: {\n    quote: {\n      type: 'object',\n      description: 'Schema for a quote',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the quote'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the quote was created',\n          format: 'date-time'\n        },\n        currency: {\n          type: 'string',\n          description: 'Currency code for the quote'\n        },\n        expiresAt: {\n          type: 'string',\n          description: 'Expiration date for the quote',\n          format: 'date-time'\n        },\n        footer: {\n          type: 'string',\n          description: 'Optional footer for the quote'\n        },\n        memo: {\n          type: 'string',\n          description: 'Optional memo for the quote'\n        },\n        notes: {\n          type: 'string',\n          description: 'Optional notes for the quote'\n        },\n        priceIncludesTax: {\n          type: 'boolean',\n          description: 'Whether prices include tax'\n        },\n        quoteNumber: {\n          type: 'number',\n          description: 'Sequential quote number'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this quote belongs to'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the quote',\n          enum: [            'DRAFT',\n            'PENDING',\n            'ACCEPTED',\n            'DECLINED',\n            'EXPIRED'\n          ]\n        },\n        totalInCents: {\n          type: 'number',\n          description: 'Total amount in cents'\n        },\n        totalTaxInCents: {\n          type: 'number',\n          description: 'Total tax amount in cents'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the quote was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'currency',\n        'expiresAt',\n        'footer',\n        'memo',\n        'notes',\n        'priceIncludesTax',\n        'quoteNumber',\n        'siteId',\n        'status',\n        'totalInCents',\n        'totalTaxInCents',\n        'updatedAt'\n      ]\n    },\n    quoteDiscounts: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          lineNumber: {\n            type: 'number'\n          },\n          valueType: {\n            type: 'string',\n            enum: [              'FIXED',\n              'PERCENT'\n            ]\n          },\n          valueFixedInCents: {\n            type: 'number'\n          },\n          valuePercent: {\n            type: 'number'\n          }\n        },\n        required: [          'id',\n          'lineNumber',\n          'valueType'\n        ]\n      }\n    },\n    quoteItems: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          quoteItem: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              lineNumber: {\n                type: 'number'\n              },\n              quantity: {\n                type: 'number'\n              },\n              taxRate: {\n                type: 'number'\n              },\n              unitPriceInCents: {\n                type: 'number'\n              }\n            },\n            required: [              'id',\n              'description',\n              'lineNumber',\n              'quantity',\n              'taxRate',\n              'unitPriceInCents'\n            ]\n          },\n          item: {\n            type: 'object',\n            description: 'Schema for a store item',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the store item'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Date and time when the item was created',\n                format: 'date-time'\n              },\n              currency: {\n                type: 'string',\n                description: 'Currency code'\n              },\n              description: {\n                type: 'string',\n                description: 'Optional description'\n              },\n              priceInCents: {\n                type: 'number',\n                description: 'Price in cents'\n              },\n              siteId: {\n                type: 'string',\n                description: 'Site ID'\n              },\n              systemOnly: {\n                type: 'boolean',\n                description: 'Whether the item is system only'\n              },\n              taxRate: {\n                type: 'number',\n                description: 'Tax rate'\n              },\n              title: {\n                type: 'string',\n                description: 'Title of the store item'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Date and time when the item was last updated',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'createdAt',\n              'currency',\n              'description',\n              'priceInCents',\n              'siteId',\n              'systemOnly',\n              'taxRate',\n              'title',\n              'updatedAt'\n            ]\n          }\n        },\n        required: [          'quoteItem'\n        ]\n      }\n    }\n  },\n  required: [    'quote',\n    'quoteDiscounts',\n    'quoteItems'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      quoteId: {
        type: 'string',
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
  const { quoteId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.quotes.retrieve(quoteId)));
};

export default { metadata, tool, handler };
