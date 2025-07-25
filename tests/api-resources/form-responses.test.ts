// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource formResponses', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.formResponses.list({ formTemplateId: 'formTemplateId', siteId: 'siteId' });
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
    const response = await client.formResponses.list({
      formTemplateId: 'formTemplateId',
      siteId: 'siteId',
      cursor: 'cursor',
      pageSize: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listSample: only required params', async () => {
    const responsePromise = client.formResponses.listSample({ formTemplateSlug: 'formTemplateSlug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSample: required and optional params', async () => {
    const response = await client.formResponses.listSample({
      formTemplateSlug: 'formTemplateSlug',
      cursor: 'cursor',
      pageSize: 0,
    });
  });
});
