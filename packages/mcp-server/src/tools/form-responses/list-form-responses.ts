// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'form_responses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/form-responses',
  operationId: 'getFormResponses',
};

export const tool: Tool = {
  name: 'list_form_responses',
  description: 'Retrieves form responses for a specific form template and site.',
  inputSchema: {
    type: 'object',
    properties: {
      form_template_id: {
        type: 'string',
        description: 'ID of the form template to retrieve responses for',
      },
      site_id: {
        type: 'string',
        description: 'ID of the site to retrieve responses for',
      },
      cursor: {
        type: 'string',
        description: 'Pagination cursor',
      },
      pageSize: {
        type: 'number',
        description: 'Number of items per page (default: 10, max: 25)',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.formResponses.list(body)) as object);
};

export default { metadata, tool, handler };
