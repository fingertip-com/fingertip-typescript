// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'create_sites_v1_pages',
  description: 'Creates a new page within a site with the provided content.',
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
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.pages.create(siteId, body);
  },
});

registerApiMethod({
  name: 'list_sites_v1_pages',
  description: 'Retrieves a paginated list of pages for a specific site.',
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
        description: 'Number of items per page (default: 25, max: 100)',
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
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.pages.list(siteId, body);
  },
});
