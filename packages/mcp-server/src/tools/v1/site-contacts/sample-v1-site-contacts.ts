// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_contacts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/site-contacts/sample',
  operationId: 'getSiteContactsSample',
};

export const tool: Tool = {
  name: 'sample_v1_site_contacts',
  description: 'Retrieves a sample of site contacts with basic contact information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.v1.siteContacts.sample()) as object);
};

export default { metadata, tool, handler };
