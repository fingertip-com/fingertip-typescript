// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bookings', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.bookings.list({ siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
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
    const response = await client.bookings.list({
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cursor: 'cursor',
      pageSize: 0,
      sortBy: 'createdAt',
      sortDirection: 'asc',
      status: 'CANCELLED',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('accept: only required params', async () => {
    const responsePromise = client.bookings.accept('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // skipped: tests are disabled for the time being
  test.skip('accept: required and optional params', async () => {
    const response = await client.bookings.accept('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.bookings.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // skipped: tests are disabled for the time being
  test.skip('cancel: required and optional params', async () => {
    const response = await client.bookings.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cancellationReason: 'cancellationReason',
      chargeCancellationFee: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: only required params', async () => {
    const responsePromise = client.bookings.complete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // skipped: tests are disabled for the time being
  test.skip('complete: required and optional params', async () => {
    const response = await client.bookings.complete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      chargeAmountInCents: 0,
      noShow: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('decline: only required params', async () => {
    const responsePromise = client.bookings.decline('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  // skipped: tests are disabled for the time being
  test.skip('decline: required and optional params', async () => {
    const response = await client.bookings.decline('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cancellationReason: 'cancellationReason',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listSample', async () => {
    const responsePromise = client.bookings.listSample();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reschedule: only required params', async () => {
    const responsePromise = client.bookings.reschedule('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      endTime: '2019-12-27T18:11:19.117Z',
      startTime: '2019-12-27T18:11:19.117Z',
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
  test.skip('reschedule: required and optional params', async () => {
    const response = await client.bookings.reschedule('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      endTime: '2019-12-27T18:11:19.117Z',
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });
});
