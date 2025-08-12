// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.sites.pages.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'name',
      body_siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
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
    const response = await client.sites.pages.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'name',
      body_siteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      slug: 'slug',
      bannerMedia: {},
      description: 'description',
      logoMedia: {},
      position: 0,
      socialIcons: {},
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.sites.pages.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sites.pages.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { cursor: 'cursor', pageSize: 0, sortBy: 'createdAt', sortDirection: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Fingertip.NotFoundError);
  });
});
