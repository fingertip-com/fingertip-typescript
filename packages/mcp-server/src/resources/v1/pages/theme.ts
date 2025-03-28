// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Fingertip from 'fingertip';

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
  handler: (client: Fingertip, args: any) => {
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
  handler: (client: Fingertip, args: any) => {
    const { pageId, ...body } = args;
    return client.v1.pages.theme.update(pageId, body);
  },
});
