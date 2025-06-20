// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'form_templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/form-templates/{formTemplateId}',
  operationId: 'getFormTemplate',
};

export const tool: Tool = {
  name: 'retrieve_form_templates',
  description: 'Retrieves a specific form template with its fields and theme',
  inputSchema: {
    type: 'object',
    properties: {
      formTemplateId: {
        type: 'string',
      },
      siteId: {
        type: 'string',
        description: 'ID of the site that owns the form template',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { formTemplateId, ...body } = args as any;
  return asTextContentResult(await client.formTemplates.retrieve(formTemplateId, body));
};

export default { metadata, tool, handler };
