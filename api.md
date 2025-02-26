# API

## V1

Types:

- <code><a href="./src/resources/api/v1/v1.ts">V1GetFormResponsesSampleResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListBookingsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1Ping2Response</a></code>

Methods:

- <code title="get /api/v1/form-responses/sample">client.api.v1.<a href="./src/resources/api/v1/v1.ts">getFormResponsesSample</a>({ ...params }) -> V1GetFormResponsesSampleResponse</code>
- <code title="get /api/v1/bookings">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listBookings</a>({ ...params }) -> V1ListBookingsResponsesMyCursorPage</code>
- <code title="get /api/v1/ping">client.api.v1.<a href="./src/resources/api/v1/v1.ts">ping2</a>() -> V1Ping2Response</code>

### Pages

Types:

- <code><a href="./src/resources/api/v1/pages/pages.ts">PageRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/pages/pages.ts">PageUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/pages/pages.ts">PageDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/pages/{pageId}">client.api.v1.pages.<a href="./src/resources/api/v1/pages/pages.ts">retrieve</a>(pageID) -> PageRetrieveResponse</code>
- <code title="patch /api/v1/pages/{pageId}">client.api.v1.pages.<a href="./src/resources/api/v1/pages/pages.ts">update</a>(pageID, { ...params }) -> PageUpdateResponse</code>
- <code title="delete /api/v1/pages/{pageId}">client.api.v1.pages.<a href="./src/resources/api/v1/pages/pages.ts">delete</a>(pageID) -> PageDeleteResponse</code>

#### Blocks

Types:

- <code><a href="./src/resources/api/v1/pages/blocks.ts">BlockCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/pages/blocks.ts">BlockListResponse</a></code>

Methods:

- <code title="post /api/v1/pages/{pageId}/blocks">client.api.v1.pages.blocks.<a href="./src/resources/api/v1/pages/blocks.ts">create</a>(pageID, { ...params }) -> BlockCreateResponse</code>
- <code title="get /api/v1/pages/{pageId}/blocks">client.api.v1.pages.blocks.<a href="./src/resources/api/v1/pages/blocks.ts">list</a>(pageID) -> BlockListResponse</code>

#### Theme

Types:

- <code><a href="./src/resources/api/v1/pages/theme.ts">ThemeRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/pages/theme.ts">ThemeUpdateResponse</a></code>

Methods:

- <code title="get /api/v1/pages/{pageId}/theme">client.api.v1.pages.theme.<a href="./src/resources/api/v1/pages/theme.ts">retrieve</a>(pageID) -> ThemeRetrieveResponse</code>
- <code title="patch /api/v1/pages/{pageId}/theme">client.api.v1.pages.theme.<a href="./src/resources/api/v1/pages/theme.ts">update</a>(pageID, { ...params }) -> ThemeUpdateResponse</code>

### Blocks

Types:

- <code><a href="./src/resources/api/v1/blocks.ts">BlockRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/blocks.ts">BlockUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/blocks.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/blocks/{blockId}">client.api.v1.blocks.<a href="./src/resources/api/v1/blocks.ts">retrieve</a>(blockID) -> BlockRetrieveResponse</code>
- <code title="patch /api/v1/blocks/{blockId}">client.api.v1.blocks.<a href="./src/resources/api/v1/blocks.ts">update</a>(blockID, { ...params }) -> BlockUpdateResponse</code>
- <code title="delete /api/v1/blocks/{blockId}">client.api.v1.blocks.<a href="./src/resources/api/v1/blocks.ts">delete</a>(blockID) -> BlockDeleteResponse</code>

### Sites

Types:

- <code><a href="./src/resources/api/v1/sites/sites.ts">SiteCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/sites.ts">SiteRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/sites.ts">SiteUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/sites.ts">SiteListResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/sites.ts">SiteDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/sites">client.api.v1.sites.<a href="./src/resources/api/v1/sites/sites.ts">create</a>({ ...params }) -> SiteCreateResponse</code>
- <code title="get /api/v1/sites/{siteId}">client.api.v1.sites.<a href="./src/resources/api/v1/sites/sites.ts">retrieve</a>(siteID) -> SiteRetrieveResponse</code>
- <code title="patch /api/v1/sites/{siteId}">client.api.v1.sites.<a href="./src/resources/api/v1/sites/sites.ts">update</a>(siteID, { ...params }) -> SiteUpdateResponse</code>
- <code title="get /api/v1/sites">client.api.v1.sites.<a href="./src/resources/api/v1/sites/sites.ts">list</a>({ ...params }) -> SiteListResponsesMyCursorPage</code>
- <code title="delete /api/v1/sites/{siteId}">client.api.v1.sites.<a href="./src/resources/api/v1/sites/sites.ts">delete</a>(siteID) -> SiteDeleteResponse</code>

#### Pages

Types:

- <code><a href="./src/resources/api/v1/sites/pages.ts">PageCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/pages.ts">PageListResponse</a></code>

Methods:

- <code title="post /api/v1/sites/{siteId}/pages">client.api.v1.sites.pages.<a href="./src/resources/api/v1/sites/pages.ts">create</a>(siteID, { ...params }) -> PageCreateResponse</code>
- <code title="get /api/v1/sites/{siteId}/pages">client.api.v1.sites.pages.<a href="./src/resources/api/v1/sites/pages.ts">list</a>(siteID, { ...params }) -> PageListResponsesMyCursorPage</code>

### SiteContacts

Types:

- <code><a href="./src/resources/api/v1/site-contacts.ts">SiteContactCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/site-contacts.ts">SiteContactSampleResponse</a></code>

Methods:

- <code title="post /api/v1/site-contacts">client.api.v1.siteContacts.<a href="./src/resources/api/v1/site-contacts.ts">create</a>({ ...params }) -> SiteContactCreateResponse</code>
- <code title="get /api/v1/site-contacts/sample">client.api.v1.siteContacts.<a href="./src/resources/api/v1/site-contacts.ts">sample</a>() -> SiteContactSampleResponse</code>

### Workspaces

Types:

- <code><a href="./src/resources/api/v1/workspaces.ts">WorkspaceRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/workspaces.ts">WorkspaceUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/workspaces.ts">WorkspaceListResponse</a></code>

Methods:

- <code title="get /api/v1/workspaces/{workspaceId}">client.api.v1.workspaces.<a href="./src/resources/api/v1/workspaces.ts">retrieve</a>(workspaceID) -> WorkspaceRetrieveResponse</code>
- <code title="patch /api/v1/workspaces/{workspaceId}">client.api.v1.workspaces.<a href="./src/resources/api/v1/workspaces.ts">update</a>(workspaceID, { ...params }) -> WorkspaceUpdateResponse</code>
- <code title="get /api/v1/workspaces">client.api.v1.workspaces.<a href="./src/resources/api/v1/workspaces.ts">list</a>({ ...params }) -> WorkspaceListResponsesMyCursorPage</code>

### ZapierSubscriptions

Types:

- <code><a href="./src/resources/api/v1/zapier-subscriptions.ts">ZapierSubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/zapier-subscriptions.ts">ZapierSubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/zapier-subscriptions">client.api.v1.zapierSubscriptions.<a href="./src/resources/api/v1/zapier-subscriptions.ts">create</a>({ ...params }) -> ZapierSubscriptionCreateResponse</code>
- <code title="delete /api/v1/zapier-subscriptions">client.api.v1.zapierSubscriptions.<a href="./src/resources/api/v1/zapier-subscriptions.ts">delete</a>({ ...params }) -> ZapierSubscriptionDeleteResponse</code>
