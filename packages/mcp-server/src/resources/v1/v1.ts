// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'get_form_responses_sample_v1',
  description: 'Retrieves a sample of form responses for a specific form template.',
  inputSchema: {
    type: 'object',
    properties: {
      form_template_slug: {
        type: 'string',
        description: 'Slug of the form template to retrieve responses for',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.getFormResponsesSample(body);
  },
});

registerApiMethod({
  name: 'list_bookings_v1',
  description: 'Retrieves a paginated list of bookings for a site with optional status filtering',
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'Site ID to fetch bookings for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 25, max: 100)',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt'],
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction (default: desc)',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        description: 'Filter by booking status',
        enum: [
          'CANCELLED',
          'ACCEPTED',
          'REJECTED',
          'PENDING',
          'COMPLETED',
          'NO_SHOW',
          'REFUNDED',
          'PENDING_CONFIRMATION',
        ],
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.listBookings(body);
  },
});

registerApiMethod({
  name: 'ping_v1',
  description: 'Simple health check endpoint to verify the API is running. Requires authentication.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
  handler: (client: Fingertip, args: any) => {
    const {} = args;
    return client.v1.ping();
  },
});
