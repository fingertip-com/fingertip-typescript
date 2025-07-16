// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'bookings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bookings/{bookingId}/reschedule',
  operationId: 'rescheduleBooking',
};

export const tool: Tool = {
  name: 'reschedule_bookings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChanges the start and end time of an existing booking\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'boolean',\n      description: 'Whether the operation was successful'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bookingId: {
        type: 'string',
      },
      endTime: {
        type: 'string',
        description: 'New end time for the booking',
        format: 'date-time',
      },
      startTime: {
        type: 'string',
        description: 'New start time for the booking',
        format: 'date-time',
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
  const { bookingId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.bookings.reschedule(bookingId, body)));
};

export default { metadata, tool, handler };
