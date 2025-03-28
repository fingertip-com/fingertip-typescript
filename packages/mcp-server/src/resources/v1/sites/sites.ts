// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
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
        enum: ['EMPTY', 'UNPUBLISHED', 'PREVIEW', 'SOFT_CLAIM', 'ENABLED', 'DEMO'],
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
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.sites.create(body);
  },
});

registerApiMethod({
  name: 'retrieve_v1_sites',
  description: 'Retrieves a specific site and its related data by site ID',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { siteId } = args;
    return client.v1.sites.retrieve(siteId);
  },
});

registerApiMethod({
  name: 'update_v1_sites',
  description: 'Updates an existing site with provided partial data',
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
        enum: ['EMPTY', 'UNPUBLISHED', 'PREVIEW', 'SOFT_CLAIM', 'ENABLED', 'DEMO'],
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
  handler: (client: Fingertip, args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.update(siteId, body);
  },
});

registerApiMethod({
  name: 'list_v1_sites',
  description: 'Retrieves a paginated list of sites with optional filtering',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 25, max: 100)',
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
          enum: ['EMPTY', 'UNPUBLISHED', 'PREVIEW', 'SOFT_CLAIM', 'ENABLED', 'DEMO'],
        },
      },
      workspaceId: {
        type: 'string',
        description: 'Filter sites by workspace ID',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.sites.list(body);
  },
});

registerApiMethod({
  name: 'delete_v1_sites',
  description: 'Permanently deletes a site by its ID',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { siteId } = args;
    return client.v1.sites.delete(siteId);
  },
});
