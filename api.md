# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingCheckResponse</a></code>

Methods:

- <code title="get /v1/ping">client.ping.<a href="./src/resources/ping.ts">check</a>() -> PingCheckResponse</code>

# Sites

Types:

- <code><a href="./src/resources/sites/sites.ts">SiteCreateResponse</a></code>
- <code><a href="./src/resources/sites/sites.ts">SiteRetrieveResponse</a></code>
- <code><a href="./src/resources/sites/sites.ts">SiteUpdateResponse</a></code>
- <code><a href="./src/resources/sites/sites.ts">SiteListResponse</a></code>
- <code><a href="./src/resources/sites/sites.ts">SiteDeleteResponse</a></code>
- <code><a href="./src/resources/sites/sites.ts">SiteRetrieveAnalyticsResponse</a></code>

Methods:

- <code title="post /v1/sites">client.sites.<a href="./src/resources/sites/sites.ts">create</a>({ ...params }) -> SiteCreateResponse</code>
- <code title="get /v1/sites/{siteId}">client.sites.<a href="./src/resources/sites/sites.ts">retrieve</a>(siteID) -> SiteRetrieveResponse</code>
- <code title="patch /v1/sites/{siteId}">client.sites.<a href="./src/resources/sites/sites.ts">update</a>(siteID, { ...params }) -> SiteUpdateResponse</code>
- <code title="get /v1/sites">client.sites.<a href="./src/resources/sites/sites.ts">list</a>({ ...params }) -> SiteListResponsesMyCursorPage</code>
- <code title="delete /v1/sites/{siteId}">client.sites.<a href="./src/resources/sites/sites.ts">delete</a>(siteID) -> SiteDeleteResponse</code>
- <code title="get /v1/sites/{siteId}/analytics">client.sites.<a href="./src/resources/sites/sites.ts">retrieveAnalytics</a>(siteID, { ...params }) -> SiteRetrieveAnalyticsResponse</code>

## Pages

Types:

- <code><a href="./src/resources/sites/pages.ts">PageCreateResponse</a></code>
- <code><a href="./src/resources/sites/pages.ts">PageListResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/pages">client.sites.pages.<a href="./src/resources/sites/pages.ts">create</a>(siteID, { ...params }) -> PageCreateResponse</code>
- <code title="get /v1/sites/{siteId}/pages">client.sites.pages.<a href="./src/resources/sites/pages.ts">list</a>(siteID, { ...params }) -> PageListResponsesMyCursorPage</code>

## Invitations

Types:

- <code><a href="./src/resources/sites/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/sites/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/sites/invitations.ts">InvitationListResponse</a></code>
- <code><a href="./src/resources/sites/invitations.ts">InvitationDeleteResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/invitations">client.sites.invitations.<a href="./src/resources/sites/invitations.ts">create</a>(siteID, { ...params }) -> InvitationCreateResponse</code>
- <code title="get /v1/site-invitations/{invitationId}">client.sites.invitations.<a href="./src/resources/sites/invitations.ts">retrieve</a>(invitationID) -> InvitationRetrieveResponse</code>
- <code title="get /v1/sites/{siteId}/invitations">client.sites.invitations.<a href="./src/resources/sites/invitations.ts">list</a>(siteID, { ...params }) -> InvitationListResponsesMyCursorPage</code>
- <code title="delete /v1/site-invitations/{invitationId}">client.sites.invitations.<a href="./src/resources/sites/invitations.ts">delete</a>(invitationID) -> InvitationDeleteResponse</code>

## Memberships

Types:

- <code><a href="./src/resources/sites/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/sites/memberships.ts">MembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/sites/memberships.ts">MembershipUpdateResponse</a></code>
- <code><a href="./src/resources/sites/memberships.ts">MembershipListResponse</a></code>
- <code><a href="./src/resources/sites/memberships.ts">MembershipDeleteResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/memberships">client.sites.memberships.<a href="./src/resources/sites/memberships.ts">create</a>(siteID, { ...params }) -> MembershipCreateResponse</code>
- <code title="get /v1/site-memberships/{membershipId}">client.sites.memberships.<a href="./src/resources/sites/memberships.ts">retrieve</a>(membershipID) -> MembershipRetrieveResponse</code>
- <code title="patch /v1/site-memberships/{membershipId}">client.sites.memberships.<a href="./src/resources/sites/memberships.ts">update</a>(membershipID, { ...params }) -> MembershipUpdateResponse</code>
- <code title="get /v1/sites/{siteId}/memberships">client.sites.memberships.<a href="./src/resources/sites/memberships.ts">list</a>(siteID, { ...params }) -> MembershipListResponsesMyCursorPage</code>
- <code title="delete /v1/site-memberships/{membershipId}">client.sites.memberships.<a href="./src/resources/sites/memberships.ts">delete</a>(membershipID) -> MembershipDeleteResponse</code>

# Pages

Types:

- <code><a href="./src/resources/pages/pages.ts">PageRetrieveResponse</a></code>
- <code><a href="./src/resources/pages/pages.ts">PageUpdateResponse</a></code>
- <code><a href="./src/resources/pages/pages.ts">PageDeleteResponse</a></code>

Methods:

- <code title="get /v1/pages/{pageId}">client.pages.<a href="./src/resources/pages/pages.ts">retrieve</a>(pageID) -> PageRetrieveResponse</code>
- <code title="patch /v1/pages/{pageId}">client.pages.<a href="./src/resources/pages/pages.ts">update</a>(pageID, { ...params }) -> PageUpdateResponse</code>
- <code title="delete /v1/pages/{pageId}">client.pages.<a href="./src/resources/pages/pages.ts">delete</a>(pageID) -> PageDeleteResponse</code>

## Blocks

Types:

- <code><a href="./src/resources/pages/blocks.ts">BlockCreateResponse</a></code>
- <code><a href="./src/resources/pages/blocks.ts">BlockListResponse</a></code>

Methods:

- <code title="post /v1/pages/{pageId}/blocks">client.pages.blocks.<a href="./src/resources/pages/blocks.ts">create</a>(pageID, { ...params }) -> BlockCreateResponse</code>
- <code title="get /v1/pages/{pageId}/blocks">client.pages.blocks.<a href="./src/resources/pages/blocks.ts">list</a>(pageID) -> BlockListResponse</code>

## Theme

Types:

- <code><a href="./src/resources/pages/theme.ts">ThemeRetrieveResponse</a></code>
- <code><a href="./src/resources/pages/theme.ts">ThemeUpdateResponse</a></code>

Methods:

- <code title="get /v1/pages/{pageId}/theme">client.pages.theme.<a href="./src/resources/pages/theme.ts">retrieve</a>(pageID) -> ThemeRetrieveResponse</code>
- <code title="patch /v1/pages/{pageId}/theme">client.pages.theme.<a href="./src/resources/pages/theme.ts">update</a>(pageID, { ...params }) -> ThemeUpdateResponse</code>

# Blocks

Types:

- <code><a href="./src/resources/blocks.ts">BlockRetrieveResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockUpdateResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="get /v1/blocks/{blockId}">client.blocks.<a href="./src/resources/blocks.ts">retrieve</a>(blockID) -> BlockRetrieveResponse</code>
- <code title="patch /v1/blocks/{blockId}">client.blocks.<a href="./src/resources/blocks.ts">update</a>(blockID, { ...params }) -> BlockUpdateResponse</code>
- <code title="delete /v1/blocks/{blockId}">client.blocks.<a href="./src/resources/blocks.ts">delete</a>(blockID) -> BlockDeleteResponse</code>

# BlogPosts

Types:

- <code><a href="./src/resources/blog-posts.ts">BlogPostRetrieveResponse</a></code>
- <code><a href="./src/resources/blog-posts.ts">BlogPostListResponse</a></code>

Methods:

- <code title="get /v1/blog-posts/{blogPostId}">client.blogPosts.<a href="./src/resources/blog-posts.ts">retrieve</a>(blogPostID) -> BlogPostRetrieveResponse</code>
- <code title="get /v1/blog-posts">client.blogPosts.<a href="./src/resources/blog-posts.ts">list</a>({ ...params }) -> BlogPostListResponsesMyCursorPage</code>

# Bookings

Types:

- <code><a href="./src/resources/bookings.ts">BookingListResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingListSampleResponse</a></code>

Methods:

- <code title="get /v1/bookings">client.bookings.<a href="./src/resources/bookings.ts">list</a>({ ...params }) -> BookingListResponsesMyCursorPage</code>
- <code title="get /v1/bookings/sample">client.bookings.<a href="./src/resources/bookings.ts">listSample</a>() -> unknown</code>

# EventTypes

Types:

- <code><a href="./src/resources/event-types.ts">EventTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/event-types.ts">EventTypeListResponse</a></code>

Methods:

- <code title="get /v1/event-types/{eventTypeId}">client.eventTypes.<a href="./src/resources/event-types.ts">retrieve</a>(eventTypeID) -> EventTypeRetrieveResponse</code>
- <code title="get /v1/event-types">client.eventTypes.<a href="./src/resources/event-types.ts">list</a>({ ...params }) -> EventTypeListResponsesMyCursorPage</code>

# FormResponses

Types:

- <code><a href="./src/resources/form-responses.ts">FormResponseListResponse</a></code>
- <code><a href="./src/resources/form-responses.ts">FormResponseListSampleResponse</a></code>

Methods:

- <code title="get /v1/form-responses">client.formResponses.<a href="./src/resources/form-responses.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /v1/form-responses/sample">client.formResponses.<a href="./src/resources/form-responses.ts">listSample</a>({ ...params }) -> unknown</code>

# FormTemplates

Types:

- <code><a href="./src/resources/form-templates.ts">FormTemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/form-templates.ts">FormTemplateListResponse</a></code>

Methods:

- <code title="get /v1/form-templates/{formTemplateId}">client.formTemplates.<a href="./src/resources/form-templates.ts">retrieve</a>(formTemplateID, { ...params }) -> FormTemplateRetrieveResponse</code>
- <code title="get /v1/form-templates">client.formTemplates.<a href="./src/resources/form-templates.ts">list</a>({ ...params }) -> FormTemplateListResponsesMyCursorPage</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponsesMyCursorPage</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListSampleResponse</a></code>

Methods:

- <code title="get /v1/orders">client.orders.<a href="./src/resources/orders.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /v1/orders/sample">client.orders.<a href="./src/resources/orders.ts">listSample</a>() -> unknown</code>

# SiteContacts

Types:

- <code><a href="./src/resources/site-contacts.ts">SiteContactCreateResponse</a></code>
- <code><a href="./src/resources/site-contacts.ts">SiteContactListResponse</a></code>
- <code><a href="./src/resources/site-contacts.ts">SiteContactListSampleResponse</a></code>

Methods:

- <code title="post /v1/site-contacts">client.siteContacts.<a href="./src/resources/site-contacts.ts">create</a>({ ...params }) -> SiteContactCreateResponse</code>
- <code title="get /v1/site-contacts">client.siteContacts.<a href="./src/resources/site-contacts.ts">list</a>({ ...params }) -> SiteContactListResponsesMyCursorPage</code>
- <code title="get /v1/site-contacts/sample">client.siteContacts.<a href="./src/resources/site-contacts.ts">listSample</a>() -> unknown</code>

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

# Workspaces

Types:

- <code><a href="./src/resources/workspaces/workspaces.ts">WorkspaceRetrieveResponse</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">WorkspaceUpdateResponse</a></code>
- <code><a href="./src/resources/workspaces/workspaces.ts">WorkspaceListResponse</a></code>

Methods:

- <code title="get /v1/workspaces/{workspaceId}">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">retrieve</a>(workspaceID) -> WorkspaceRetrieveResponse</code>
- <code title="patch /v1/workspaces/{workspaceId}">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">update</a>(workspaceID, { ...params }) -> WorkspaceUpdateResponse</code>
- <code title="get /v1/workspaces">client.workspaces.<a href="./src/resources/workspaces/workspaces.ts">list</a>({ ...params }) -> WorkspaceListResponsesMyCursorPage</code>

## Invitations

Types:

- <code><a href="./src/resources/workspaces/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/workspaces/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /v1/workspaces/{workspaceId}/invitations">client.workspaces.invitations.<a href="./src/resources/workspaces/invitations.ts">create</a>(workspaceID, { ...params }) -> InvitationCreateResponse</code>
- <code title="get /v1/workspaces/{workspaceId}/invitations">client.workspaces.invitations.<a href="./src/resources/workspaces/invitations.ts">list</a>(workspaceID, { ...params }) -> InvitationListResponsesMyCursorPage</code>

## Memberships

Types:

- <code><a href="./src/resources/workspaces/memberships.ts">MembershipCreateResponse</a></code>
- <code><a href="./src/resources/workspaces/memberships.ts">MembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/workspaces/memberships.ts">MembershipUpdateResponse</a></code>
- <code><a href="./src/resources/workspaces/memberships.ts">MembershipListResponse</a></code>
- <code><a href="./src/resources/workspaces/memberships.ts">MembershipDeleteResponse</a></code>

Methods:

- <code title="post /v1/workspaces/{workspaceId}/memberships">client.workspaces.memberships.<a href="./src/resources/workspaces/memberships.ts">create</a>(workspaceID, { ...params }) -> MembershipCreateResponse</code>
- <code title="get /v1/workspace-memberships/{membershipId}">client.workspaces.memberships.<a href="./src/resources/workspaces/memberships.ts">retrieve</a>(membershipID) -> MembershipRetrieveResponse</code>
- <code title="patch /v1/workspace-memberships/{membershipId}">client.workspaces.memberships.<a href="./src/resources/workspaces/memberships.ts">update</a>(membershipID, { ...params }) -> MembershipUpdateResponse</code>
- <code title="get /v1/workspaces/{workspaceId}/memberships">client.workspaces.memberships.<a href="./src/resources/workspaces/memberships.ts">list</a>(workspaceID, { ...params }) -> MembershipListResponsesMyCursorPage</code>
- <code title="delete /v1/workspace-memberships/{membershipId}">client.workspaces.memberships.<a href="./src/resources/workspaces/memberships.ts">delete</a>(membershipID) -> MembershipDeleteResponse</code>

## Orders

Types:

- <code><a href="./src/resources/workspaces/orders.ts">OrderSampleResponse</a></code>

Methods:

- <code title="get /v1/orders/sample">client.workspaces.orders.<a href="./src/resources/workspaces/orders.ts">sample</a>() -> unknown</code>

# Invitations

Types:

- <code><a href="./src/resources/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/invitations.ts">InvitationDeleteResponse</a></code>

Methods:

- <code title="get /v1/invitations/{invitationId}">client.invitations.<a href="./src/resources/invitations.ts">retrieve</a>(invitationID) -> InvitationRetrieveResponse</code>
- <code title="delete /v1/invitations/{invitationId}">client.invitations.<a href="./src/resources/invitations.ts">delete</a>(invitationID) -> InvitationDeleteResponse</code>

# ZapierSubscriptions

# SiteInvitations

Types:

- <code><a href="./src/resources/site-invitations.ts">SiteInvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/site-invitations.ts">SiteInvitationDeleteResponse</a></code>

Methods:

- <code title="get /v1/site-invitations/{invitationId}">client.siteInvitations.<a href="./src/resources/site-invitations.ts">retrieve</a>(invitationID) -> SiteInvitationRetrieveResponse</code>
- <code title="delete /v1/site-invitations/{invitationId}">client.siteInvitations.<a href="./src/resources/site-invitations.ts">delete</a>(invitationID) -> SiteInvitationDeleteResponse</code>

# SiteMemberships

Types:

- <code><a href="./src/resources/site-memberships.ts">SiteMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/site-memberships.ts">SiteMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/site-memberships.ts">SiteMembershipDeleteResponse</a></code>

Methods:

- <code title="get /v1/site-memberships/{membershipId}">client.siteMemberships.<a href="./src/resources/site-memberships.ts">retrieve</a>(membershipID) -> SiteMembershipRetrieveResponse</code>
- <code title="patch /v1/site-memberships/{membershipId}">client.siteMemberships.<a href="./src/resources/site-memberships.ts">update</a>(membershipID, { ...params }) -> SiteMembershipUpdateResponse</code>
- <code title="delete /v1/site-memberships/{membershipId}">client.siteMemberships.<a href="./src/resources/site-memberships.ts">delete</a>(membershipID) -> SiteMembershipDeleteResponse</code>

# WorkspaceMemberships

Types:

- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipDeleteResponse</a></code>

Methods:

- <code title="get /v1/workspace-memberships/{membershipId}">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">retrieve</a>(membershipID) -> WorkspaceMembershipRetrieveResponse</code>
- <code title="patch /v1/workspace-memberships/{membershipId}">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">update</a>(membershipID, { ...params }) -> WorkspaceMembershipUpdateResponse</code>
- <code title="delete /v1/workspace-memberships/{membershipId}">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">delete</a>(membershipID) -> WorkspaceMembershipDeleteResponse</code>
