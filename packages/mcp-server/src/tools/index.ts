// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_sites from './sites/create-sites';
import retrieve_sites from './sites/retrieve-sites';
import update_sites from './sites/update-sites';
import list_sites from './sites/list-sites';
import retrieve_analytics_sites from './sites/retrieve-analytics-sites';
import create_sites_pages from './sites/pages/create-sites-pages';
import list_sites_pages from './sites/pages/list-sites-pages';
import retrieve_pages from './pages/retrieve-pages';
import update_pages from './pages/update-pages';
import create_pages_blocks from './pages/blocks/create-pages-blocks';
import list_pages_blocks from './pages/blocks/list-pages-blocks';
import retrieve_pages_theme from './pages/theme/retrieve-pages-theme';
import update_pages_theme from './pages/theme/update-pages-theme';
import retrieve_blocks from './blocks/retrieve-blocks';
import update_blocks from './blocks/update-blocks';
import delete_blocks from './blocks/delete-blocks';
import retrieve_blog_posts from './blog-posts/retrieve-blog-posts';
import list_blog_posts from './blog-posts/list-blog-posts';
import list_bookings from './bookings/list-bookings';
import accept_bookings from './bookings/accept-bookings';
import cancel_bookings from './bookings/cancel-bookings';
import complete_bookings from './bookings/complete-bookings';
import decline_bookings from './bookings/decline-bookings';
import reschedule_bookings from './bookings/reschedule-bookings';
import retrieve_event_types from './event-types/retrieve-event-types';
import list_event_types from './event-types/list-event-types';
import list_form_responses from './form-responses/list-form-responses';
import retrieve_form_templates from './form-templates/retrieve-form-templates';
import list_form_templates from './form-templates/list-form-templates';
import create_invoices from './invoices/create-invoices';
import update_invoices from './invoices/update-invoices';
import list_invoices from './invoices/list-invoices';
import delete_invoices from './invoices/delete-invoices';
import mark_paid_invoices from './invoices/mark-paid-invoices';
import send_invoices from './invoices/send-invoices';
import void_invoices from './invoices/void-invoices';
import list_orders from './orders/list-orders';
import create_site_contacts from './site-contacts/create-site-contacts';
import list_site_contacts from './site-contacts/list-site-contacts';
import retrieve_site_invitations from './site-invitations/retrieve-site-invitations';
import retrieve_site_memberships from './site-memberships/retrieve-site-memberships';
import update_site_memberships from './site-memberships/update-site-memberships';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_sites);
addEndpoint(retrieve_sites);
addEndpoint(update_sites);
addEndpoint(list_sites);
addEndpoint(retrieve_analytics_sites);
addEndpoint(create_sites_pages);
addEndpoint(list_sites_pages);
addEndpoint(retrieve_pages);
addEndpoint(update_pages);
addEndpoint(create_pages_blocks);
addEndpoint(list_pages_blocks);
addEndpoint(retrieve_pages_theme);
addEndpoint(update_pages_theme);
addEndpoint(retrieve_blocks);
addEndpoint(update_blocks);
addEndpoint(delete_blocks);
addEndpoint(retrieve_blog_posts);
addEndpoint(list_blog_posts);
addEndpoint(list_bookings);
addEndpoint(accept_bookings);
addEndpoint(cancel_bookings);
addEndpoint(complete_bookings);
addEndpoint(decline_bookings);
addEndpoint(reschedule_bookings);
addEndpoint(retrieve_event_types);
addEndpoint(list_event_types);
addEndpoint(list_form_responses);
addEndpoint(retrieve_form_templates);
addEndpoint(list_form_templates);
addEndpoint(create_invoices);
addEndpoint(update_invoices);
addEndpoint(list_invoices);
addEndpoint(delete_invoices);
addEndpoint(mark_paid_invoices);
addEndpoint(send_invoices);
addEndpoint(void_invoices);
addEndpoint(list_orders);
addEndpoint(create_site_contacts);
addEndpoint(list_site_contacts);
addEndpoint(retrieve_site_invitations);
addEndpoint(retrieve_site_memberships);
addEndpoint(update_site_memberships);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
