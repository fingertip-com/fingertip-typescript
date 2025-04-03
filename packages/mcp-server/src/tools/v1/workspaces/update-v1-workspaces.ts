// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspaces',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v1_workspaces',
  description: 'Updates an existing workspace with provided partial data',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the workspace',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { workspaceId, ...body } = args;
  return client.v1.workspaces.update(workspaceId, body);
};

export default { metadata, tool, handler };
