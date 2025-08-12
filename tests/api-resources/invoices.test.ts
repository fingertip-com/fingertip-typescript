// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      invoiceItems: [{ description: 'description', quantity: 0, taxRate: 0, unitPriceInCents: 0 }],
      siteContactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.invoices.create({
      invoiceItems: [
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
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      businessName: 'businessName',
      dueAt: 'dueAt',
      footer: 'footer',
      invoiceDiscounts: [
        {
          valueType: 'FIXED',
          discountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lineNumber: 0,
          valueFixedInCents: 0,
          valuePercent: 0,
        },
      ],
      memo: 'memo',
      passThroughPaymentFee: true,
      paymentReference: 'paymentReference',
      status: 'DRAFT',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.invoices.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      invoiceItems: [{ description: 'description', quantity: 0, taxRate: 0, unitPriceInCents: 0 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.invoices.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      invoiceItems: [
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
      dueAt: 'dueAt',
      footer: 'footer',
      invoiceDiscounts: [
        {
          valueType: 'FIXED',
          discountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lineNumber: 0,
          valueFixedInCents: 0,
          valuePercent: 0,
        },
      ],
      memo: 'memo',
      notes: 'notes',
      passThroughPaymentFee: true,
      paymentReference: 'paymentReference',
      siteContactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.invoices.list({ siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.invoices.list({
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cursor: 'cursor',
      pageSize: 0,
      sortBy: 'createdAt',
      sortDirection: 'asc',
      status: 'DRAFT',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.invoices.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('markPaid', async () => {
    const responsePromise = client.invoices.markPaid('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('markPaid: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.markPaid(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { completedAt: 'completedAt' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Fingertip.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.invoices.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // Prism tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.invoices.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteSlug: 'siteSlug',
    });
  });

  // Prism tests are disabled
  test.skip('void', async () => {
    const responsePromise = client.invoices.void('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('void: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.void('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {}, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Fingertip.NotFoundError);
  });
});
