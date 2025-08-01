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
  httpPath: '/v1/sites/{siteId}',
  operationId: 'getSite',
};

export const tool: Tool = {
  name: 'retrieve_sites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a specific site and its related data by site ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful site retrieval response',\n  properties: {\n    site: {\n      type: 'object',\n      description: 'The requested site',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the site'\n        },\n        businessType: {\n          type: 'string',\n          description: 'Type of business the site represents, can be null'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the site was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the site, can be null'\n        },\n        homePageId: {\n          type: 'string',\n          description: 'ID of the site\\'s home page, can be null'\n        },\n        locationId: {\n          type: 'string',\n          description: 'ID of the associated location, can be null'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the site'\n        },\n        overridePlan: {\n          type: 'string',\n          description: 'Custom plan override for the site, can be null'\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly identifier for the site'\n        },\n        timeZone: {\n          type: 'string',\n          description: 'Time zone for the site, can be null'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the site was last updated',\n          format: 'date-time'\n        },\n        workspaceId: {\n          type: 'string',\n          description: 'ID of the workspace this site belongs to, can be null'\n        },\n        logoMedia: {\n          type: 'object',\n          description: 'Logo media for the site, can be null'\n        },\n        socialIcons: {\n          type: 'object',\n          description: 'Social media icons configuration, can be null'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the site',\n          enum: [            'EMPTY',\n            'UNPUBLISHED',\n            'PREVIEW',\n            'SOFT_CLAIM',\n            'ENABLED',\n            'DEMO',\n            'ARCHIVED'\n          ]\n        }\n      },\n      required: [        'id',\n        'businessType',\n        'createdAt',\n        'description',\n        'homePageId',\n        'locationId',\n        'name',\n        'overridePlan',\n        'slug',\n        'timeZone',\n        'updatedAt',\n        'workspaceId'\n      ]\n    }\n  },\n  required: [    'site'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
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
  const { siteId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sites.retrieve(siteId)));
};

export default { metadata, tool, handler };
