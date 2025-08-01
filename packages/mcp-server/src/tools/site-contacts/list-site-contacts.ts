// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'site_contacts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/site-contacts',
  operationId: 'getSiteContacts',
};

export const tool: Tool = {
  name: 'list_site_contacts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves site contacts with basic contact information\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Site contacts list with pagination',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          appointmentsCount: {\n            type: 'number'\n          },\n          currency: {\n            type: 'string'\n          },\n          formResponsesCount: {\n            type: 'number'\n          },\n          invoicesCount: {\n            type: 'number'\n          },\n          ordersCount: {\n            type: 'number'\n          },\n          paymentAmountInCents: {\n            type: 'number'\n          },\n          paymentsCount: {\n            type: 'number'\n          },\n          quotesCount: {\n            type: 'number'\n          },\n          siteContact: {\n            type: 'object',\n            description: 'Schema for a site contact entity',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the site contact'\n              },\n              businessName: {\n                type: 'string',\n                description: 'Business name associated with the contact, can be null'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Timestamp when the contact was created'\n              },\n              currency: {\n                type: 'string',\n                description: 'Preferred currency of the contact, can be null'\n              },\n              email: {\n                type: 'string',\n                description: 'Email address of the contact, can be null'\n              },\n              firstName: {\n                type: 'string',\n                description: 'First name of the contact, can be null'\n              },\n              jobTitle: {\n                type: 'string',\n                description: 'Job title of the contact, can be null'\n              },\n              language: {\n                type: 'string',\n                description: 'Preferred language of the contact, can be null'\n              },\n              lastName: {\n                type: 'string',\n                description: 'Last name of the contact, can be null'\n              },\n              marketingStatus: {\n                type: 'string',\n                description: 'Marketing consent status of the contact',\n                enum: [                  'SUBSCRIBED',\n                  'UNSUBSCRIBED',\n                  'CLEANED',\n                  'PENDING',\n                  'TRANSACTIONAL',\n                  'ARCHIVED'\n                ]\n              },\n              name: {\n                type: 'string',\n                description: 'Full name of the contact, can be null'\n              },\n              phone: {\n                type: 'string',\n                description: 'Phone number of the contact, can be null'\n              },\n              siteId: {\n                type: 'string',\n                description: 'ID of the site this contact is associated with'\n              },\n              source: {\n                type: 'string',\n                description: 'Source of the contact (e.g., form, import), can be null'\n              },\n              subscribedAt: {\n                type: 'string',\n                description: 'Timestamp when the contact subscribed, can be null'\n              },\n              timeZone: {\n                type: 'string',\n                description: 'Preferred time zone of the contact, can be null'\n              },\n              unsubscribedAt: {\n                type: 'string',\n                description: 'Timestamp when the contact unsubscribed, can be null'\n              },\n              unsubscribeReason: {\n                type: 'string',\n                description: 'Reason provided for unsubscribing, can be null'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Timestamp when the contact was last updated'\n              },\n              userId: {\n                type: 'string',\n                description: 'User ID associated with the contact, can be null'\n              }\n            },\n            required: [              'id',\n              'businessName',\n              'createdAt',\n              'currency',\n              'email',\n              'firstName',\n              'jobTitle',\n              'language',\n              'lastName',\n              'marketingStatus',\n              'name',\n              'phone',\n              'siteId',\n              'source',\n              'subscribedAt',\n              'timeZone',\n              'unsubscribedAt',\n              'unsubscribeReason',\n              'updatedAt',\n              'userId'\n            ]\n          },\n          tags: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                name: {\n                  type: 'string'\n                }\n              },\n              required: [                'id',\n                'name'\n              ]\n            }\n          },\n          rating: {\n            type: 'number'\n          }\n        },\n        required: [          'appointmentsCount',\n          'currency',\n          'formResponsesCount',\n          'invoicesCount',\n          'ordersCount',\n          'paymentAmountInCents',\n          'paymentsCount',\n          'quotesCount',\n          'siteContact',\n          'tags'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      properties: {\n        endCursor: {\n          type: 'string'\n        },\n        hasNextPage: {\n          type: 'boolean'\n        }\n      },\n      required: [        'endCursor',\n        'hasNextPage'\n      ]\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'Site ID to filter contacts',
      },
      createdAfter: {
        type: 'string',
        description: 'Filter contacts created after date',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      hasAppointments: {
        type: 'boolean',
        description: 'Filter contacts with appointments',
      },
      hasFormResponses: {
        type: 'boolean',
        description: 'Filter contacts with form responses',
      },
      hasInvoices: {
        type: 'boolean',
        description: 'Filter contacts with invoices',
      },
      hasOrders: {
        type: 'boolean',
        description: 'Filter contacts with orders',
      },
      hasPayments: {
        type: 'boolean',
        description: 'Filter contacts with payments',
      },
      hasQuotes: {
        type: 'boolean',
        description: 'Filter contacts with quotes',
      },
      hasRatings: {
        type: 'boolean',
        description: 'Filter contacts with ratings',
      },
      hasSegmentation: {
        type: 'boolean',
        description: 'Enable segmentation filters',
      },
      marketingStatuses: {
        type: 'array',
        description: 'Filter by marketing status',
        items: {
          type: 'string',
          enum: ['SUBSCRIBED', 'UNSUBSCRIBED', 'CLEANED', 'PENDING', 'TRANSACTIONAL', 'ARCHIVED'],
        },
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term for contacts',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['siteId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.siteContacts.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
