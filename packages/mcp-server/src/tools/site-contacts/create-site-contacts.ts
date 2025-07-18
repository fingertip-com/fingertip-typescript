// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'site_contacts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/site-contacts',
  operationId: 'createSiteContact',
};

export const tool: Tool = {
  name: 'create_site_contacts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new contact associated with a site including marketing preferences\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful site contact creation response',\n  properties: {\n    siteContact: {\n      type: 'object',\n      description: 'The newly created site contact',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the site contact'\n        },\n        businessName: {\n          type: 'string',\n          description: 'Business name associated with the contact, can be null'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Timestamp when the contact was created'\n        },\n        currency: {\n          type: 'string',\n          description: 'Preferred currency of the contact, can be null'\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the contact, can be null'\n        },\n        firstName: {\n          type: 'string',\n          description: 'First name of the contact, can be null'\n        },\n        jobTitle: {\n          type: 'string',\n          description: 'Job title of the contact, can be null'\n        },\n        language: {\n          type: 'string',\n          description: 'Preferred language of the contact, can be null'\n        },\n        lastName: {\n          type: 'string',\n          description: 'Last name of the contact, can be null'\n        },\n        marketingStatus: {\n          type: 'string',\n          description: 'Marketing consent status of the contact',\n          enum: [            'SUBSCRIBED',\n            'UNSUBSCRIBED',\n            'CLEANED',\n            'PENDING',\n            'TRANSACTIONAL',\n            'ARCHIVED'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Full name of the contact, can be null'\n        },\n        phone: {\n          type: 'string',\n          description: 'Phone number of the contact, can be null'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this contact is associated with'\n        },\n        source: {\n          type: 'string',\n          description: 'Source of the contact (e.g., form, import), can be null'\n        },\n        subscribedAt: {\n          type: 'string',\n          description: 'Timestamp when the contact subscribed, can be null'\n        },\n        timeZone: {\n          type: 'string',\n          description: 'Preferred time zone of the contact, can be null'\n        },\n        unsubscribedAt: {\n          type: 'string',\n          description: 'Timestamp when the contact unsubscribed, can be null'\n        },\n        unsubscribeReason: {\n          type: 'string',\n          description: 'Reason provided for unsubscribing, can be null'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Timestamp when the contact was last updated'\n        },\n        userId: {\n          type: 'string',\n          description: 'User ID associated with the contact, can be null'\n        }\n      },\n      required: [        'id',\n        'businessName',\n        'createdAt',\n        'currency',\n        'email',\n        'firstName',\n        'jobTitle',\n        'language',\n        'lastName',\n        'marketingStatus',\n        'name',\n        'phone',\n        'siteId',\n        'source',\n        'subscribedAt',\n        'timeZone',\n        'unsubscribedAt',\n        'unsubscribeReason',\n        'updatedAt',\n        'userId'\n      ]\n    }\n  },\n  required: [    'siteContact'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Email address of the contact',
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
      marketingStatus: {
        type: 'string',
        description: 'Marketing consent status of the contact',
        enum: ['SUBSCRIBED', 'UNSUBSCRIBED', 'CLEANED', 'PENDING', 'TRANSACTIONAL', 'ARCHIVED'],
      },
      notes: {
        type: 'string',
        description: 'Additional notes about the contact',
      },
      phone: {
        type: 'string',
        description: 'Phone number of the contact',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email', 'siteId'],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.siteContacts.create(body)));
};

export default { metadata, tool, handler };
