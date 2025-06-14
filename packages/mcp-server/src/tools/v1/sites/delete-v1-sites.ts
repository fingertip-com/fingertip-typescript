// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.sites',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/sites/{siteId}',
  operationId: 'deleteSite',
};

export const tool: Tool = {
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
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return asTextContentResult(await client.v1.sites.delete(siteId));
};

export default { metadata, tool, handler };
