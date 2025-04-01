// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
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
};

export const handler = (client: Fingertip, args: any) => {
  const { pageId, ...body } = args;
  return client.v1.pages.update(pageId, body);
};

export default { tool, handler };
