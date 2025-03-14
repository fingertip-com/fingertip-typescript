# API

## V1

Types:

- <code><a href="./src/resources/api/v1/v1.ts">V1GetFormResponsesSampleResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListBookingsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1PingResponse</a></code>

Methods:

- <code title="get /api/v1/form-responses/sample">client.api.v1.<a href="./src/resources/api/v1/v1.ts">getFormResponsesSample</a>({ ...params }) -> V1GetFormResponsesSampleResponse</code>
- <code title="get /api/v1/bookings">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listBookings</a>({ ...params }) -> V1ListBookingsResponsesMyCursorPage</code>
- <code title="get /api/v1/ping">client.api.v1.<a href="./src/resources/api/v1/v1.ts">ping</a>() -> V1PingResponse</code>

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

#### Invitations

Types:

- <code><a href="./src/resources/api/v1/sites/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /api/v1/sites/{siteId}/invitations">client.api.v1.sites.invitations.<a href="./src/resources/api/v1/sites/invitations.ts">create</a>(siteID, { ...params }) -> InvitationCreateResponse</code>
- <code title="get /api/v1/sites/{siteId}/invitations">client.api.v1.sites.invitations.<a href="./src/resources/api/v1/sites/invitations.ts">list</a>(siteID, { ...params }) -> InvitationListResponsesMyCursorPage</code>

#### Memberships

Types:

- <code><a href="./src/resources/api/v1/sites/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/memberships.ts">MembershipListResponse</a></code>

Methods:

- <code title="post /api/v1/sites/{siteId}/memberships">client.api.v1.sites.memberships.<a href="./src/resources/api/v1/sites/memberships.ts">create</a>(siteID, { ...params }) -> MembershipCreateResponse</code>
- <code title="get /api/v1/sites/{siteId}/memberships">client.api.v1.sites.memberships.<a href="./src/resources/api/v1/sites/memberships.ts">list</a>(siteID, { ...params }) -> MembershipListResponsesMyCursorPage</code>

### SiteContacts

Types:

- <code><a href="./src/resources/api/v1/site-contacts.ts">SiteContactCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/site-contacts.ts">SiteContactSampleResponse</a></code>

Methods:

- <code title="post /api/v1/site-contacts">client.api.v1.siteContacts.<a href="./src/resources/api/v1/site-contacts.ts">create</a>({ ...params }) -> SiteContactCreateResponse</code>
- <code title="get /api/v1/site-contacts/sample">client.api.v1.siteContacts.<a href="./src/resources/api/v1/site-contacts.ts">sample</a>() -> SiteContactSampleResponse</code>

### Workspaces

Types:

- <code><a href="./src/resources/api/v1/workspaces/workspaces.ts">WorkspaceRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/workspaces/workspaces.ts">WorkspaceUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/workspaces/workspaces.ts">WorkspaceListResponse</a></code>

Methods:

- <code title="get /api/v1/workspaces/{workspaceId}">client.api.v1.workspaces.<a href="./src/resources/api/v1/workspaces/workspaces.ts">retrieve</a>(workspaceID) -> WorkspaceRetrieveResponse</code>
- <code title="patch /api/v1/workspaces/{workspaceId}">client.api.v1.workspaces.<a href="./src/resources/api/v1/workspaces/workspaces.ts">update</a>(workspaceID, { ...params }) -> WorkspaceUpdateResponse</code>
- <code title="get /api/v1/workspaces">client.api.v1.workspaces.<a href="./src/resources/api/v1/workspaces/workspaces.ts">list</a>({ ...params }) -> WorkspaceListResponsesMyCursorPage</code>

#### Invitations

Types:

- <code><a href="./src/resources/api/v1/workspaces/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/workspaces/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /api/v1/workspaces/{workspaceId}/invitations">client.api.v1.workspaces.invitations.<a href="./src/resources/api/v1/workspaces/invitations.ts">create</a>(workspaceID, { ...params }) -> InvitationCreateResponse</code>
- <code title="get /api/v1/workspaces/{workspaceId}/invitations">client.api.v1.workspaces.invitations.<a href="./src/resources/api/v1/workspaces/invitations.ts">list</a>(workspaceID, { ...params }) -> InvitationListResponsesMyCursorPage</code>

#### Memberships

Types:

- <code><a href="./src/resources/api/v1/workspaces/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/workspaces/memberships.ts">MembershipListResponse</a></code>

Methods:

- <code title="post /api/v1/workspaces/{workspaceId}/memberships">client.api.v1.workspaces.memberships.<a href="./src/resources/api/v1/workspaces/memberships.ts">create</a>(workspaceID, { ...params }) -> MembershipCreateResponse</code>
- <code title="get /api/v1/workspaces/{workspaceId}/memberships">client.api.v1.workspaces.memberships.<a href="./src/resources/api/v1/workspaces/memberships.ts">list</a>(workspaceID, { ...params }) -> MembershipListResponsesMyCursorPage</code>

### ZapierSubscriptions

Types:

- <code><a href="./src/resources/api/v1/zapier-subscriptions.ts">ZapierSubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/zapier-subscriptions.ts">ZapierSubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/zapier-subscriptions">client.api.v1.zapierSubscriptions.<a href="./src/resources/api/v1/zapier-subscriptions.ts">create</a>({ ...params }) -> ZapierSubscriptionCreateResponse</code>
- <code title="delete /api/v1/zapier-subscriptions">client.api.v1.zapierSubscriptions.<a href="./src/resources/api/v1/zapier-subscriptions.ts">delete</a>({ ...params }) -> ZapierSubscriptionDeleteResponse</code>

### SiteInvitations

Types:

- <code><a href="./src/resources/api/v1/site-invitations.ts">SiteInvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/site-invitations.ts">SiteInvitationDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/site-invitations/{invitationId}">client.api.v1.siteInvitations.<a href="./src/resources/api/v1/site-invitations.ts">retrieve</a>(invitationID) -> SiteInvitationRetrieveResponse</code>
- <code title="delete /api/v1/site-invitations/{invitationId}">client.api.v1.siteInvitations.<a href="./src/resources/api/v1/site-invitations.ts">delete</a>(invitationID) -> SiteInvitationDeleteResponse</code>

### SiteMemberships

Types:

- <code><a href="./src/resources/api/v1/site-memberships.ts">SiteMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/site-memberships.ts">SiteMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/site-memberships.ts">SiteMembershipDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/site-memberships/{membershipId}">client.api.v1.siteMemberships.<a href="./src/resources/api/v1/site-memberships.ts">retrieve</a>(membershipID) -> SiteMembershipRetrieveResponse</code>
- <code title="patch /api/v1/site-memberships/{membershipId}">client.api.v1.siteMemberships.<a href="./src/resources/api/v1/site-memberships.ts">update</a>(membershipID, { ...params }) -> SiteMembershipUpdateResponse</code>
- <code title="delete /api/v1/site-memberships/{membershipId}">client.api.v1.siteMemberships.<a href="./src/resources/api/v1/site-memberships.ts">delete</a>(membershipID) -> SiteMembershipDeleteResponse</code>

### Invitations

Types:

- <code><a href="./src/resources/api/v1/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/invitations.ts">InvitationDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/invitations/{invitationId}">client.api.v1.invitations.<a href="./src/resources/api/v1/invitations.ts">retrieve</a>(invitationID) -> InvitationRetrieveResponse</code>
- <code title="delete /api/v1/invitations/{invitationId}">client.api.v1.invitations.<a href="./src/resources/api/v1/invitations.ts">delete</a>(invitationID) -> InvitationDeleteResponse</code>

### WorkspaceMemberships

Types:

- <code><a href="./src/resources/api/v1/workspace-memberships.ts">WorkspaceMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/workspace-memberships.ts">WorkspaceMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/workspace-memberships.ts">WorkspaceMembershipDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/workspace-memberships/{membershipId}">client.api.v1.workspaceMemberships.<a href="./src/resources/api/v1/workspace-memberships.ts">retrieve</a>(membershipID) -> WorkspaceMembershipRetrieveResponse</code>
- <code title="patch /api/v1/workspace-memberships/{membershipId}">client.api.v1.workspaceMemberships.<a href="./src/resources/api/v1/workspace-memberships.ts">update</a>(membershipID, { ...params }) -> WorkspaceMembershipUpdateResponse</code>
- <code title="delete /api/v1/workspace-memberships/{membershipId}">client.api.v1.workspaceMemberships.<a href="./src/resources/api/v1/workspace-memberships.ts">delete</a>(membershipID) -> WorkspaceMembershipDeleteResponse</code>
