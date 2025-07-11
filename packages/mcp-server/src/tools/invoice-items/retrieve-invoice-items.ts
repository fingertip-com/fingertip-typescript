// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoice_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/invoice-items/{itemId}',
  operationId: 'getInvoiceItem',
};

export const tool: Tool = {
  name: 'retrieve_invoice_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a invoice item by ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful invoice item response',\n  properties: {\n    item: {\n      type: 'object',\n      description: 'Invoice item data',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the invoice item'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the item was created',\n          format: 'date-time'\n        },\n        currency: {\n          type: 'string',\n          description: 'Currency code'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the invoice item'\n        },\n        priceInCents: {\n          type: 'number',\n          description: 'Price in cents'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this item belongs to'\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the invoice item'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the item was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'currency',\n        'description',\n        'priceInCents',\n        'siteId',\n        'title',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'item'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      itemId: {
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
  const { itemId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.invoiceItems.retrieve(itemId)));
};

export default { metadata, tool, handler };
