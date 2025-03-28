// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
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
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.siteContacts.create(body);
  },
});

registerApiMethod({
  name: 'sample_v1_site_contacts',
  description: 'Retrieves a sample of site contacts with basic contact information',
  inputSchema: {
    type: 'object',
    properties: {},
  },
  handler: (client: Fingertip, args: any) => {
    const {} = args;
    return client.v1.siteContacts.sample();
  },
});
