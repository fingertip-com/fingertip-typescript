// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'pages',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/pages/{pageId}',
  operationId: 'updatePage',
};

export const tool: Tool = {
  name: 'update_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing page with the provided data.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful page update response',\n  properties: {\n    page: {\n      type: 'object',\n      description: 'The updated page with all relations',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the page'\n        },\n        blocks: {\n          type: 'array',\n          description: 'Array of content blocks associated with the page',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the block'\n              },\n              componentBlockId: {\n                type: 'string',\n                description: 'ID of the component block if this is an instance, can be null'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Date and time when the block was created',\n                format: 'date-time'\n              },\n              kind: {\n                type: 'string',\n                description: 'Type or category of the block, can be null'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the block'\n              },\n              pageId: {\n                type: 'string',\n                description: 'ID of the page this block belongs to'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Date and time when the block was last updated',\n                format: 'date-time'\n              },\n              content: {\n                type: 'object',\n                description: 'Content of the block, can be null'\n              },\n              isComponent: {\n                type: 'boolean',\n                description: 'Whether this block is a component'\n              }\n            },\n            required: [              'id',\n              'componentBlockId',\n              'createdAt',\n              'kind',\n              'name',\n              'pageId',\n              'updatedAt'\n            ]\n          }\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the page was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the page content, can be null'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the page, can be null'\n        },\n        pageTheme: {\n          type: 'object',\n          description: 'Theme applied to the page, can be null',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the page theme'\n            },\n            componentPageThemeId: {\n              type: 'string',\n              description: 'ID of the parent component theme if this is an instance, can be null'\n            },\n            createdAt: {\n              type: 'string',\n              description: 'Date and time when the theme was created',\n              format: 'date-time'\n            },\n            updatedAt: {\n              type: 'string',\n              description: 'Date and time when the theme was last updated',\n              format: 'date-time'\n            },\n            content: {\n              type: 'object',\n              description: 'Theme content configuration, can be null'\n            },\n            isComponent: {\n              type: 'boolean',\n              description: 'Whether this theme is a reusable component'\n            }\n          },\n          required: [            'id',\n            'componentPageThemeId',\n            'createdAt',\n            'updatedAt'\n          ]\n        },\n        pageThemeId: {\n          type: 'string',\n          description: 'ID of the theme applied to this page, can be null'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this page belongs to'\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly path segment for the page'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the page was last updated',\n          format: 'date-time'\n        },\n        bannerMedia: {\n          type: 'object',\n          description: 'Banner media for the page, can be null'\n        },\n        logoMedia: {\n          type: 'object',\n          description: 'Logo media for the page, can be null'\n        },\n        position: {\n          type: 'number',\n          description: 'Display position of the page within the site'\n        },\n        socialIcons: {\n          type: 'object',\n          description: 'Social media icons configuration, can be null'\n        }\n      },\n      required: [        'id',\n        'blocks',\n        'createdAt',\n        'description',\n        'name',\n        'pageTheme',\n        'pageThemeId',\n        'siteId',\n        'slug',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
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
      name: {
        type: 'string',
        description: 'Name of the page, can be null',
      },
      position: {
        type: 'number',
        description: 'Display position of the page within the site',
      },
      siteId: {
        type: 'string',
        description: 'ID of the site this page belongs to',
      },
      slug: {
        type: 'string',
        description: 'URL-friendly path segment for the page',
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
  const { pageId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pages.update(pageId, body)));
};

export default { metadata, tool, handler };
