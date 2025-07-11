// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/sites/{siteId}',
  operationId: 'updateSite',
};

export const tool: Tool = {
  name: 'update_sites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing site with provided partial data\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful site update response',\n  properties: {\n    site: {\n      type: 'object',\n      description: 'The updated site with all relations',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the site'\n        },\n        businessType: {\n          type: 'string',\n          description: 'Type of business the site represents, can be null'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the site was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the site, can be null'\n        },\n        homePageId: {\n          type: 'string',\n          description: 'ID of the site\\'s home page, can be null'\n        },\n        locationId: {\n          type: 'string',\n          description: 'ID of the associated location, can be null'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the site'\n        },\n        overridePlan: {\n          type: 'string',\n          description: 'Custom plan override for the site, can be null'\n        },\n        pages: {\n          type: 'array',\n          description: 'Array of pages associated with this site',\n          items: {\n            type: 'object',\n            description: 'Schema for a page entity',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the page'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Date and time when the page was created',\n                format: 'date-time'\n              },\n              description: {\n                type: 'string',\n                description: 'Description of the page content, can be null'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the page, can be null'\n              },\n              pageThemeId: {\n                type: 'string',\n                description: 'ID of the theme applied to this page, can be null'\n              },\n              siteId: {\n                type: 'string',\n                description: 'ID of the site this page belongs to'\n              },\n              slug: {\n                type: 'string',\n                description: 'URL-friendly path segment for the page'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Date and time when the page was last updated',\n                format: 'date-time'\n              },\n              bannerMedia: {\n                type: 'object',\n                description: 'Banner media for the page, can be null'\n              },\n              logoMedia: {\n                type: 'object',\n                description: 'Logo media for the page, can be null'\n              },\n              position: {\n                type: 'number',\n                description: 'Display position of the page within the site'\n              },\n              socialIcons: {\n                type: 'object',\n                description: 'Social media icons configuration, can be null'\n              }\n            },\n            required: [              'id',\n              'createdAt',\n              'description',\n              'name',\n              'pageThemeId',\n              'siteId',\n              'slug',\n              'updatedAt'\n            ]\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly identifier for the site'\n        },\n        timeZone: {\n          type: 'string',\n          description: 'Time zone for the site, can be null'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the site was last updated',\n          format: 'date-time'\n        },\n        workspaceId: {\n          type: 'string',\n          description: 'ID of the workspace this site belongs to, can be null'\n        },\n        logoMedia: {\n          type: 'object',\n          description: 'Logo media for the site, can be null'\n        },\n        socialIcons: {\n          type: 'object',\n          description: 'Social media icons configuration, can be null'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the site',\n          enum: [            'EMPTY',\n            'UNPUBLISHED',\n            'PREVIEW',\n            'SOFT_CLAIM',\n            'ENABLED',\n            'DEMO',\n            'ARCHIVED'\n          ]\n        }\n      },\n      required: [        'id',\n        'businessType',\n        'createdAt',\n        'description',\n        'homePageId',\n        'locationId',\n        'name',\n        'overridePlan',\n        'pages',\n        'slug',\n        'timeZone',\n        'updatedAt',\n        'workspaceId'\n      ]\n    }\n  },\n  required: [    'site'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      businessType: {
        type: 'string',
        description: 'Type of business the site represents, can be null',
      },
      description: {
        type: 'string',
        description: 'Description of the site, can be null',
      },
      homePageId: {
        type: 'string',
        description: "ID of the site's home page, can be null",
      },
      locationId: {
        type: 'string',
        description: 'ID of the associated location, can be null',
      },
      logoMedia: {
        type: 'object',
        description: 'Logo media for the site, can be null',
      },
      name: {
        type: 'string',
        description: 'Name of the site',
      },
      slug: {
        type: 'string',
        description: 'URL-friendly identifier for the site',
      },
      socialIcons: {
        type: 'object',
        description: 'Social media icons configuration, can be null',
      },
      status: {
        type: 'string',
        description: 'Current status of the site',
        enum: ['EMPTY', 'UNPUBLISHED', 'PREVIEW', 'SOFT_CLAIM', 'ENABLED', 'DEMO', 'ARCHIVED'],
      },
      timeZone: {
        type: 'string',
        description: 'Time zone for the site, can be null',
      },
      workspaceId: {
        type: 'string',
        description: 'ID of the workspace this site belongs to, can be null',
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
  return asTextContentResult(await maybeFilter(args, await client.sites.update(siteId, body)));
};

export default { metadata, tool, handler };
