// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/messages',
  operationId: 'createMessage',
};

export const tool: Tool = {
  name: 'create_messages',
  description: 'Sends a message as the site owner to a site contact',
  inputSchema: {
    type: 'object',
    properties: {
      content: {
        type: 'string',
        description: 'Plain text content of the message',
      },
      siteContactId: {
        type: 'string',
        description: 'ID of the site contact recipient',
      },
      siteSlug: {
        type: 'string',
        description: 'Slug of the site',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.messages.create(body));
};

export default { metadata, tool, handler };
