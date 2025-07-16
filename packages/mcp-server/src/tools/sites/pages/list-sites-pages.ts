// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites.pages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites/{siteId}/pages',
  operationId: 'getPages',
};

export const tool: Tool = {
  name: 'list_sites_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of pages for a specific site.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful pages listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of pages in the current page of results',\n      items: {\n        type: 'object',\n        description: 'Schema for a page entity',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the page'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the page was created',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string',\n            description: 'Description of the page content, can be null'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the page, can be null'\n          },\n          pageThemeId: {\n            type: 'string',\n            description: 'ID of the theme applied to this page, can be null'\n          },\n          siteId: {\n            type: 'string',\n            description: 'ID of the site this page belongs to'\n          },\n          slug: {\n            type: 'string',\n            description: 'URL-friendly path segment for the page'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the page was last updated',\n            format: 'date-time'\n          },\n          bannerMedia: {\n            type: 'object',\n            description: 'Banner media for the page, can be null'\n          },\n          logoMedia: {\n            type: 'object',\n            description: 'Logo media for the page, can be null'\n          },\n          position: {\n            type: 'number',\n            description: 'Display position of the page within the site'\n          },\n          socialIcons: {\n            type: 'object',\n            description: 'Social media icons configuration, can be null'\n          }\n        },\n        required: [          'id',\n          'createdAt',\n          'description',\n          'name',\n          'pageThemeId',\n          'siteId',\n          'slug',\n          'updatedAt'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of pages matching the query'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt'],
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction (default: desc)',
        enum: ['asc', 'desc'],
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
  const { siteId, ...body } = args as any;
  const response = await client.sites.pages.list(siteId, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
