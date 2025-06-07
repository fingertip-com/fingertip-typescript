// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.sites',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/sites',
  operationId: 'createSite',
};

export const tool: Tool = {
  name: 'create_v1_sites',
  description: 'Creates a new site with associated pages, themes, and blocks',
  inputSchema: {
    type: 'object',
    properties: {
      businessType: {
        type: 'string',
        description: 'Type of business the site represents, can be null',
      },
      name: {
        type: 'string',
        description: 'Name of the site',
      },
      pages: {
        type: 'array',
        description: 'Array of pages to create with the site',
        items: {
          type: 'object',
          description: 'Page to create with theme and blocks',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the page, can be null',
            },
            pageTheme: {
              type: 'object',
              description: 'Theme for the page',
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
              description: 'Content blocks for the page',
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
          },
          required: ['name', 'pageTheme', 'slug'],
        },
      },
      slug: {
        type: 'string',
        description: 'URL-friendly identifier for the site',
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
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.sites.create(body));
};

export default { metadata, tool, handler };
