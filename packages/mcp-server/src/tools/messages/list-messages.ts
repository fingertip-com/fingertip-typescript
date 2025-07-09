// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/messages',
  operationId: 'getMessages',
};

export const tool: Tool = {
  name: 'list_messages',
  description: 'Retrieves messages for a site contact or all site owner messages',
  inputSchema: {
    type: 'object',
    properties: {
      siteSlug: {
        type: 'string',
        description: 'Site slug to filter messages',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      siteContactId: {
        type: 'string',
        description: 'Site contact ID to filter messages for specific contact',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.messages.list(body));
};

export default { metadata, tool, handler };
