// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1GetSampleFormResponsesParams,
  V1GetSampleFormResponsesResponse,
  V1GetSampleSiteContactsResponse,
  V1ListBookingsParams,
  V1ListBookingsResponse,
  V1ListSitesParams,
  V1ListSitesResponse,
  V1ListWorkspacesParams,
  V1ListWorkspacesResponse,
  V1PingResponse,
} from './v1/v1';

export class API extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

API.V1 = V1;

export declare namespace API {
  export {
    V1 as V1,
    type V1GetSampleFormResponsesResponse as V1GetSampleFormResponsesResponse,
    type V1GetSampleSiteContactsResponse as V1GetSampleSiteContactsResponse,
    type V1ListBookingsResponse as V1ListBookingsResponse,
    type V1ListSitesResponse as V1ListSitesResponse,
    type V1ListWorkspacesResponse as V1ListWorkspacesResponse,
    type V1PingResponse as V1PingResponse,
    type V1GetSampleFormResponsesParams as V1GetSampleFormResponsesParams,
    type V1ListBookingsParams as V1ListBookingsParams,
    type V1ListSitesParams as V1ListSitesParams,
    type V1ListWorkspacesParams as V1ListWorkspacesParams,
  };
}
