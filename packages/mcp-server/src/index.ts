// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

// Instantiate client
const client = new Fingertip();

// Create server instance
const server = new Server(
  {
    name: 'fingertip_api',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

const tools: Tool[] = [];
const handlers: Record<string, Function> = {};

registerApiMethod({
  name: 'get_form_responses_sample_v1',
  description: 'Retrieves a sample of form responses for a specific form template.',
  inputSchema: {
    type: 'object',
    properties: {
      form_template_slug: {
        type: 'string',
        description: 'Slug of the form template to retrieve responses for',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.v1.getFormResponsesSample(body);
  },
});

registerApiMethod({
  name: 'list_bookings_v1',
  description: 'Retrieves a paginated list of bookings for a site with optional status filtering',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'Site ID to fetch bookings for',
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
      status: {
        type: 'string',
        description: 'Filter by booking status',
        enum: [
          'CANCELLED',
          'ACCEPTED',
          'REJECTED',
          'PENDING',
          'COMPLETED',
          'NO_SHOW',
          'REFUNDED',
          'PENDING_CONFIRMATION',
        ],
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.v1.listBookings(body);
  },
});

registerApiMethod({
  name: 'ping_v1',
  description: 'Simple health check endpoint to verify the API is running. Requires authentication.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
  handler: (args: any) => {
    const {} = args;
    return client.v1.ping();
  },
});

registerApiMethod({
  name: 'retrieve_v1_pages',
  description: 'Retrieves a specific page by ID including all related blocks and theme information.',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { pageId } = args;
    return client.v1.pages.retrieve(pageId);
  },
});

registerApiMethod({
  name: 'update_v1_pages',
  description: 'Updates an existing page with the provided data.',
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
    },
  },
  handler: (args: any) => {
    const { pageId, ...body } = args;
    return client.v1.pages.update(pageId, body);
  },
});

registerApiMethod({
  name: 'delete_v1_pages',
  description: 'Permanently deletes a page and all associated data.',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { pageId } = args;
    return client.v1.pages.delete(pageId);
  },
});

registerApiMethod({
  name: 'create_pages_v1_blocks',
  description:
    'Creates a new block within the specified page. Returns the created block or validation errors.',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
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
  },
  handler: (args: any) => {
    const { pageId, ...body } = args;
    return client.v1.pages.blocks.create(pageId, body);
  },
});

registerApiMethod({
  name: 'list_pages_v1_blocks',
  description: 'Retrieves all blocks associated with the specified page ID',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { pageId } = args;
    return client.v1.pages.blocks.list(pageId);
  },
});

registerApiMethod({
  name: 'retrieve_pages_v1_theme',
  description: 'Retrieves the theme associated with a specific page',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { pageId } = args;
    return client.v1.pages.theme.retrieve(pageId);
  },
});

registerApiMethod({
  name: 'update_pages_v1_theme',
  description: 'Creates or updates the theme for a specific page',
  inputSchema: {
    type: 'object',
    properties: {
      pageId: {
        type: 'string',
      },
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
  },
  handler: (args: any) => {
    const { pageId, ...body } = args;
    return client.v1.pages.theme.update(pageId, body);
  },
});

registerApiMethod({
  name: 'retrieve_v1_blocks',
  description: 'Retrieves a specific block by its ID. Returns 404 if the block is not found.',
  inputSchema: {
    type: 'object',
    properties: {
      blockId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { blockId } = args;
    return client.v1.blocks.retrieve(blockId);
  },
});

registerApiMethod({
  name: 'update_v1_blocks',
  description:
    'Updates an existing block with the provided data. Allows partial updates. Returns 404 if the block is not found.',
  inputSchema: {
    type: 'object',
    properties: {
      blockId: {
        type: 'string',
      },
      componentBlockId: {
        type: 'string',
        description: 'ID of the component block if this is an instance, can be null',
      },
      content: {
        type: 'object',
        description: 'Content of the block, can be null',
      },
      isComponent: {
        type: 'boolean',
        description: 'Whether this block is a component',
      },
      kind: {
        type: 'string',
        description: 'Type or category of the block, can be null',
      },
      name: {
        type: 'string',
        description: 'Name of the block',
      },
    },
  },
  handler: (args: any) => {
    const { blockId, ...body } = args;
    return client.v1.blocks.update(blockId, body);
  },
});

registerApiMethod({
  name: 'delete_v1_blocks',
  description: 'Permanently deletes a block. Returns a success status or 404 if the block is not found.',
  inputSchema: {
    type: 'object',
    properties: {
      blockId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { blockId } = args;
    return client.v1.blocks.delete(blockId);
  },
});

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
  handler: (args: any) => {
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
  handler: (args: any) => {
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
  handler: (args: any) => {
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
  handler: (args: any) => {
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
  handler: (args: any) => {
    const { siteId } = args;
    return client.v1.sites.delete(siteId);
  },
});

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
  handler: (args: any) => {
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
  handler: (args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.pages.list(siteId, body);
  },
});

registerApiMethod({
  name: 'create_sites_v1_invitations',
  description: 'Creates a new invitation for a user to join a site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to invite',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the invited user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
    },
  },
  handler: (args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.invitations.create(siteId, body);
  },
});

registerApiMethod({
  name: 'list_sites_v1_invitations',
  description: 'Retrieves a paginated list of invitations for a specific site',
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
    },
  },
  handler: (args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.invitations.list(siteId, body);
  },
});

registerApiMethod({
  name: 'create_sites_v1_memberships',
  description: 'Adds a user to a site',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
      userId: {
        type: 'string',
        description: 'ID of the user to add',
      },
    },
  },
  handler: (args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.memberships.create(siteId, body);
  },
});

registerApiMethod({
  name: 'list_sites_v1_memberships',
  description: 'Retrieves a paginated list of members for a specific site',
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
    },
  },
  handler: (args: any) => {
    const { siteId, ...body } = args;
    return client.v1.sites.memberships.list(siteId, body);
  },
});

registerApiMethod({
  name: 'create_v1_site_contacts',
  description: 'Creates a new contact associated with a site including marketing preferences',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Email address of the contact',
      },
      marketingStatus: {
        type: 'string',
        description: 'Marketing consent status of the contact',
        enum: ['SUBSCRIBED', 'UNSUBSCRIBED', 'CLEANED', 'PENDING', 'TRANSACTIONAL', 'ARCHIVED'],
      },
      siteId: {
        type: 'string',
        description: 'ID of the site to associate this contact with',
      },
      firstName: {
        type: 'string',
        description: 'First name of the contact',
      },
      lastName: {
        type: 'string',
        description: 'Last name of the contact',
      },
      notes: {
        type: 'string',
        description: 'Additional notes about the contact',
      },
      phone: {
        type: 'string',
        description: 'Phone number of the contact',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.v1.siteContacts.create(body);
  },
});

registerApiMethod({
  name: 'sample_v1_site_contacts',
  description: 'Retrieves a sample of site contacts with basic contact information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
  handler: (args: any) => {
    const {} = args;
    return client.v1.siteContacts.sample();
  },
});

registerApiMethod({
  name: 'retrieve_v1_workspaces',
  description: 'Retrieves a specific workspace and its related data by workspace ID',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { workspaceId } = args;
    return client.v1.workspaces.retrieve(workspaceId);
  },
});

registerApiMethod({
  name: 'update_v1_workspaces',
  description: 'Updates an existing workspace with provided partial data',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the workspace',
      },
    },
  },
  handler: (args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.update(workspaceId, body);
  },
});

registerApiMethod({
  name: 'list_v1_workspaces',
  description: 'Retrieves a paginated list of workspaces with optional filtering',
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
  handler: (args: any) => {
    const { ...body } = args;
    return client.v1.workspaces.list(body);
  },
});

registerApiMethod({
  name: 'create_workspaces_v1_invitations',
  description: 'Creates a new invitation for a user to join a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to invite',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the invited user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
  handler: (args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.invitations.create(workspaceId, body);
  },
});

registerApiMethod({
  name: 'list_workspaces_v1_invitations',
  description: 'Retrieves a paginated list of invitations for a specific workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
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
    },
  },
  handler: (args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.invitations.list(workspaceId, body);
  },
});

registerApiMethod({
  name: 'create_workspaces_v1_memberships',
  description: 'Adds a user to a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Email address of the user to add',
      },
      role: {
        type: 'string',
        description: 'Role to assign to the user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
  handler: (args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.memberships.create(workspaceId, body);
  },
});

registerApiMethod({
  name: 'list_workspaces_v1_memberships',
  description: 'Retrieves a paginated list of members for a specific workspace',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
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
    },
  },
  handler: (args: any) => {
    const { workspaceId, ...body } = args;
    return client.v1.workspaces.memberships.list(workspaceId, body);
  },
});

registerApiMethod({
  name: 'create_v1_zapier_subscriptions',
  description: 'Creates a new webhook subscription for receiving Zapier notifications',
  inputSchema: {
    type: 'object',
    properties: {
      targetUrl: {
        type: 'string',
        description: 'URL that will receive webhook notifications',
      },
      triggerKey: {
        type: 'string',
        description: 'Key that identifies the type of trigger for this subscription',
      },
      formTemplateSlug: {
        type: 'string',
        description: 'Slug of the form template to subscribe to, can be null or undefined',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.v1.zapierSubscriptions.create(body);
  },
});

registerApiMethod({
  name: 'delete_v1_zapier_subscriptions',
  description: 'Removes an existing Zapier webhook subscription',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionId: {
        type: 'string',
        description: 'ID of the subscription to delete',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.v1.zapierSubscriptions.delete(body);
  },
});

registerApiMethod({
  name: 'retrieve_v1_site_invitations',
  description: 'Retrieves details of a specific site invitation',
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { invitationId } = args;
    return client.v1.siteInvitations.retrieve(invitationId);
  },
});

registerApiMethod({
  name: 'delete_v1_site_invitations',
  description: 'Deletes an existing site invitation',
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { invitationId } = args;
    return client.v1.siteInvitations.delete(invitationId);
  },
});

registerApiMethod({
  name: 'retrieve_v1_site_memberships',
  description: 'Retrieves details of a specific site membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { membershipId } = args;
    return client.v1.siteMemberships.retrieve(membershipId);
  },
});

registerApiMethod({
  name: 'update_v1_site_memberships',
  description: 'Updates the role of an existing site membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'New role to assign to the user',
        enum: ['OWNER', 'EDITOR', 'VIEWER'],
      },
    },
  },
  handler: (args: any) => {
    const { membershipId, ...body } = args;
    return client.v1.siteMemberships.update(membershipId, body);
  },
});

registerApiMethod({
  name: 'delete_v1_site_memberships',
  description: 'Removes a user from a site',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { membershipId } = args;
    return client.v1.siteMemberships.delete(membershipId);
  },
});

registerApiMethod({
  name: 'retrieve_v1_invitations',
  description: 'Retrieves details of a specific workspace invitation',
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { invitationId } = args;
    return client.v1.invitations.retrieve(invitationId);
  },
});

registerApiMethod({
  name: 'delete_v1_invitations',
  description: 'Deletes an existing workspace invitation',
  inputSchema: {
    type: 'object',
    properties: {
      invitationId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { invitationId } = args;
    return client.v1.invitations.delete(invitationId);
  },
});

registerApiMethod({
  name: 'retrieve_v1_workspace_memberships',
  description: 'Retrieves details of a specific workspace membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { membershipId } = args;
    return client.v1.workspaceMemberships.retrieve(membershipId);
  },
});

registerApiMethod({
  name: 'update_v1_workspace_memberships',
  description: 'Updates the role of an existing workspace membership',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
      role: {
        type: 'string',
        description: 'New role to assign to the user',
        enum: ['OWNER', 'MEMBER'],
      },
    },
  },
  handler: (args: any) => {
    const { membershipId, ...body } = args;
    return client.v1.workspaceMemberships.update(membershipId, body);
  },
});

registerApiMethod({
  name: 'delete_v1_workspace_memberships',
  description: 'Removes a user from a workspace',
  inputSchema: {
    type: 'object',
    properties: {
      membershipId: {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { membershipId } = args;
    return client.v1.workspaceMemberships.delete(membershipId);
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools,
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  const handler = handlers[name];
  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  const result = await handler(args);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

function registerApiMethod({
  name,
  description,
  inputSchema,
  handler,
}: {
  name: string;
  description: string;
  inputSchema: Tool['inputSchema'];
  handler: Function;
}) {
  tools.push({ name, description, inputSchema });
  handlers[name] = handler;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

console.error('running main');
main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
