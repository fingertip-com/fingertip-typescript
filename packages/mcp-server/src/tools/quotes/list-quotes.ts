// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/quotes',
  operationId: 'getQuotes',
};

export const tool: Tool = {
  name: 'list_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of quotes for sites the user has access to\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful quotes listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of quotes in the current page',\n      items: {\n        type: 'object',\n        properties: {\n          contact: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              email: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'email',\n              'name'\n            ]\n          },\n          quote: {\n            type: 'object',\n            description: 'Schema for a quote',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the quote'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Date and time when the quote was created',\n                format: 'date-time'\n              },\n              currency: {\n                type: 'string',\n                description: 'Currency code for the quote'\n              },\n              expiresAt: {\n                type: 'string',\n                description: 'Expiration date for the quote',\n                format: 'date-time'\n              },\n              footer: {\n                type: 'string',\n                description: 'Optional footer for the quote'\n              },\n              memo: {\n                type: 'string',\n                description: 'Optional memo for the quote'\n              },\n              notes: {\n                type: 'string',\n                description: 'Optional notes for the quote'\n              },\n              priceIncludesTax: {\n                type: 'boolean',\n                description: 'Whether prices include tax'\n              },\n              quoteNumber: {\n                type: 'number',\n                description: 'Sequential quote number'\n              },\n              siteId: {\n                type: 'string',\n                description: 'ID of the site this quote belongs to'\n              },\n              status: {\n                type: 'string',\n                description: 'Current status of the quote',\n                enum: [                  'DRAFT',\n                  'PENDING',\n                  'ACCEPTED',\n                  'DECLINED',\n                  'EXPIRED'\n                ]\n              },\n              totalInCents: {\n                type: 'number',\n                description: 'Total amount in cents'\n              },\n              totalTaxInCents: {\n                type: 'number',\n                description: 'Total tax amount in cents'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Date and time when the quote was last updated',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'createdAt',\n              'currency',\n              'expiresAt',\n              'footer',\n              'memo',\n              'notes',\n              'priceIncludesTax',\n              'quoteNumber',\n              'siteId',\n              'status',\n              'totalInCents',\n              'totalTaxInCents',\n              'updatedAt'\n            ]\n          }\n        },\n        required: [          'contact',\n          'quote'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of quotes'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteSlug: {
        type: 'string',
        description: 'Site slug to retrieve quotes for',
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
      siteContactId: {
        type: 'string',
        description: 'Site contact ID',
      },
      statusFilters: {
        type: 'array',
        description: 'Filter by quote status',
        items: {
          type: 'string',
          enum: ['DRAFT', 'PENDING', 'ACCEPTED', 'DECLINED', 'EXPIRED'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['siteSlug'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.quotes.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
