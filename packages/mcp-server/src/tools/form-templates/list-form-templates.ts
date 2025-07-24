// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'form_templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/form-templates',
  operationId: 'getFormTemplates',
};

export const tool: Tool = {
  name: 'list_form_templates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of form templates for a specific site\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful form templates listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of form templates in the current page',\n      items: {\n        type: 'object',\n        description: 'Schema for a form template',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the form template'\n          },\n          buttonText: {\n            type: 'string',\n            description: 'Submit button text'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the form was created',\n            format: 'date-time'\n          },\n          customRecipients: {\n            type: 'array',\n            description: 'Custom email recipients',\n            items: {\n              type: 'string'\n            }\n          },\n          description: {\n            type: 'string',\n            description: 'Description of the form template'\n          },\n          formThemeId: {\n            type: 'string',\n            description: 'ID of the form theme'\n          },\n          siteId: {\n            type: 'string',\n            description: 'ID of the site this form belongs to'\n          },\n          slug: {\n            type: 'string',\n            description: 'URL-friendly identifier for the form template'\n          },\n          status: {\n            type: 'string',\n            description: 'Status of the form template',\n            enum: [              'ENABLED',\n              'PLACEHOLDER'\n            ]\n          },\n          thankYouMessage: {\n            type: 'string',\n            description: 'Thank you message after submission'\n          },\n          title: {\n            type: 'string',\n            description: 'Title of the form template'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the form was last updated',\n            format: 'date-time'\n          },\n          useCustomRecipients: {\n            type: 'boolean',\n            description: 'Whether to use custom recipients'\n          },\n          bannerMedia: {\n            type: 'object',\n            description: 'Banner media for the form'\n          },\n          responseCount: {\n            type: 'number',\n            description: 'Number of responses received'\n          }\n        },\n        required: [          'id',\n          'buttonText',\n          'createdAt',\n          'customRecipients',\n          'description',\n          'formThemeId',\n          'siteId',\n          'slug',\n          'status',\n          'thankYouMessage',\n          'title',\n          'updatedAt',\n          'useCustomRecipients'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of form templates'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'ID of the site to retrieve form templates for',
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
        description: 'Search query for form template titles',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt', 'title'],
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
    required: ['siteId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.formTemplates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
