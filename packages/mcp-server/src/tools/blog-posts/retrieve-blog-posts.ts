// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'fingertip-mcp/filtering';
import { asTextContentResult } from 'fingertip-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fingertip from 'fingertip';

export const metadata: Metadata = {
  resource: 'blog_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/blog-posts/{blogPostId}',
  operationId: 'getBlogPost',
};

export const tool: Tool = {
  name: 'retrieve_blog_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a specific published blog post by ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Successful blog post retrieval response',\n  properties: {\n    post: {\n      type: 'object',\n      description: 'The requested blog post',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the blog post'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time when the post was created',\n          format: 'date-time'\n        },\n        excerpt: {\n          type: 'string',\n          description: 'Excerpt of the blog post content'\n        },\n        featureImageCaption: {\n          type: 'string',\n          description: 'Caption for the feature image'\n        },\n        html: {\n          type: 'string',\n          description: 'Rendered HTML content'\n        },\n        isFeatured: {\n          type: 'boolean',\n          description: 'Whether this post is featured'\n        },\n        metaDescription: {\n          type: 'string',\n          description: 'SEO meta description'\n        },\n        metaTitle: {\n          type: 'string',\n          description: 'SEO meta title'\n        },\n        publishedAt: {\n          type: 'string',\n          description: 'Date and time when the post was published',\n          format: 'date-time'\n        },\n        siteId: {\n          type: 'string',\n          description: 'ID of the site this post belongs to'\n        },\n        slug: {\n          type: 'string',\n          description: 'URL-friendly identifier for the blog post'\n        },\n        status: {\n          type: 'string',\n          description: 'Publication status of the post',\n          enum: [            'PUBLIC',\n            'DRAFT',\n            'UNLISTED'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the blog post'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time when the post was last updated',\n          format: 'date-time'\n        },\n        featureImage: {\n          type: 'object',\n          description: 'Feature image for the blog post'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'excerpt',\n        'featureImageCaption',\n        'html',\n        'isFeatured',\n        'metaDescription',\n        'metaTitle',\n        'publishedAt',\n        'siteId',\n        'slug',\n        'status',\n        'title',\n        'updatedAt'\n      ]\n    }\n  },\n  required: [    'post'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      blogPostId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Fingertip, args: Record<string, unknown> | undefined) => {
  const { blogPostId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.blogPosts.retrieve(blogPostId)));
};

export default { metadata, tool, handler };
