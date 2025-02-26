// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // skipped: tests are disabled for the time being
  test.skip('getFormResponsesSample: only required params', async () => {
    const responsePromise = client.api.v1.getFormResponsesSample({
      form_template_slug: 'form_template_slug',
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
  test.skip('getFormResponsesSample: required and optional params', async () => {
    const response = await client.api.v1.getFormResponsesSample({ form_template_slug: 'form_template_slug' });
  });

  // skipped: tests are disabled for the time being
  test.skip('listBookings: only required params', async () => {
    const responsePromise = client.api.v1.listBookings({ siteId: 'siteId' });
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
    const response = await client.api.v1.listBookings({
      siteId: 'siteId',
      cursor: 'cursor',
      pageSize: 'pageSize',
      status: 'CANCELLED',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('ping2', async () => {
    const responsePromise = client.api.v1.ping2();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
