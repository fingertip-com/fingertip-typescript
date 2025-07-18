// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'help_docs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/help-docs/articles',
  operationId: 'searchArticles',
};

export const tool: Tool = {
  name: 'search_articles_help_docs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch through help documentation articles using full-text search. Returns articles ordered by relevance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful search response',\n  properties: {\n    articles: {\n      type: 'array',\n      description: 'Array of matching articles',\n      items: {\n        type: 'object',\n        description: 'Help documentation article',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the article'\n          },\n          body: {\n            type: 'string',\n            description: 'Full content body of the article'\n          },\n          relevanceScore: {\n            type: 'number',\n            description: 'Search relevance score'\n          },\n          title: {\n            type: 'string',\n            description: 'Title of the article'\n          },\n          url: {\n            type: 'string',\n            description: 'Direct URL to the article'\n          }\n        },\n        required: [          'id',\n          'body',\n          'relevanceScore',\n          'title',\n          'url'\n        ]\n      }\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of matching articles'\n    }\n  },\n  required: [    'articles',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      search: {
        type: 'string',
        description: 'Search query string',
      },
      limit: {
        type: 'number',
        description: 'Number of results to return (default: 10, max: 20)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['search'],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.helpDocs.searchArticles(body)));
};

export default { metadata, tool, handler };
