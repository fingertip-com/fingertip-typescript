// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { tools, handlers } from './tools';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import './resources/v1/v1';
import './resources/v1/pages/pages';
import './resources/v1/pages/blocks';
import './resources/v1/pages/theme';
import './resources/v1/blocks';
import './resources/v1/sites/sites';
import './resources/v1/sites/pages';
import './resources/v1/sites/invitations';
import './resources/v1/sites/memberships';
import './resources/v1/site-contacts';
import './resources/v1/workspaces/workspaces';
import './resources/v1/workspaces/invitations';
import './resources/v1/workspaces/memberships';
import './resources/v1/zapier-subscriptions';
import './resources/v1/site-invitations';
import './resources/v1/site-memberships';
import './resources/v1/invitations';
import './resources/v1/workspace-memberships';
import Fingertip from 'fingertip';
export { tools, handlers } from './tools';

// Instantiate client
const client = new Fingertip();

// Create server instance
export const server = new Server(
  {
    name: 'fingertip_api',
    version: '0.16.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

export function initServer() {
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools,
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    const handler = handlers[name];
    if (!handler) {
      throw new Error(`Unknown tool: ${name}`);
    }

    const result = await handler(client, args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  });
}

async function main() {
  initServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}
