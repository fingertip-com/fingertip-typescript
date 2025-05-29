// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.sites',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/sites/{siteId}',
  operationId: 'updateSite',
};

export const tool: Tool = {
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

export const handler = (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return client.v1.sites.update(siteId, body);
};

export default { metadata, tool, handler };
