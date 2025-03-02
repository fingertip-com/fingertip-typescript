// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1GetFormResponsesSampleParams,
  V1GetFormResponsesSampleResponse,
  V1ListBookingsParams,
  V1ListBookingsResponse,
  V1PingResponse,
} from './v1/v1';

export class API extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

API.V1 = V1;

export declare namespace API {
  export {
    V1 as V1,
    type V1GetFormResponsesSampleResponse as V1GetFormResponsesSampleResponse,
    type V1ListBookingsResponse as V1ListBookingsResponse,
    type V1PingResponse as V1PingResponse,
    type V1GetFormResponsesSampleParams as V1GetFormResponsesSampleParams,
    type V1ListBookingsParams as V1ListBookingsParams,
  };
}
