// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'invoice_items',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoice-items',
  operationId: 'createInvoiceItem',
};

export const tool: Tool = {
  name: 'create_invoice_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new invoice item\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful invoice item creation response',\n  properties: {\n    item: {\n      type: 'object',\n      description: 'Created invoice item',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the invoice item'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the item was created',\n          format: 'date-time'\n        },\n        currency: {\n          type: 'string',\n          description: 'Currency code'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the invoice item'\n        },\n        priceInCents: {\n          type: 'number',\n          description: 'Price in cents'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this item belongs to'\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the invoice item'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the item was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'currency',\n        'description',\n        'priceInCents',\n        'siteId',\n        'title',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'item'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      priceInCents: {
        type: 'number',
        description: 'Price in cents',
      },
      siteId: {
        type: 'string',
        description: 'Site ID',
      },
      title: {
        type: 'string',
        description: 'Item title',
      },
      description: {
        type: 'string',
        description: 'Item description',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['priceInCents', 'siteId', 'title'],
  },
  annotations: {},
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.invoiceItems.create(body)));
};

export default { metadata, tool, handler };
