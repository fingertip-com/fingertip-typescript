// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'v1.workspaces',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v1_workspaces',
  description: 'Retrieves a specific workspace and its related data by workspace ID',
  inputSchema: {
    type: 'object',
    properties: {
      workspaceId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fingertip, args: any) => {
  const { workspaceId } = args;
  return client.v1.workspaces.retrieve(workspaceId);
};

export default { metadata, tool, handler };
