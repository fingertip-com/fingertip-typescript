// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/orders',
  operationId: 'getOrders',
};

export const tool: Tool = {
  name: 'list_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves orders with basic information\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful orders listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of order webhook events in the current page',\n      items: {\n        type: 'object',\n        description: 'Order webhook event',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Webhook event ID'\n          },\n          created: {\n            type: 'number',\n            description: 'Unix timestamp when event was created'\n          },\n          data: {\n            type: 'object',\n            description: 'Order data',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Order ID'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Order creation date ISO string'\n              },\n              currency: {\n                type: 'string',\n                description: 'Currency code'\n              },\n              customerEmail: {\n                type: 'string',\n                description: 'Customer email'\n              },\n              customerName: {\n                type: 'string',\n                description: 'Customer full name'\n              },\n              orderItems: {\n                type: 'array',\n                description: 'Order items',\n                items: {\n                  type: 'object',\n                  description: 'Order item details',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'Order item ID'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Product name'\n                    },\n                    originalPriceInCents: {\n                      type: 'number',\n                      description: 'Original price in cents'\n                    },\n                    priceInCents: {\n                      type: 'number',\n                      description: 'Item price in cents'\n                    },\n                    quantity: {\n                      type: 'number',\n                      description: 'Quantity ordered'\n                    },\n                    taxInCents: {\n                      type: 'number',\n                      description: 'Tax amount in cents'\n                    }\n                  },\n                  required: [                    'id',\n                    'name',\n                    'originalPriceInCents',\n                    'priceInCents',\n                    'quantity',\n                    'taxInCents'\n                  ]\n                }\n              },\n              orderNumber: {\n                type: 'number',\n                description: 'Order number'\n              },\n              siteId: {\n                type: 'string',\n                description: 'Site ID'\n              },\n              status: {\n                type: 'string',\n                description: 'Order status'\n              },\n              totalInCents: {\n                type: 'number',\n                description: 'Total amount in cents'\n              }\n            },\n            required: [              'id',\n              'createdAt',\n              'currency',\n              'customerEmail',\n              'customerName',\n              'orderItems',\n              'orderNumber',\n              'siteId',\n              'status',\n              'totalInCents'\n            ]\n          },\n          type: {\n            type: 'string',\n            description: 'Event type',\n            enum: [              'order.created'\n            ]\n          }\n        },\n        required: [          'id',\n          'created',\n          'data',\n          'type'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of orders'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      site: {
        type: 'string',
        description: 'Site slug to retrieve orders for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
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
  const body = args as any;
  const response = await client.orders.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
