// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_contacts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'sample_v1_site_contacts',
  description: 'Retrieves a sample of site contacts with basic contact information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Fingertip, args: any) => {
  const {} = args;
  return client.v1.siteContacts.sample();
};

export default { metadata, tool, handler };
