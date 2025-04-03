// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.site_contacts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: Fingertip, args: any) => {
  const { ...body } = args;
  return client.v1.siteContacts.create(body);
};

export default { metadata, tool, handler };
