// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites.pages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/sites/{siteId}/pages',
  operationId: 'createPage',
};

export const tool: Tool = {
  name: 'create_sites_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new page within a site with the provided content.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful page creation response',\n  properties: {\n    page: {\n      type: 'object',\n      description: 'The newly created page with all relations',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the page'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the page was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the page content, can be null'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the page, can be null'\n        },\n        pageThemeId: {\n          type: 'string',\n          description: 'ID of the theme applied to this page, can be null'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this page belongs to'\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly path segment for the page'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the page was last updated',\n          format: 'date-time'\n        },\n        bannerMedia: {\n          type: 'object',\n          description: 'Banner media for the page, can be null'\n        },\n        logoMedia: {\n          type: 'object',\n          description: 'Logo media for the page, can be null'\n        },\n        position: {\n          type: 'number',\n          description: 'Display position of the page within the site'\n        },\n        socialIcons: {\n          type: 'object',\n          description: 'Social media icons configuration, can be null'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'description',\n        'name',\n        'pageThemeId',\n        'siteId',\n        'slug',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_siteId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the page, can be null',
      },
      body_siteId: {
        type: 'string',
        description: 'ID of the site this page belongs to',
      },
      slug: {
        type: 'string',
        description: 'URL-friendly path segment for the page',
      },
      bannerMedia: {
        type: 'object',
        description: 'Banner media for the page, can be null',
      },
      description: {
        type: 'string',
        description: 'Description of the page content, can be null',
      },
      logoMedia: {
        type: 'object',
        description: 'Logo media for the page, can be null',
      },
      position: {
        type: 'number',
        description: 'Display position of the page within the site',
      },
      socialIcons: {
        type: 'object',
        description: 'Social media icons configuration, can be null',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_siteId', 'name', 'body_siteId', 'slug'],
  },
  annotations: {},
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sites.pages.create(siteId, body)));
};

export default { metadata, tool, handler };
