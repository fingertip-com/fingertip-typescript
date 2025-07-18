// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'sites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/sites/{siteId}/analytics',
  operationId: 'getSiteAnalytics',
};

export const tool: Tool = {
  name: 'retrieve_analytics_sites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves comprehensive analytics data including views, clicks, traffic sources, geographic data, and store metrics for the specified site",
  inputSchema: {
    type: 'object',
    properties: {
      siteId: {
        type: 'string',
      },
      includeStore: {
        type: 'boolean',
        description: 'Include store analytics data',
      },
      period: {
        type: 'string',
        description: 'Time period for analytics data',
        enum: ['7d', '30d', '90d', '1y', 'all'],
      },
    },
    required: ['siteId'],
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { siteId, ...body } = args as any;
  return asTextContentResult(await client.sites.retrieveAnalytics(siteId, body));
};

export default { metadata, tool, handler };
