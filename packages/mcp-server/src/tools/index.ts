// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import get_form_responses_sample_v1 from './v1/get-form-responses-sample-v1';
import list_bookings_v1 from './v1/list-bookings-v1';
import ping_v1 from './v1/ping-v1';
import retrieve_sample_bookings_v1 from './v1/retrieve-sample-bookings-v1';
import retrieve_v1_pages from './v1/pages/retrieve-v1-pages';
import update_v1_pages from './v1/pages/update-v1-pages';
import delete_v1_pages from './v1/pages/delete-v1-pages';
import create_pages_v1_blocks from './v1/pages/blocks/create-pages-v1-blocks';
import list_pages_v1_blocks from './v1/pages/blocks/list-pages-v1-blocks';
import retrieve_pages_v1_theme from './v1/pages/theme/retrieve-pages-v1-theme';
import update_pages_v1_theme from './v1/pages/theme/update-pages-v1-theme';
import retrieve_v1_blocks from './v1/blocks/retrieve-v1-blocks';
import update_v1_blocks from './v1/blocks/update-v1-blocks';
import delete_v1_blocks from './v1/blocks/delete-v1-blocks';
import create_v1_sites from './v1/sites/create-v1-sites';
import retrieve_v1_sites from './v1/sites/retrieve-v1-sites';
import update_v1_sites from './v1/sites/update-v1-sites';
import list_v1_sites from './v1/sites/list-v1-sites';
import delete_v1_sites from './v1/sites/delete-v1-sites';
import create_sites_v1_pages from './v1/sites/pages/create-sites-v1-pages';
import list_sites_v1_pages from './v1/sites/pages/list-sites-v1-pages';
import create_sites_v1_invitations from './v1/sites/invitations/create-sites-v1-invitations';
import list_sites_v1_invitations from './v1/sites/invitations/list-sites-v1-invitations';
import create_sites_v1_memberships from './v1/sites/memberships/create-sites-v1-memberships';
import list_sites_v1_memberships from './v1/sites/memberships/list-sites-v1-memberships';
import create_v1_site_contacts from './v1/site-contacts/create-v1-site-contacts';
import sample_v1_site_contacts from './v1/site-contacts/sample-v1-site-contacts';
import retrieve_v1_workspaces from './v1/workspaces/retrieve-v1-workspaces';
import update_v1_workspaces from './v1/workspaces/update-v1-workspaces';
import list_v1_workspaces from './v1/workspaces/list-v1-workspaces';
import create_workspaces_v1_invitations from './v1/workspaces/invitations/create-workspaces-v1-invitations';
import list_workspaces_v1_invitations from './v1/workspaces/invitations/list-workspaces-v1-invitations';
import create_workspaces_v1_memberships from './v1/workspaces/memberships/create-workspaces-v1-memberships';
import list_workspaces_v1_memberships from './v1/workspaces/memberships/list-workspaces-v1-memberships';
import create_v1_zapier_subscriptions from './v1/zapier-subscriptions/create-v1-zapier-subscriptions';
import delete_v1_zapier_subscriptions from './v1/zapier-subscriptions/delete-v1-zapier-subscriptions';
import retrieve_v1_site_invitations from './v1/site-invitations/retrieve-v1-site-invitations';
import delete_v1_site_invitations from './v1/site-invitations/delete-v1-site-invitations';
import retrieve_v1_site_memberships from './v1/site-memberships/retrieve-v1-site-memberships';
import update_v1_site_memberships from './v1/site-memberships/update-v1-site-memberships';
import delete_v1_site_memberships from './v1/site-memberships/delete-v1-site-memberships';
import retrieve_v1_invitations from './v1/invitations/retrieve-v1-invitations';
import delete_v1_invitations from './v1/invitations/delete-v1-invitations';
import retrieve_v1_workspace_memberships from './v1/workspace-memberships/retrieve-v1-workspace-memberships';
import update_v1_workspace_memberships from './v1/workspace-memberships/update-v1-workspace-memberships';
import delete_v1_workspace_memberships from './v1/workspace-memberships/delete-v1-workspace-memberships';

export type HandlerFunction = (client: Fingertip, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_form_responses_sample_v1);
addEndpoint(list_bookings_v1);
addEndpoint(ping_v1);
addEndpoint(retrieve_sample_bookings_v1);
addEndpoint(retrieve_v1_pages);
addEndpoint(update_v1_pages);
addEndpoint(delete_v1_pages);
addEndpoint(create_pages_v1_blocks);
addEndpoint(list_pages_v1_blocks);
addEndpoint(retrieve_pages_v1_theme);
addEndpoint(update_pages_v1_theme);
addEndpoint(retrieve_v1_blocks);
addEndpoint(update_v1_blocks);
addEndpoint(delete_v1_blocks);
addEndpoint(create_v1_sites);
addEndpoint(retrieve_v1_sites);
addEndpoint(update_v1_sites);
addEndpoint(list_v1_sites);
addEndpoint(delete_v1_sites);
addEndpoint(create_sites_v1_pages);
addEndpoint(list_sites_v1_pages);
addEndpoint(create_sites_v1_invitations);
addEndpoint(list_sites_v1_invitations);
addEndpoint(create_sites_v1_memberships);
addEndpoint(list_sites_v1_memberships);
addEndpoint(create_v1_site_contacts);
addEndpoint(sample_v1_site_contacts);
addEndpoint(retrieve_v1_workspaces);
addEndpoint(update_v1_workspaces);
addEndpoint(list_v1_workspaces);
addEndpoint(create_workspaces_v1_invitations);
addEndpoint(list_workspaces_v1_invitations);
addEndpoint(create_workspaces_v1_memberships);
addEndpoint(list_workspaces_v1_memberships);
addEndpoint(create_v1_zapier_subscriptions);
addEndpoint(delete_v1_zapier_subscriptions);
addEndpoint(retrieve_v1_site_invitations);
addEndpoint(delete_v1_site_invitations);
addEndpoint(retrieve_v1_site_memberships);
addEndpoint(update_v1_site_memberships);
addEndpoint(delete_v1_site_memberships);
addEndpoint(retrieve_v1_invitations);
addEndpoint(delete_v1_invitations);
addEndpoint(retrieve_v1_workspace_memberships);
addEndpoint(update_v1_workspace_memberships);
addEndpoint(delete_v1_workspace_memberships);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
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
