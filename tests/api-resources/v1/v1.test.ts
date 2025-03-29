// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // skipped: tests are disabled for the time being
  test.skip('getFormResponsesSample: only required params', async () => {
    const responsePromise = client.v1.getFormResponsesSample({ form_template_slug: 'form_template_slug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getFormResponsesSample: required and optional params', async () => {
    const response = await client.v1.getFormResponsesSample({ form_template_slug: 'form_template_slug' });
  });

  // skipped: tests are disabled for the time being
  test.skip('listBookings: only required params', async () => {
    const responsePromise = client.v1.listBookings({ siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBookings: required and optional params', async () => {
    const response = await client.v1.listBookings({
      siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cursor: 'cursor',
      pageSize: 0,
      sortBy: 'createdAt',
      sortDirection: 'asc',
      status: 'CANCELLED',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('ping', async () => {
    const responsePromise = client.v1.ping();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
