// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quotes', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.quotes.create({
      quoteItems: [{ description: 'description', quantity: 0, taxRate: 0, unitPriceInCents: 0 }],
      siteContactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      siteSlug: 'siteSlug',
      status: 'DRAFT',
    });
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
    const response = await client.quotes.create({
      quoteItems: [
        {
          description: 'description',
          quantity: 0,
          taxRate: 0,
          unitPriceInCents: 0,
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          itemId: 'itemId',
          lineNumber: 0,
        },
      ],
      siteContactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      siteSlug: 'siteSlug',
      status: 'DRAFT',
      currency: 'currency',
      expiresAt: 'expiresAt',
      footer: 'footer',
      memo: 'memo',
      notes: 'notes',
      quoteDiscounts: [
        {
          valueType: 'FIXED',
          discountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lineNumber: 0,
          valueFixedInCents: 0,
          valuePercent: 0,
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.quotes.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.quotes.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      quoteItems: [{ description: 'description', quantity: 0, taxRate: 0, unitPriceInCents: 0 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.quotes.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      quoteItems: [
        {
          description: 'description',
          quantity: 0,
          taxRate: 0,
          unitPriceInCents: 0,
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          itemId: 'itemId',
          lineNumber: 0,
        },
      ],
      expiresAt: 'expiresAt',
      footer: 'footer',
      memo: 'memo',
      notes: 'notes',
      quoteDiscounts: [
        {
          valueType: 'FIXED',
          discountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lineNumber: 0,
          valueFixedInCents: 0,
          valuePercent: 0,
        },
      ],
      siteContactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.quotes.list({ siteSlug: 'siteSlug' });
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
    const response = await client.quotes.list({
      siteSlug: 'siteSlug',
      cursor: 'cursor',
      pageSize: 0,
      search: 'search',
      siteContactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      statusFilters: ['DRAFT'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.quotes.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('send: only required params', async () => {
    const responsePromise = client.quotes.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteSlug: 'siteSlug',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('send: required and optional params', async () => {
    const response = await client.quotes.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteSlug: 'siteSlug',
    });
  });
});
