// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new page within a site with the provided content.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful page creation response',\n  properties: {\n    page: {\n      type: 'object',\n      description: 'The newly created page with all relations',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the page'\n        },\n        blocks: {\n          type: 'array',\n          description: 'Array of content blocks associated with the page',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the block'\n              },\n              componentBlockId: {\n                type: 'string',\n                description: 'ID of the component block if this is an instance, can be null'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Date and time when the block was created',\n                format: 'date-time'\n              },\n              kind: {\n                type: 'string',\n                description: 'Type or category of the block, can be null'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the block'\n              },\n              pageId: {\n                type: 'string',\n                description: 'ID of the page this block belongs to'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Date and time when the block was last updated',\n                format: 'date-time'\n              },\n              content: {\n                type: 'object',\n                description: 'Content of the block, can be null'\n              },\n              isComponent: {\n                type: 'boolean',\n                description: 'Whether this block is a component'\n              }\n            },\n            required: [              'id',\n              'componentBlockId',\n              'createdAt',\n              'kind',\n              'name',\n              'pageId',\n              'updatedAt'\n            ]\n          }\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the page was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the page content, can be null'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the page, can be null'\n        },\n        pageTheme: {\n          type: 'object',\n          description: 'Theme applied to the page, can be null',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the page theme'\n            },\n            componentPageThemeId: {\n              type: 'string',\n              description: 'ID of the parent component theme if this is an instance, can be null'\n            },\n            createdAt: {\n              type: 'string',\n              description: 'Date and time when the theme was created',\n              format: 'date-time'\n            },\n            updatedAt: {\n              type: 'string',\n              description: 'Date and time when the theme was last updated',\n              format: 'date-time'\n            },\n            content: {\n              type: 'object',\n              description: 'Theme content configuration, can be null'\n            },\n            isComponent: {\n              type: 'boolean',\n              description: 'Whether this theme is a reusable component'\n            }\n          },\n          required: [            'id',\n            'componentPageThemeId',\n            'createdAt',\n            'updatedAt'\n          ]\n        },\n        pageThemeId: {\n          type: 'string',\n          description: 'ID of the theme applied to this page, can be null'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this page belongs to'\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly path segment for the page'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the page was last updated',\n          format: 'date-time'\n        },\n        bannerMedia: {\n          type: 'object',\n          description: 'Banner media for the page, can be null'\n        },\n        logoMedia: {\n          type: 'object',\n          description: 'Logo media for the page, can be null'\n        },\n        position: {\n          type: 'number',\n          description: 'Display position of the page within the site'\n        },\n        socialIcons: {\n          type: 'object',\n          description: 'Social media icons configuration, can be null'\n        }\n      },\n      required: [        'id',\n        'blocks',\n        'createdAt',\n        'description',\n        'name',\n        'pageTheme',\n        'pageThemeId',\n        'siteId',\n        'slug',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'ID of the site this page belongs to',
      },
      name: {
        type: 'string',
        description: 'Name of the page, can be null',
      },
      pageTheme: {
        type: 'object',
        description: 'Theme to apply to the new page',
        properties: {
          componentPageThemeId: {
            type: 'string',
            description: 'ID of the parent component theme if this is an instance, can be null',
          },
          content: {
            type: 'object',
            description: 'Theme content configuration, can be null',
          },
          isComponent: {
            type: 'boolean',
            description: 'Whether this theme is a reusable component',
          },
        },
        required: [],
      },
      slug: {
        type: 'string',
        description: 'URL-friendly path segment for the page',
      },
      bannerMedia: {
        type: 'object',
        description: 'Banner media for the page, can be null',
      },
      blocks: {
        type: 'array',
        description: 'Initial content blocks for the page',
        items: {
          type: 'object',
          description: 'Schema for creating a new block',
          properties: {
            componentBlockId: {
              type: 'string',
              description: 'ID of the component block if this is an instance, can be null',
            },
            kind: {
              type: 'string',
              description: 'Type or category of the block, can be null',
            },
            name: {
              type: 'string',
              description: 'Name of the block',
            },
            content: {
              type: 'object',
              description: 'Content of the block, can be null',
            },
            isComponent: {
              type: 'boolean',
              description: 'Whether this block is a component',
            },
          },
          required: ['componentBlockId', 'kind', 'name'],
        },
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
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.sites.pages.create(siteId, body)));
};

export default { metadata, tool, handler };
