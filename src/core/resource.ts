// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Fingertip } from '../client';

export abstract class APIResource {
  protected _client: Fingertip;

  constructor(client: Fingertip) {
    this._client = client;
  }
}
