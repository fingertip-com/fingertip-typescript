// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

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
  handler: (client: Fingertip, args: any) => {
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
  handler: (client: Fingertip, args: any) => {
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
  handler: (client: Fingertip, args: any) => {
    const { pageId } = args;
    return client.v1.pages.delete(pageId);
  },
});
