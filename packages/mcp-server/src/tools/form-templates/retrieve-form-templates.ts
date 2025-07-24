// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a specific form template with its fields and theme\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful form template retrieval response',\n  properties: {\n    formTemplate: {\n      type: 'object',\n      description: 'The requested form template',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the form template'\n        },\n        buttonText: {\n          type: 'string',\n          description: 'Submit button text'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the form was created',\n          format: 'date-time'\n        },\n        customRecipients: {\n          type: 'array',\n          description: 'Custom email recipients',\n          items: {\n            type: 'string'\n          }\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the form template'\n        },\n        formFields: {\n          type: 'array',\n          description: 'Form fields',\n          items: {\n            type: 'object',\n            description: 'Form field definition',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Form field ID'\n              },\n              position: {\n                type: 'number',\n                description: 'Field position in the form'\n              },\n              content: {\n                type: 'object',\n                description: 'Field configuration and properties'\n              }\n            },\n            required: [              'id',\n              'position'\n            ]\n          }\n        },\n        formTheme: {\n          type: 'object',\n          description: 'Form theme',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Form theme ID'\n            },\n            name: {\n              type: 'string',\n              description: 'Theme name'\n            },\n            config: {\n              type: 'object',\n              description: 'Theme configuration'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        formThemeId: {\n          type: 'string',\n          description: 'ID of the form theme'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this form belongs to'\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly identifier for the form template'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the form template',\n          enum: [            'ENABLED',\n            'PLACEHOLDER'\n          ]\n        },\n        thankYouMessage: {\n          type: 'string',\n          description: 'Thank you message after submission'\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the form template'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the form was last updated',\n          format: 'date-time'\n        },\n        useCustomRecipients: {\n          type: 'boolean',\n          description: 'Whether to use custom recipients'\n        },\n        bannerMedia: {\n          type: 'object',\n          description: 'Banner media for the form'\n        },\n        responseCount: {\n          type: 'number',\n          description: 'Number of responses received'\n        }\n      },\n      required: [        'id',\n        'buttonText',\n        'createdAt',\n        'customRecipients',\n        'description',\n        'formFields',\n        'formTheme',\n        'formThemeId',\n        'siteId',\n        'slug',\n        'status',\n        'thankYouMessage',\n        'title',\n        'updatedAt',\n        'useCustomRecipients'\n      ]\n    }\n  },\n  required: [    'formTemplate'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['formTemplateId', 'siteId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { formTemplateId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.formTemplates.retrieve(formTemplateId, body)),
  );
};

export default { metadata, tool, handler };
