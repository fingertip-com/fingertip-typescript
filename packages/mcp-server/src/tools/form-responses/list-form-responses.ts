// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'form_responses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/form-responses',
  operationId: 'getFormResponses',
};

export const tool: Tool = {
  name: 'list_form_responses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves form responses for a specific form template and site.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful form responses listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of form responses in the current page',\n      items: {\n        type: 'object'\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of form responses'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      form_template_id: {
        type: 'string',
        description: 'ID of the form template to retrieve responses for',
      },
      site_id: {
        type: 'string',
        description: 'ID of the site to retrieve responses for',
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
  return asTextContentResult((await client.formResponses.list(body)) as object);
};

export default { metadata, tool, handler };
