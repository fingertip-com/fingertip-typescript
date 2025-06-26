// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource siteContacts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.siteContacts.create({ email: 'email', siteId: 'siteId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.siteContacts.create({
      email: 'email',
      siteId: 'siteId',
      firstName: 'firstName',
      lastName: 'lastName',
      marketingStatus: 'SUBSCRIBED',
      notes: 'notes',
      phone: 'phone',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.siteContacts.list({ siteSlug: 'siteSlug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.siteContacts.list({
      siteSlug: 'siteSlug',
      createdAfter: 'createdAfter',
      cursor: 'cursor',
      hasAppointments: true,
      hasFormResponses: true,
      hasInvoices: true,
      hasOrders: true,
      hasPayments: true,
      hasQuotes: true,
      hasRatings: true,
      hasSegmentation: true,
      marketingStatuses: ['SUBSCRIBED'],
      pageSize: 0,
      search: 'search',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listSample', async () => {
    const responsePromise = client.siteContacts.listSample();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
