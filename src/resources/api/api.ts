// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1GetBookingsParams,
  V1GetBookingsResponse,
  V1GetFormResponsesSampleParams,
  V1GetFormResponsesSampleResponse,
  V1PingResponse,
} from './v1/v1';

export class API extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

API.V1 = V1;

export declare namespace API {
  export {
    V1 as V1,
    type V1GetBookingsResponse as V1GetBookingsResponse,
    type V1GetFormResponsesSampleResponse as V1GetFormResponsesSampleResponse,
    type V1PingResponse as V1PingResponse,
    type V1GetBookingsParams as V1GetBookingsParams,
    type V1GetFormResponsesSampleParams as V1GetFormResponsesSampleParams,
  };
}
