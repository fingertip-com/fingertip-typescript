// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Retrieves site contacts with basic contact information',
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
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.siteContacts.list(body));
};

export default { metadata, tool, handler };
