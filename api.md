# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1GetFormResponsesSampleResponse</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1ListBookingsResponse</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1PingResponse</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1RetrieveSampleBookingsResponse</a></code>

Methods:

- <code title="get /v1/form-responses/sample">client.v1.<a href="./src/resources/v1/v1.ts">getFormResponsesSample</a>({ ...params }) -> V1GetFormResponsesSampleResponse</code>
- <code title="get /v1/bookings">client.v1.<a href="./src/resources/v1/v1.ts">listBookings</a>({ ...params }) -> V1ListBookingsResponsesMyCursorPage</code>
- <code title="get /v1/ping">client.v1.<a href="./src/resources/v1/v1.ts">ping</a>() -> V1PingResponse</code>
- <code title="get /v1/bookings/sample">client.v1.<a href="./src/resources/v1/v1.ts">retrieveSampleBookings</a>() -> unknown</code>

## Pages

Types:

- <code><a href="./src/resources/v1/pages/pages.ts">PageRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/pages/pages.ts">PageUpdateResponse</a></code>
- <code><a href="./src/resources/v1/pages/pages.ts">PageDeleteResponse</a></code>

Methods:

- <code title="get /v1/pages/{pageId}">client.v1.pages.<a href="./src/resources/v1/pages/pages.ts">retrieve</a>(pageID) -> PageRetrieveResponse</code>
- <code title="patch /v1/pages/{pageId}">client.v1.pages.<a href="./src/resources/v1/pages/pages.ts">update</a>(pageID, { ...params }) -> PageUpdateResponse</code>
- <code title="delete /v1/pages/{pageId}">client.v1.pages.<a href="./src/resources/v1/pages/pages.ts">delete</a>(pageID) -> PageDeleteResponse</code>

### Blocks

Types:

- <code><a href="./src/resources/v1/pages/blocks.ts">BlockCreateResponse</a></code>
- <code><a href="./src/resources/v1/pages/blocks.ts">BlockListResponse</a></code>

Methods:

- <code title="post /v1/pages/{pageId}/blocks">client.v1.pages.blocks.<a href="./src/resources/v1/pages/blocks.ts">create</a>(pageID, { ...params }) -> BlockCreateResponse</code>
- <code title="get /v1/pages/{pageId}/blocks">client.v1.pages.blocks.<a href="./src/resources/v1/pages/blocks.ts">list</a>(pageID) -> BlockListResponse</code>

### Theme

Types:

- <code><a href="./src/resources/v1/pages/theme.ts">ThemeRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/pages/theme.ts">ThemeUpdateResponse</a></code>

Methods:

- <code title="get /v1/pages/{pageId}/theme">client.v1.pages.theme.<a href="./src/resources/v1/pages/theme.ts">retrieve</a>(pageID) -> ThemeRetrieveResponse</code>
- <code title="patch /v1/pages/{pageId}/theme">client.v1.pages.theme.<a href="./src/resources/v1/pages/theme.ts">update</a>(pageID, { ...params }) -> ThemeUpdateResponse</code>

## Blocks

Types:

- <code><a href="./src/resources/v1/blocks.ts">BlockRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/blocks.ts">BlockUpdateResponse</a></code>
- <code><a href="./src/resources/v1/blocks.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="get /v1/blocks/{blockId}">client.v1.blocks.<a href="./src/resources/v1/blocks.ts">retrieve</a>(blockID) -> BlockRetrieveResponse</code>
- <code title="patch /v1/blocks/{blockId}">client.v1.blocks.<a href="./src/resources/v1/blocks.ts">update</a>(blockID, { ...params }) -> BlockUpdateResponse</code>
- <code title="delete /v1/blocks/{blockId}">client.v1.blocks.<a href="./src/resources/v1/blocks.ts">delete</a>(blockID) -> BlockDeleteResponse</code>

## Sites

Types:

- <code><a href="./src/resources/v1/sites/sites.ts">SiteCreateResponse</a></code>
- <code><a href="./src/resources/v1/sites/sites.ts">SiteRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/sites/sites.ts">SiteUpdateResponse</a></code>
- <code><a href="./src/resources/v1/sites/sites.ts">SiteListResponse</a></code>
- <code><a href="./src/resources/v1/sites/sites.ts">SiteDeleteResponse</a></code>

Methods:

- <code title="post /v1/sites">client.v1.sites.<a href="./src/resources/v1/sites/sites.ts">create</a>({ ...params }) -> SiteCreateResponse</code>
- <code title="get /v1/sites/{siteId}">client.v1.sites.<a href="./src/resources/v1/sites/sites.ts">retrieve</a>(siteID) -> SiteRetrieveResponse</code>
- <code title="patch /v1/sites/{siteId}">client.v1.sites.<a href="./src/resources/v1/sites/sites.ts">update</a>(siteID, { ...params }) -> SiteUpdateResponse</code>
- <code title="get /v1/sites">client.v1.sites.<a href="./src/resources/v1/sites/sites.ts">list</a>({ ...params }) -> SiteListResponsesMyCursorPage</code>
- <code title="delete /v1/sites/{siteId}">client.v1.sites.<a href="./src/resources/v1/sites/sites.ts">delete</a>(siteID) -> SiteDeleteResponse</code>

### Pages

Types:

- <code><a href="./src/resources/v1/sites/pages.ts">PageCreateResponse</a></code>
- <code><a href="./src/resources/v1/sites/pages.ts">PageListResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/pages">client.v1.sites.pages.<a href="./src/resources/v1/sites/pages.ts">create</a>(siteID, { ...params }) -> PageCreateResponse</code>
- <code title="get /v1/sites/{siteId}/pages">client.v1.sites.pages.<a href="./src/resources/v1/sites/pages.ts">list</a>(siteID, { ...params }) -> PageListResponsesMyCursorPage</code>

### Invitations

Types:

- <code><a href="./src/resources/v1/sites/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/v1/sites/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/invitations">client.v1.sites.invitations.<a href="./src/resources/v1/sites/invitations.ts">create</a>(siteID, { ...params }) -> InvitationCreateResponse</code>
- <code title="get /v1/sites/{siteId}/invitations">client.v1.sites.invitations.<a href="./src/resources/v1/sites/invitations.ts">list</a>(siteID, { ...params }) -> InvitationListResponsesMyCursorPage</code>

### Memberships

Types:

- <code><a href="./src/resources/v1/sites/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/v1/sites/memberships.ts">MembershipListResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/memberships">client.v1.sites.memberships.<a href="./src/resources/v1/sites/memberships.ts">create</a>(siteID, { ...params }) -> MembershipCreateResponse</code>
- <code title="get /v1/sites/{siteId}/memberships">client.v1.sites.memberships.<a href="./src/resources/v1/sites/memberships.ts">list</a>(siteID, { ...params }) -> MembershipListResponsesMyCursorPage</code>

## SiteContacts

Types:

- <code><a href="./src/resources/v1/site-contacts.ts">SiteContactCreateResponse</a></code>
- <code><a href="./src/resources/v1/site-contacts.ts">SiteContactSampleResponse</a></code>

Methods:

- <code title="post /v1/site-contacts">client.v1.siteContacts.<a href="./src/resources/v1/site-contacts.ts">create</a>({ ...params }) -> SiteContactCreateResponse</code>
- <code title="get /v1/site-contacts/sample">client.v1.siteContacts.<a href="./src/resources/v1/site-contacts.ts">sample</a>() -> unknown</code>

## Workspaces

Types:

- <code><a href="./src/resources/v1/workspaces/workspaces.ts">WorkspaceRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/workspaces/workspaces.ts">WorkspaceUpdateResponse</a></code>
- <code><a href="./src/resources/v1/workspaces/workspaces.ts">WorkspaceListResponse</a></code>

Methods:

- <code title="get /v1/workspaces/{workspaceId}">client.v1.workspaces.<a href="./src/resources/v1/workspaces/workspaces.ts">retrieve</a>(workspaceID) -> WorkspaceRetrieveResponse</code>
- <code title="patch /v1/workspaces/{workspaceId}">client.v1.workspaces.<a href="./src/resources/v1/workspaces/workspaces.ts">update</a>(workspaceID, { ...params }) -> WorkspaceUpdateResponse</code>
- <code title="get /v1/workspaces">client.v1.workspaces.<a href="./src/resources/v1/workspaces/workspaces.ts">list</a>({ ...params }) -> WorkspaceListResponsesMyCursorPage</code>

### Invitations

Types:

- <code><a href="./src/resources/v1/workspaces/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/v1/workspaces/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /v1/workspaces/{workspaceId}/invitations">client.v1.workspaces.invitations.<a href="./src/resources/v1/workspaces/invitations.ts">create</a>(workspaceID, { ...params }) -> InvitationCreateResponse</code>
- <code title="get /v1/workspaces/{workspaceId}/invitations">client.v1.workspaces.invitations.<a href="./src/resources/v1/workspaces/invitations.ts">list</a>(workspaceID, { ...params }) -> InvitationListResponsesMyCursorPage</code>

### Memberships

Types:

- <code><a href="./src/resources/v1/workspaces/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/v1/workspaces/memberships.ts">MembershipListResponse</a></code>

Methods:

- <code title="post /v1/workspaces/{workspaceId}/memberships">client.v1.workspaces.memberships.<a href="./src/resources/v1/workspaces/memberships.ts">create</a>(workspaceID, { ...params }) -> MembershipCreateResponse</code>
- <code title="get /v1/workspaces/{workspaceId}/memberships">client.v1.workspaces.memberships.<a href="./src/resources/v1/workspaces/memberships.ts">list</a>(workspaceID, { ...params }) -> MembershipListResponsesMyCursorPage</code>

### Orders

Types:

- <code><a href="./src/resources/v1/workspaces/orders.ts">OrderSampleResponse</a></code>

Methods:

- <code title="get /v1/orders/sample">client.v1.workspaces.orders.<a href="./src/resources/v1/workspaces/orders.ts">sample</a>() -> unknown</code>

## ZapierSubscriptions

## SiteInvitations

Types:

- <code><a href="./src/resources/v1/site-invitations.ts">SiteInvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/site-invitations.ts">SiteInvitationDeleteResponse</a></code>

Methods:

- <code title="get /v1/site-invitations/{invitationId}">client.v1.siteInvitations.<a href="./src/resources/v1/site-invitations.ts">retrieve</a>(invitationID) -> SiteInvitationRetrieveResponse</code>
- <code title="delete /v1/site-invitations/{invitationId}">client.v1.siteInvitations.<a href="./src/resources/v1/site-invitations.ts">delete</a>(invitationID) -> SiteInvitationDeleteResponse</code>

## SiteMemberships

Types:

- <code><a href="./src/resources/v1/site-memberships.ts">SiteMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/site-memberships.ts">SiteMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/v1/site-memberships.ts">SiteMembershipDeleteResponse</a></code>

Methods:

- <code title="get /v1/site-memberships/{membershipId}">client.v1.siteMemberships.<a href="./src/resources/v1/site-memberships.ts">retrieve</a>(membershipID) -> SiteMembershipRetrieveResponse</code>
- <code title="patch /v1/site-memberships/{membershipId}">client.v1.siteMemberships.<a href="./src/resources/v1/site-memberships.ts">update</a>(membershipID, { ...params }) -> SiteMembershipUpdateResponse</code>
- <code title="delete /v1/site-memberships/{membershipId}">client.v1.siteMemberships.<a href="./src/resources/v1/site-memberships.ts">delete</a>(membershipID) -> SiteMembershipDeleteResponse</code>

## Invitations

Types:

- <code><a href="./src/resources/v1/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/invitations.ts">InvitationDeleteResponse</a></code>

Methods:

- <code title="get /v1/invitations/{invitationId}">client.v1.invitations.<a href="./src/resources/v1/invitations.ts">retrieve</a>(invitationID) -> InvitationRetrieveResponse</code>
- <code title="delete /v1/invitations/{invitationId}">client.v1.invitations.<a href="./src/resources/v1/invitations.ts">delete</a>(invitationID) -> InvitationDeleteResponse</code>

## WorkspaceMemberships

Types:

- <code><a href="./src/resources/v1/workspace-memberships.ts">WorkspaceMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/workspace-memberships.ts">WorkspaceMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/v1/workspace-memberships.ts">WorkspaceMembershipDeleteResponse</a></code>

Methods:

- <code title="get /v1/workspace-memberships/{membershipId}">client.v1.workspaceMemberships.<a href="./src/resources/v1/workspace-memberships.ts">retrieve</a>(membershipID) -> WorkspaceMembershipRetrieveResponse</code>
- <code title="patch /v1/workspace-memberships/{membershipId}">client.v1.workspaceMemberships.<a href="./src/resources/v1/workspace-memberships.ts">update</a>(membershipID, { ...params }) -> WorkspaceMembershipUpdateResponse</code>
- <code title="delete /v1/workspace-memberships/{membershipId}">client.v1.workspaceMemberships.<a href="./src/resources/v1/workspace-memberships.ts">delete</a>(membershipID) -> WorkspaceMembershipDeleteResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /v1/webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(webhookID) -> WebhookRetrieveResponse</code>
- <code title="patch /v1/webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(webhookID, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponsesMyCursorPage</code>
- <code title="delete /v1/webhooks/{webhookId}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID) -> WebhookDeleteResponse</code>
