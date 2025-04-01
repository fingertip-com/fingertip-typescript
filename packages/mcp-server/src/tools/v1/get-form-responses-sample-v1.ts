// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const tool: Tool = {
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
};

export const handler = (client: Fingertip, args: any) => {
  const { ...body } = args;
  return client.v1.getFormResponsesSample(body);
};

export default { tool, handler };
