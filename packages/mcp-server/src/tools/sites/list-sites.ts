// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites',
  operationId: 'getSites',
};

export const tool: Tool = {
  name: 'list_sites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of sites with optional filtering\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful sites listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of sites in the current page of results',\n      items: {\n        type: 'object',\n        description: 'Schema for a site entity',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the site'\n          },\n          businessType: {\n            type: 'string',\n            description: 'Type of business the site represents, can be null'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the site was created',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string',\n            description: 'Description of the site, can be null'\n          },\n          homePageId: {\n            type: 'string',\n            description: 'ID of the site\\'s home page, can be null'\n          },\n          locationId: {\n            type: 'string',\n            description: 'ID of the associated location, can be null'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the site'\n          },\n          overridePlan: {\n            type: 'string',\n            description: 'Custom plan override for the site, can be null'\n          },\n          slug: {\n            type: 'string',\n            description: 'URL-friendly identifier for the site'\n          },\n          status: {\n            type: 'string',\n            description: 'Current status of the site',\n            enum: [              'EMPTY',\n              'UNPUBLISHED',\n              'PREVIEW',\n              'SOFT_CLAIM',\n              'ENABLED',\n              'DEMO',\n              'ARCHIVED'\n            ]\n          },\n          timeZone: {\n            type: 'string',\n            description: 'Time zone for the site, can be null'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the site was last updated',\n            format: 'date-time'\n          },\n          workspaceId: {\n            type: 'string',\n            description: 'ID of the workspace this site belongs to, can be null'\n          },\n          logoMedia: {\n            type: 'object',\n            description: 'Logo media for the site, can be null'\n          },\n          socialIcons: {\n            type: 'object',\n            description: 'Social media icons configuration, can be null'\n          }\n        },\n        required: [          'id',\n          'businessType',\n          'createdAt',\n          'description',\n          'homePageId',\n          'locationId',\n          'name',\n          'overridePlan',\n          'slug',\n          'status',\n          'timeZone',\n          'updatedAt',\n          'workspaceId'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of sites matching the query'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
        description: 'Search query',
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
      statuses: {
        type: 'array',
        description: 'Filter sites by status',
        items: {
          type: 'string',
          enum: ['EMPTY', 'UNPUBLISHED', 'PREVIEW', 'SOFT_CLAIM', 'ENABLED', 'DEMO', 'ARCHIVED'],
        },
      },
      workspaceId: {
        type: 'string',
        description: 'Filter sites by workspace ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.sites.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
