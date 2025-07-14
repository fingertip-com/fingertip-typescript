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
- <code><a href="./src/resources/pages/theme.ts">ThemePatchResponse</a></code>
- <code><a href="./src/resources/pages/theme.ts">ThemeUpsertResponse</a></code>

Methods:

- <code title="get /v1/pages/{pageId}/theme">client.pages.theme.<a href="./src/resources/pages/theme.ts">retrieve</a>(pageID) -> ThemeRetrieveResponse</code>
- <code title="patch /v1/pages/{pageId}/theme/patch">client.pages.theme.<a href="./src/resources/pages/theme.ts">patch</a>(pageID, [ ...body ]) -> ThemePatchResponse</code>
- <code title="patch /v1/pages/{pageId}/theme">client.pages.theme.<a href="./src/resources/pages/theme.ts">upsert</a>(pageID, { ...params }) -> ThemeUpsertResponse</code>

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
- <code><a href="./src/resources/bookings.ts">BookingAcceptResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingCancelResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingCompleteResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingDeclineResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingListRequestsResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingListSampleResponse</a></code>
- <code><a href="./src/resources/bookings.ts">BookingRescheduleResponse</a></code>

Methods:

- <code title="get /v1/bookings">client.bookings.<a href="./src/resources/bookings.ts">list</a>({ ...params }) -> BookingListResponsesMyCursorPage</code>
- <code title="post /v1/bookings/{bookingId}/accept">client.bookings.<a href="./src/resources/bookings.ts">accept</a>(bookingID, { ...params }) -> BookingAcceptResponse</code>
- <code title="post /v1/bookings/{bookingId}/cancel">client.bookings.<a href="./src/resources/bookings.ts">cancel</a>(bookingID, { ...params }) -> BookingCancelResponse</code>
- <code title="post /v1/bookings/{bookingId}/complete">client.bookings.<a href="./src/resources/bookings.ts">complete</a>(bookingID, { ...params }) -> BookingCompleteResponse</code>
- <code title="post /v1/bookings/{bookingId}/decline">client.bookings.<a href="./src/resources/bookings.ts">decline</a>(bookingID, { ...params }) -> BookingDeclineResponse</code>
- <code title="get /v1/bookings/requests">client.bookings.<a href="./src/resources/bookings.ts">listRequests</a>({ ...params }) -> BookingListRequestsResponsesMyCursorPage</code>
- <code title="get /v1/bookings/sample">client.bookings.<a href="./src/resources/bookings.ts">listSample</a>() -> unknown</code>
- <code title="post /v1/bookings/{bookingId}/reschedule">client.bookings.<a href="./src/resources/bookings.ts">reschedule</a>(bookingID, { ...params }) -> BookingRescheduleResponse</code>

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

- <code title="get /v1/form-responses">client.formResponses.<a href="./src/resources/form-responses.ts">list</a>({ ...params }) -> FormResponseListResponsesMyCursorPage</code>
- <code title="get /v1/form-responses/sample">client.formResponses.<a href="./src/resources/form-responses.ts">listSample</a>({ ...params }) -> FormResponseListSampleResponsesMyCursorPage</code>

# FormTemplates

Types:

- <code><a href="./src/resources/form-templates.ts">FormTemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/form-templates.ts">FormTemplateListResponse</a></code>

Methods:

- <code title="get /v1/form-templates/{formTemplateId}">client.formTemplates.<a href="./src/resources/form-templates.ts">retrieve</a>(formTemplateID, { ...params }) -> FormTemplateRetrieveResponse</code>
- <code title="get /v1/form-templates">client.formTemplates.<a href="./src/resources/form-templates.ts">list</a>({ ...params }) -> FormTemplateListResponsesMyCursorPage</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceUpdateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceDeleteResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceMarkPaidResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceSendResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="put /v1/invoices/{invoiceId}">client.invoices.<a href="./src/resources/invoices.ts">update</a>(invoiceID, { ...params }) -> InvoiceUpdateResponse</code>
- <code title="get /v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponsesMyCursorPage</code>
- <code title="delete /v1/invoices/{invoiceId}">client.invoices.<a href="./src/resources/invoices.ts">delete</a>(invoiceID) -> InvoiceDeleteResponse</code>
- <code title="post /v1/invoices/{invoiceId}/mark-paid">client.invoices.<a href="./src/resources/invoices.ts">markPaid</a>(invoiceID, { ...params }) -> InvoiceMarkPaidResponse</code>
- <code title="post /v1/invoices/{invoiceId}/send">client.invoices.<a href="./src/resources/invoices.ts">send</a>(invoiceID, { ...params }) -> InvoiceSendResponse</code>
- <code title="post /v1/invoices/{invoiceId}/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>(invoiceID) -> InvoiceVoidResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListSampleResponse</a></code>

Methods:

- <code title="get /v1/orders">client.orders.<a href="./src/resources/orders.ts">list</a>({ ...params }) -> OrderListResponsesMyCursorPage</code>
- <code title="get /v1/orders/sample">client.orders.<a href="./src/resources/orders.ts">listSample</a>({ ...params }) -> OrderListSampleResponsesMyCursorPage</code>

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

## Orders

Types:

- <code><a href="./src/resources/workspaces/orders.ts">OrderSampleResponse</a></code>

Methods:

- <code title="get /v1/orders/sample">client.workspaces.orders.<a href="./src/resources/workspaces/orders.ts">sample</a>({ ...params }) -> OrderSampleResponse</code>

# SiteInvitations

Types:

- <code><a href="./src/resources/site-invitations.ts">SiteInvitationCreateResponse</a></code>
- <code><a href="./src/resources/site-invitations.ts">SiteInvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/site-invitations.ts">SiteInvitationListResponse</a></code>
- <code><a href="./src/resources/site-invitations.ts">SiteInvitationDeleteResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/invitations">client.siteInvitations.<a href="./src/resources/site-invitations.ts">create</a>(siteID, { ...params }) -> SiteInvitationCreateResponse</code>
- <code title="get /v1/site-invitations/{invitationId}">client.siteInvitations.<a href="./src/resources/site-invitations.ts">retrieve</a>(invitationID) -> SiteInvitationRetrieveResponse</code>
- <code title="get /v1/sites/{siteId}/invitations">client.siteInvitations.<a href="./src/resources/site-invitations.ts">list</a>(siteID, { ...params }) -> SiteInvitationListResponsesMyCursorPage</code>
- <code title="delete /v1/site-invitations/{invitationId}">client.siteInvitations.<a href="./src/resources/site-invitations.ts">delete</a>(invitationID) -> SiteInvitationDeleteResponse</code>

# SiteMemberships

Types:

- <code><a href="./src/resources/site-memberships.ts">SiteMembershipCreateResponse</a></code>
- <code><a href="./src/resources/site-memberships.ts">SiteMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/site-memberships.ts">SiteMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/site-memberships.ts">SiteMembershipListResponse</a></code>
- <code><a href="./src/resources/site-memberships.ts">SiteMembershipDeleteResponse</a></code>

Methods:

- <code title="post /v1/sites/{siteId}/memberships">client.siteMemberships.<a href="./src/resources/site-memberships.ts">create</a>(siteID, { ...params }) -> SiteMembershipCreateResponse</code>
- <code title="get /v1/site-memberships/{membershipId}">client.siteMemberships.<a href="./src/resources/site-memberships.ts">retrieve</a>(membershipID) -> SiteMembershipRetrieveResponse</code>
- <code title="patch /v1/site-memberships/{membershipId}">client.siteMemberships.<a href="./src/resources/site-memberships.ts">update</a>(membershipID, { ...params }) -> SiteMembershipUpdateResponse</code>
- <code title="get /v1/sites/{siteId}/memberships">client.siteMemberships.<a href="./src/resources/site-memberships.ts">list</a>(siteID, { ...params }) -> SiteMembershipListResponsesMyCursorPage</code>
- <code title="delete /v1/site-memberships/{membershipId}">client.siteMemberships.<a href="./src/resources/site-memberships.ts">delete</a>(membershipID) -> SiteMembershipDeleteResponse</code>

# WorkspaceMemberships

Types:

- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipCreateResponse</a></code>
- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipUpdateResponse</a></code>
- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipListResponse</a></code>
- <code><a href="./src/resources/workspace-memberships.ts">WorkspaceMembershipDeleteResponse</a></code>

Methods:

- <code title="post /v1/workspaces/{workspaceId}/memberships">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">create</a>(workspaceID, { ...params }) -> WorkspaceMembershipCreateResponse</code>
- <code title="get /v1/workspace-memberships/{membershipId}">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">retrieve</a>(membershipID) -> WorkspaceMembershipRetrieveResponse</code>
- <code title="patch /v1/workspace-memberships/{membershipId}">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">update</a>(membershipID, { ...params }) -> WorkspaceMembershipUpdateResponse</code>
- <code title="get /v1/workspaces/{workspaceId}/memberships">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">list</a>(workspaceID, { ...params }) -> WorkspaceMembershipListResponsesMyCursorPage</code>
- <code title="delete /v1/workspace-memberships/{membershipId}">client.workspaceMemberships.<a href="./src/resources/workspace-memberships.ts">delete</a>(membershipID) -> WorkspaceMembershipDeleteResponse</code>

# WorkspaceInvitations

Types:

- <code><a href="./src/resources/workspace-invitations.ts">WorkspaceInvitationCreateResponse</a></code>
- <code><a href="./src/resources/workspace-invitations.ts">WorkspaceInvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/workspace-invitations.ts">WorkspaceInvitationListResponse</a></code>
- <code><a href="./src/resources/workspace-invitations.ts">WorkspaceInvitationDeleteResponse</a></code>

Methods:

- <code title="post /v1/workspaces/{workspaceId}/invitations">client.workspaceInvitations.<a href="./src/resources/workspace-invitations.ts">create</a>(workspaceID, { ...params }) -> WorkspaceInvitationCreateResponse</code>
- <code title="get /v1/workspace-invitations/{invitationId}">client.workspaceInvitations.<a href="./src/resources/workspace-invitations.ts">retrieve</a>(invitationID) -> WorkspaceInvitationRetrieveResponse</code>
- <code title="get /v1/workspaces/{workspaceId}/invitations">client.workspaceInvitations.<a href="./src/resources/workspace-invitations.ts">list</a>(workspaceID, { ...params }) -> WorkspaceInvitationListResponsesMyCursorPage</code>
- <code title="delete /v1/workspace-invitations/{invitationId}">client.workspaceInvitations.<a href="./src/resources/workspace-invitations.ts">delete</a>(invitationID) -> WorkspaceInvitationDeleteResponse</code>

# InvoiceItems

Types:

- <code><a href="./src/resources/invoice-items.ts">InvoiceItemCreateResponse</a></code>
- <code><a href="./src/resources/invoice-items.ts">InvoiceItemRetrieveResponse</a></code>
- <code><a href="./src/resources/invoice-items.ts">InvoiceItemUpdateResponse</a></code>
- <code><a href="./src/resources/invoice-items.ts">InvoiceItemListResponse</a></code>
- <code><a href="./src/resources/invoice-items.ts">InvoiceItemDeleteResponse</a></code>

Methods:

- <code title="post /v1/invoice-items">client.invoiceItems.<a href="./src/resources/invoice-items.ts">create</a>({ ...params }) -> InvoiceItemCreateResponse</code>
- <code title="get /v1/invoice-items/{itemId}">client.invoiceItems.<a href="./src/resources/invoice-items.ts">retrieve</a>(itemID) -> InvoiceItemRetrieveResponse</code>
- <code title="put /v1/invoice-items/{itemId}">client.invoiceItems.<a href="./src/resources/invoice-items.ts">update</a>(itemID, { ...params }) -> InvoiceItemUpdateResponse</code>
- <code title="get /v1/invoice-items">client.invoiceItems.<a href="./src/resources/invoice-items.ts">list</a>({ ...params }) -> InvoiceItemListResponsesMyCursorPage</code>
- <code title="delete /v1/invoice-items/{itemId}">client.invoiceItems.<a href="./src/resources/invoice-items.ts">delete</a>(itemID) -> InvoiceItemDeleteResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /v1/messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> MessageCreateResponse</code>
- <code title="get /v1/messages">client.messages.<a href="./src/resources/messages.ts">list</a>({ ...params }) -> MessageListResponsesMyCursorPage</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes.ts">QuoteCreateResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteRetrieveResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteUpdateResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteListResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteDeleteResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteAcceptResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteDeclineResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteSendResponse</a></code>

Methods:

- <code title="post /v1/quotes">client.quotes.<a href="./src/resources/quotes.ts">create</a>({ ...params }) -> QuoteCreateResponse</code>
- <code title="get /v1/quotes/{quoteId}">client.quotes.<a href="./src/resources/quotes.ts">retrieve</a>(quoteID) -> QuoteRetrieveResponse</code>
- <code title="put /v1/quotes/{quoteId}">client.quotes.<a href="./src/resources/quotes.ts">update</a>(quoteID, { ...params }) -> QuoteUpdateResponse</code>
- <code title="get /v1/quotes">client.quotes.<a href="./src/resources/quotes.ts">list</a>({ ...params }) -> QuoteListResponsesMyCursorPage</code>
- <code title="delete /v1/quotes/{quoteId}">client.quotes.<a href="./src/resources/quotes.ts">delete</a>(quoteID) -> QuoteDeleteResponse</code>
- <code title="post /v1/quotes/{quoteId}/accept">client.quotes.<a href="./src/resources/quotes.ts">accept</a>(quoteID) -> QuoteAcceptResponse</code>
- <code title="post /v1/quotes/{quoteId}/decline">client.quotes.<a href="./src/resources/quotes.ts">decline</a>(quoteID) -> QuoteDeclineResponse</code>
- <code title="post /v1/quotes/{quoteId}/send">client.quotes.<a href="./src/resources/quotes.ts">send</a>(quoteID, { ...params }) -> QuoteSendResponse</code>
