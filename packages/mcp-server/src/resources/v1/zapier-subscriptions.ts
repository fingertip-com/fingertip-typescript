// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Fingertip from 'fingertip';

registerApiMethod({
  name: 'create_v1_zapier_subscriptions',
  description: 'Creates a new webhook subscription for receiving Zapier notifications',
  inputSchema: {
    type: 'object',
    properties: {
      targetUrl: {
        type: 'string',
        description: 'URL that will receive webhook notifications',
      },
      triggerKey: {
        type: 'string',
        description: 'Key that identifies the type of trigger for this subscription',
      },
      formTemplateSlug: {
        type: 'string',
        description: 'Slug of the form template to subscribe to, can be null or undefined',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.zapierSubscriptions.create(body);
  },
});

registerApiMethod({
  name: 'delete_v1_zapier_subscriptions',
  description: 'Removes an existing Zapier webhook subscription',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionId: {
        type: 'string',
        description: 'ID of the subscription to delete',
      },
    },
  },
  handler: (client: Fingertip, args: any) => {
    const { ...body } = args;
    return client.v1.zapierSubscriptions.delete(body);
  },
});
