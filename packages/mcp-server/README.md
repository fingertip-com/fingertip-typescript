# Fingertip TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export FINGERTIP_API_KEY="My API Key"
npx -y fingertip-mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "fingertip_api": {
      "command": "npx",
      "args": ["-y", "fingertip-mcp"],
      "env": {
        "FINGERTIP_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "fingertip-mcp/server";

// import a specific tool
import getFormResponsesSampleV1 from "fingertip-mcp/tools/v1/get-form-responses-sample-v1";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [getFormResponsesSampleV1, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `v1`:

- `get_form_responses_sample_v1` (`read`): Retrieves a sample of form responses for a specific form template.
- `list_bookings_v1` (`read`): Retrieves a paginated list of bookings for a site with optional status filtering
- `ping_v1` (`read`): Simple health check endpoint to verify the API is running. Requires authentication.
- `retrieve_sample_bookings_v1` (`read`): Retrieves a sample of bookings with basic information

### Resource `v1.pages`:

- `retrieve_v1_pages` (`read`): Retrieves a specific page by ID including all related blocks and theme information.
- `update_v1_pages` (`write`): Updates an existing page with the provided data.
- `delete_v1_pages` (`write`): Permanently deletes a page and all associated data.

### Resource `v1.pages.blocks`:

- `create_pages_v1_blocks` (`write`): Creates a new block within the specified page. Returns the created block or validation errors.
- `list_pages_v1_blocks` (`read`): Retrieves all blocks associated with the specified page ID

### Resource `v1.pages.theme`:

- `retrieve_pages_v1_theme` (`read`): Retrieves the theme associated with a specific page
- `update_pages_v1_theme` (`write`): Creates or updates the theme for a specific page

### Resource `v1.blocks`:

- `retrieve_v1_blocks` (`read`): Retrieves a specific block by its ID. Returns 404 if the block is not found.
- `update_v1_blocks` (`write`): Updates an existing block with the provided data. Allows partial updates. Returns 404 if the block is not found.
- `delete_v1_blocks` (`write`): Permanently deletes a block. Returns a success status or 404 if the block is not found.

### Resource `v1.sites`:

- `create_v1_sites` (`write`): Creates a new site with associated pages, themes, and blocks
- `retrieve_v1_sites` (`read`): Retrieves a specific site and its related data by site ID
- `update_v1_sites` (`write`): Updates an existing site with provided partial data
- `list_v1_sites` (`read`): Retrieves a paginated list of sites with optional filtering
- `delete_v1_sites` (`write`): Permanently deletes a site by its ID

### Resource `v1.sites.pages`:

- `create_sites_v1_pages` (`write`): Creates a new page within a site with the provided content.
- `list_sites_v1_pages` (`read`): Retrieves a paginated list of pages for a specific site.

### Resource `v1.sites.invitations`:

- `create_sites_v1_invitations` (`write`): Creates a new invitation for a user to join a site
- `list_sites_v1_invitations` (`read`): Retrieves a paginated list of invitations for a specific site

### Resource `v1.sites.memberships`:

- `create_sites_v1_memberships` (`write`): Adds a user to a site
- `list_sites_v1_memberships` (`read`): Retrieves a paginated list of members for a specific site

### Resource `v1.site_contacts`:

- `create_v1_site_contacts` (`write`): Creates a new contact associated with a site including marketing preferences
- `sample_v1_site_contacts` (`read`): Retrieves a sample of site contacts with basic contact information

### Resource `v1.workspaces`:

- `retrieve_v1_workspaces` (`read`): Retrieves a specific workspace and its related data by workspace ID
- `update_v1_workspaces` (`write`): Updates an existing workspace with provided partial data
- `list_v1_workspaces` (`read`): Retrieves a paginated list of workspaces with optional filtering

### Resource `v1.workspaces.invitations`:

- `create_workspaces_v1_invitations` (`write`): Creates a new invitation for a user to join a workspace
- `list_workspaces_v1_invitations` (`read`): Retrieves a paginated list of invitations for a specific workspace

### Resource `v1.workspaces.memberships`:

- `create_workspaces_v1_memberships` (`write`): Adds a user to a workspace
- `list_workspaces_v1_memberships` (`read`): Retrieves a paginated list of members for a specific workspace

### Resource `v1.workspaces.orders`:

- `sample_workspaces_v1_orders` (`read`): Retrieves a sample of orders with basic information

### Resource `v1.zapier_subscriptions`:

- `create_v1_zapier_subscriptions` (`write`): Creates a new webhook subscription for receiving Zapier notifications
- `delete_v1_zapier_subscriptions` (`write`): Removes an existing Zapier webhook subscription

### Resource `v1.site_invitations`:

- `retrieve_v1_site_invitations` (`read`): Retrieves details of a specific site invitation
- `delete_v1_site_invitations` (`write`): Deletes an existing site invitation

### Resource `v1.site_memberships`:

- `retrieve_v1_site_memberships` (`read`): Retrieves details of a specific site membership
- `update_v1_site_memberships` (`write`): Updates the role of an existing site membership
- `delete_v1_site_memberships` (`write`): Removes a user from a site

### Resource `v1.invitations`:

- `retrieve_v1_invitations` (`read`): Retrieves details of a specific workspace invitation
- `delete_v1_invitations` (`write`): Deletes an existing workspace invitation

### Resource `v1.workspace_memberships`:

- `retrieve_v1_workspace_memberships` (`read`): Retrieves details of a specific workspace membership
- `update_v1_workspace_memberships` (`write`): Updates the role of an existing workspace membership
- `delete_v1_workspace_memberships` (`write`): Removes a user from a workspace
