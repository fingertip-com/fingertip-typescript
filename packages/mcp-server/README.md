# Fingertip TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export FINGERTIP_API_KEY="My API Key"
npx -y fingertip-mcp@latest
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
      "args": ["-y", "fingertip-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "FINGERTIP_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "fingertip-mcp/server";

// import a specific tool
import createSites from "fingertip-mcp/tools/sites/create-sites";

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
init({ server: myServer, endpoints: [createSites, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `sites`:

- `create_sites` (`write`): Creates a new site with associated pages, themes, and blocks
- `retrieve_sites` (`read`): Retrieves a specific site and its related data by site ID
- `update_sites` (`write`): Updates an existing site with provided partial data
- `list_sites` (`read`): Retrieves a paginated list of sites with optional filtering
- `retrieve_analytics_sites` (`read`): Retrieves comprehensive analytics data including views, clicks, traffic sources, geographic data, and store metrics for the specified site

### Resource `sites.pages`:

- `create_sites_pages` (`write`): Creates a new page within a site with the provided content.
- `list_sites_pages` (`read`): Retrieves a paginated list of pages for a specific site.

### Resource `pages`:

- `retrieve_pages` (`read`): Retrieves a specific page by ID.
- `update_pages` (`write`): Updates an existing page with the provided data.

### Resource `pages.blocks`:

- `create_pages_blocks` (`write`): Creates a new block within the specified page. Returns the created block or validation errors.
- `list_pages_blocks` (`read`): Retrieves all blocks associated with the specified page ID

### Resource `pages.theme`:

- `retrieve_pages_theme` (`read`): Retrieves the theme associated with a specific page
- `patch_pages_theme` (`write`): Applies JSON Patch operations to the theme content field
- `upsert_pages_theme` (`write`): Creates or updates the theme for a specific page

### Resource `blocks`:

- `retrieve_blocks` (`read`): Retrieves a specific block by its ID. Returns 404 if the block is not found.
- `update_blocks` (`write`): Updates an existing block with the provided data. Allows partial updates. Returns 404 if the block is not found.
- `delete_blocks` (`write`): Permanently deletes a block. Returns a success status or 404 if the block is not found.

### Resource `blog_posts`:

- `retrieve_blog_posts` (`read`): Retrieves a specific published blog post by ID
- `list_blog_posts` (`read`): Retrieves a paginated list of published blog posts for a specific site

### Resource `bookings`:

- `list_bookings` (`read`): Retrieves a paginated list of bookings for a site with optional status filtering
- `accept_bookings` (`write`): Accepts a pending booking request and confirms the booking
- `cancel_bookings` (`write`): Cancels an existing booking as a host
- `complete_bookings` (`write`): Marks a booking as completed or no-show
- `decline_bookings` (`write`): Declines a pending booking request
- `list_requests_bookings` (`read`): Retrieves a paginated list of pending booking requests for a site
- `reschedule_bookings` (`write`): Changes the start and end time of an existing booking

### Resource `event_types`:

- `retrieve_event_types` (`read`): Retrieves a specific published event type by ID
- `list_event_types` (`read`): Retrieves a paginated list of published event types for a specific site

### Resource `form_responses`:

- `list_form_responses` (`read`): Retrieves form responses for a specific form template and site.

### Resource `form_templates`:

- `retrieve_form_templates` (`read`): Retrieves a specific form template with its fields and theme
- `list_form_templates` (`read`): Retrieves a paginated list of form templates for a specific site

### Resource `invoices`:

- `create_invoices` (`write`): Creates a new store invoice
- `update_invoices` (`write`): Updates a store invoice
- `list_invoices` (`read`): Retrieves a paginated list of invoices for sites the user has access to
- `delete_invoices` (`write`): Deletes a draft store invoice
- `mark_paid_invoices` (`write`): Marks a store invoice as paid
- `send_invoices` (`write`): Sends a draft store invoice
- `void_invoices` (`write`): Voids a store invoice

### Resource `orders`:

- `list_orders` (`read`): Retrieves orders with basic information

### Resource `site_contacts`:

- `create_site_contacts` (`write`): Creates a new contact associated with a site including marketing preferences
- `list_site_contacts` (`read`): Retrieves site contacts with basic contact information

### Resource `site_invitations`:

- `retrieve_site_invitations` (`read`): Retrieves details of a specific site invitation

### Resource `site_memberships`:

- `retrieve_site_memberships` (`read`): Retrieves details of a specific site membership
- `list_site_memberships` (`read`): Retrieves a paginated list of members for a specific site

### Resource `invoice_items`:

- `create_invoice_items` (`write`): Creates a new invoice item
- `retrieve_invoice_items` (`read`): Retrieves a invoice item by ID
- `update_invoice_items` (`write`): Updates a invoice item
- `list_invoice_items` (`read`): Retrieves a paginated list of invoice items

### Resource `messages`:

- `create_messages` (`write`): Sends a message as the site owner to a site contact
- `list_messages` (`read`): Retrieves messages for a site contact or all site owner messages

### Resource `quotes`:

- `create_quotes` (`write`): Creates a new store quote
- `retrieve_quotes` (`read`): Retrieves a single store quote by ID
- `update_quotes` (`write`): Updates a store quote
- `list_quotes` (`read`): Retrieves a paginated list of quotes for sites the user has access to
- `delete_quotes` (`write`): Deletes a store quote
- `send_quotes` (`write`): Sends a draft store quote
