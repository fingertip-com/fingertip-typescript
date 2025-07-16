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
  httpPath: '/v1/invoices/{invoiceId}/send',
  operationId: 'sendStoreInvoice',
};

export const tool: Tool = {
  name: 'send_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSends a draft store invoice\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful send response',\n  properties: {\n    success: {\n      type: 'boolean',\n      description: 'Success status'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invoiceId: {
        type: 'string',
      },
      siteSlug: {
        type: 'string',
        description: 'Site slug',
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
  return asTextContentResult(await maybeFilter(args, await client.invoices.send(invoiceId, body)));
};

export default { metadata, tool, handler };
