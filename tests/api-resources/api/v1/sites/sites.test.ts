// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fingertip from 'fingertip';

const client = new Fingertip({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sites', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.sites.create({
      businessType: 'businessType',
      name: 'name',
      pages: [{ name: 'name', pageTheme: {}, slug: 'slug' }],
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.sites.create({
      businessType: 'businessType',
      name: 'name',
      pages: [
        {
          name: 'name',
          pageTheme: { componentPageThemeId: 'componentPageThemeId', content: {}, isComponent: true },
          slug: 'slug',
          bannerMedia: {},
          blocks: [
            {
              componentBlockId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              kind: 'kind',
              name: 'name',
              content: {},
              isComponent: true,
            },
          ],
          description: 'description',
          logoMedia: {},
          position: 0,
          socialIcons: {},
        },
      ],
      slug: 'slug',
      description: 'description',
      homePageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      locationId: 'locationId',
      logoMedia: {},
      socialIcons: {},
      status: 'EMPTY',
      timeZone: 'timeZone',
      workspaceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v1.sites.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.api.v1.sites.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.sites.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          businessType: 'businessType',
          description: 'description',
          homePageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          locationId: 'locationId',
          logoMedia: {},
          name: 'name',
          slug: 'slug',
          socialIcons: {},
          status: 'EMPTY',
          timeZone: 'timeZone',
          workspaceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Fingertip.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.api.v1.sites.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
