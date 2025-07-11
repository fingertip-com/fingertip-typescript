// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'event_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/event-types',
  operationId: 'getEventTypes',
};

export const tool: Tool = {
  name: 'list_event_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of published event types for a specific site\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful event types listing response',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of event types in the current page',\n      items: {\n        type: 'object',\n        description: 'Schema for an event type',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the event type'\n          },\n          attendanceType: {\n            type: 'string',\n            description: 'Type of attendance',\n            enum: [              'MEETING',\n              'GROUP',\n              'EVENT'\n            ]\n          },\n          color: {\n            type: 'string',\n            description: 'Event type color'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Date and time when the event type was created',\n            format: 'date-time'\n          },\n          currency: {\n            type: 'string',\n            description: 'Currency code'\n          },\n          description: {\n            type: 'string',\n            description: 'Description of the event type'\n          },\n          hidden: {\n            type: 'boolean',\n            description: 'Whether the event type is hidden'\n          },\n          length: {\n            type: 'number',\n            description: 'Duration of the event in minutes'\n          },\n          locations: {\n            type: 'array',\n            description: 'Available locations for the event',\n            items: {\n              type: 'object'\n            }\n          },\n          maxAttendees: {\n            type: 'number',\n            description: 'Maximum number of attendees'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the event type'\n          },\n          priceInCents: {\n            type: 'number',\n            description: 'Price in cents'\n          },\n          requiresConfirmation: {\n            type: 'boolean',\n            description: 'Whether booking requires confirmation'\n          },\n          siteId: {\n            type: 'string',\n            description: 'ID of the site this event type belongs to'\n          },\n          slug: {\n            type: 'string',\n            description: 'URL-friendly identifier for the event type'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Date and time when the event type was last updated',\n            format: 'date-time'\n          },\n          media: {\n            type: 'object',\n            description: 'Event type media'\n          },\n          metadata: {\n            type: 'object',\n            description: 'Additional metadata'\n          }\n        },\n        required: [          'id',\n          'attendanceType',\n          'color',\n          'createdAt',\n          'currency',\n          'description',\n          'hidden',\n          'length',\n          'locations',\n          'maxAttendees',\n          'name',\n          'priceInCents',\n          'requiresConfirmation',\n          'siteId',\n          'slug',\n          'updatedAt'\n        ]\n      }\n    },\n    pageInfo: {\n      type: 'object',\n      description: 'Pagination information',\n      properties: {\n        hasNextPage: {\n          type: 'boolean',\n          description: 'Indicates if there are more pages after the current one'\n        },\n        hasPreviousPage: {\n          type: 'boolean',\n          description: 'Indicates if there are previous pages before the current one'\n        },\n        endCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the last item in the current page, if available'\n        },\n        startCursor: {\n          type: 'string',\n          description: 'Cursor pointing to the first item in the current page, if available'\n        }\n      },\n      required: [        'hasNextPage',\n        'hasPreviousPage'\n      ]\n    },\n    total: {\n      type: 'number',\n      description: 'Total number of published event types'\n    }\n  },\n  required: [    'items',\n    'pageInfo',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
        description: 'ID of the site to retrieve event types for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by (default: updatedAt)',
        enum: ['createdAt', 'updatedAt', 'position'],
      },
      sortDirection: {
        type: 'string',
        description: 'Sort direction (default: desc)',
        enum: ['asc', 'desc'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.eventTypes.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
