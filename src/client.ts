// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type MyCursorPageParams, MyCursorPageResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  BlockDeleteResponse,
  BlockRetrieveResponse,
  BlockUpdateParams,
  BlockUpdateResponse,
  Blocks,
} from './resources/blocks';
import {
  BlogPostListParams,
  BlogPostListResponse,
  BlogPostListResponsesMyCursorPage,
  BlogPostRetrieveResponse,
  BlogPosts,
} from './resources/blog-posts';
import {
  BookingAcceptParams,
  BookingAcceptResponse,
  BookingCancelParams,
  BookingCancelResponse,
  BookingCompleteParams,
  BookingCompleteResponse,
  BookingDeclineParams,
  BookingDeclineResponse,
  BookingListParams,
  BookingListRequestsParams,
  BookingListRequestsResponse,
  BookingListRequestsResponsesMyCursorPage,
  BookingListResponse,
  BookingListResponsesMyCursorPage,
  BookingListSampleResponse,
  BookingRescheduleParams,
  BookingRescheduleResponse,
  Bookings,
} from './resources/bookings';
import {
  EventTypeListParams,
  EventTypeListResponse,
  EventTypeListResponsesMyCursorPage,
  EventTypeRetrieveResponse,
  EventTypes,
} from './resources/event-types';
import {
  FormResponseListParams,
  FormResponseListResponse,
  FormResponseListResponsesMyCursorPage,
  FormResponseListSampleParams,
  FormResponseListSampleResponse,
  FormResponseListSampleResponsesMyCursorPage,
  FormResponses,
} from './resources/form-responses';
import {
  FormTemplateListParams,
  FormTemplateListResponse,
  FormTemplateListResponsesMyCursorPage,
  FormTemplateRetrieveParams,
  FormTemplateRetrieveResponse,
  FormTemplates,
} from './resources/form-templates';
import {
  InvoiceItemCreateParams,
  InvoiceItemCreateResponse,
  InvoiceItemDeleteResponse,
  InvoiceItemListParams,
  InvoiceItemListResponse,
  InvoiceItemListResponsesMyCursorPage,
  InvoiceItemRetrieveResponse,
  InvoiceItemUpdateParams,
  InvoiceItemUpdateResponse,
  InvoiceItems,
} from './resources/invoice-items';
import {
  InvoiceCreateParams,
  InvoiceCreateResponse,
  InvoiceDeleteResponse,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceListResponsesMyCursorPage,
  InvoiceMarkPaidParams,
  InvoiceMarkPaidResponse,
  InvoiceSendParams,
  InvoiceSendResponse,
  InvoiceUpdateParams,
  InvoiceUpdateResponse,
  InvoiceVoidParams,
  InvoiceVoidResponse,
  Invoices,
} from './resources/invoices';
import {
  MessageCreateParams,
  MessageCreateResponse,
  MessageListParams,
  MessageListResponse,
  MessageListResponsesMyCursorPage,
  Messages,
} from './resources/messages';
import {
  OrderListParams,
  OrderListResponse,
  OrderListResponsesMyCursorPage,
  OrderListSampleParams,
  OrderListSampleResponse,
  OrderListSampleResponsesMyCursorPage,
  Orders,
} from './resources/orders';
import { Ping, PingCheckResponse } from './resources/ping';
import {
  QuoteAcceptParams,
  QuoteAcceptResponse,
  QuoteCreateParams,
  QuoteCreateResponse,
  QuoteDeclineParams,
  QuoteDeclineResponse,
  QuoteDeleteResponse,
  QuoteListParams,
  QuoteListResponse,
  QuoteListResponsesMyCursorPage,
  QuoteRetrieveResponse,
  QuoteSendParams,
  QuoteSendResponse,
  QuoteUpdateParams,
  QuoteUpdateResponse,
  Quotes,
} from './resources/quotes';
import {
  SiteContactCreateParams,
  SiteContactCreateResponse,
  SiteContactListParams,
  SiteContactListResponse,
  SiteContactListResponsesMyCursorPage,
  SiteContactListSampleResponse,
  SiteContacts,
} from './resources/site-contacts';
import {
  SiteInvitationCreateParams,
  SiteInvitationCreateResponse,
  SiteInvitationDeleteResponse,
  SiteInvitationListParams,
  SiteInvitationListResponse,
  SiteInvitationListResponsesMyCursorPage,
  SiteInvitationRetrieveResponse,
  SiteInvitations,
} from './resources/site-invitations';
import {
  SiteMembershipCreateParams,
  SiteMembershipCreateResponse,
  SiteMembershipDeleteResponse,
  SiteMembershipListParams,
  SiteMembershipListResponse,
  SiteMembershipListResponsesMyCursorPage,
  SiteMembershipRetrieveResponse,
  SiteMembershipUpdateParams,
  SiteMembershipUpdateResponse,
  SiteMemberships,
} from './resources/site-memberships';
import {
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteResponse,
  WebhookListParams,
  WebhookListResponse,
  WebhookListResponsesMyCursorPage,
  WebhookRetrieveResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
} from './resources/webhooks';
import {
  WorkspaceInvitationCreateParams,
  WorkspaceInvitationCreateResponse,
  WorkspaceInvitationDeleteResponse,
  WorkspaceInvitationListParams,
  WorkspaceInvitationListResponse,
  WorkspaceInvitationListResponsesMyCursorPage,
  WorkspaceInvitationRetrieveResponse,
  WorkspaceInvitations,
} from './resources/workspace-invitations';
import {
  WorkspaceMembershipCreateParams,
  WorkspaceMembershipCreateResponse,
  WorkspaceMembershipDeleteResponse,
  WorkspaceMembershipListParams,
  WorkspaceMembershipListResponse,
  WorkspaceMembershipListResponsesMyCursorPage,
  WorkspaceMembershipRetrieveResponse,
  WorkspaceMembershipUpdateParams,
  WorkspaceMembershipUpdateResponse,
  WorkspaceMemberships,
} from './resources/workspace-memberships';
import {
  PageDeleteResponse,
  PageRetrieveResponse,
  PageUpdateParams,
  PageUpdateResponse,
  Pages,
} from './resources/pages/pages';
import {
  SiteCreateParams,
  SiteCreateResponse,
  SiteDeleteResponse,
  SiteListParams,
  SiteListResponse,
  SiteListResponsesMyCursorPage,
  SiteRetrieveAnalyticsParams,
  SiteRetrieveAnalyticsResponse,
  SiteRetrieveResponse,
  SiteUpdateParams,
  SiteUpdateResponse,
  Sites,
} from './resources/sites/sites';
import {
  WorkspaceListParams,
  WorkspaceListResponse,
  WorkspaceListResponsesMyCursorPage,
  WorkspaceRetrieveResponse,
  WorkspaceUpdateParams,
  WorkspaceUpdateResponse,
  Workspaces,
} from './resources/workspaces/workspaces';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Fingertip API authentication using Bearer token
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['FINGERTIP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['FINGERTIP_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Fingertip API.
 */
export class Fingertip {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Fingertip API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['FINGERTIP_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['FINGERTIP_BASE_URL'] ?? https://api.fingertip.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('FINGERTIP_BASE_URL'),
    apiKey = readEnv('FINGERTIP_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.FingertipError(
        "The FINGERTIP_API_KEY environment variable is missing or empty; either provide it, or instantiate the Fingertip client with an apiKey option, like new Fingertip({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.fingertip.com`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Fingertip.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('FINGERTIP_LOG'), "process.env['FINGERTIP_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.fingertip.com';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Fingertip, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Fingertip = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static FingertipError = Errors.FingertipError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  ping: API.Ping = new API.Ping(this);
  sites: API.Sites = new API.Sites(this);
  pages: API.Pages = new API.Pages(this);
  blocks: API.Blocks = new API.Blocks(this);
  blogPosts: API.BlogPosts = new API.BlogPosts(this);
  bookings: API.Bookings = new API.Bookings(this);
  eventTypes: API.EventTypes = new API.EventTypes(this);
  formResponses: API.FormResponses = new API.FormResponses(this);
  formTemplates: API.FormTemplates = new API.FormTemplates(this);
  invoices: API.Invoices = new API.Invoices(this);
  orders: API.Orders = new API.Orders(this);
  siteContacts: API.SiteContacts = new API.SiteContacts(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  workspaces: API.Workspaces = new API.Workspaces(this);
  siteInvitations: API.SiteInvitations = new API.SiteInvitations(this);
  siteMemberships: API.SiteMemberships = new API.SiteMemberships(this);
  workspaceMemberships: API.WorkspaceMemberships = new API.WorkspaceMemberships(this);
  workspaceInvitations: API.WorkspaceInvitations = new API.WorkspaceInvitations(this);
  invoiceItems: API.InvoiceItems = new API.InvoiceItems(this);
  messages: API.Messages = new API.Messages(this);
  quotes: API.Quotes = new API.Quotes(this);
}
Fingertip.Ping = Ping;
Fingertip.Sites = Sites;
Fingertip.Pages = Pages;
Fingertip.Blocks = Blocks;
Fingertip.BlogPosts = BlogPosts;
Fingertip.Bookings = Bookings;
Fingertip.EventTypes = EventTypes;
Fingertip.FormResponses = FormResponses;
Fingertip.FormTemplates = FormTemplates;
Fingertip.Invoices = Invoices;
Fingertip.Orders = Orders;
Fingertip.SiteContacts = SiteContacts;
Fingertip.Webhooks = Webhooks;
Fingertip.Workspaces = Workspaces;
Fingertip.SiteInvitations = SiteInvitations;
Fingertip.SiteMemberships = SiteMemberships;
Fingertip.WorkspaceMemberships = WorkspaceMemberships;
Fingertip.WorkspaceInvitations = WorkspaceInvitations;
Fingertip.InvoiceItems = InvoiceItems;
Fingertip.Messages = Messages;
Fingertip.Quotes = Quotes;
export declare namespace Fingertip {
  export type RequestOptions = Opts.RequestOptions;

  export import MyCursorPage = Pagination.MyCursorPage;
  export { type MyCursorPageParams as MyCursorPageParams, type MyCursorPageResponse as MyCursorPageResponse };

  export { Ping as Ping, type PingCheckResponse as PingCheckResponse };

  export {
    Sites as Sites,
    type SiteCreateResponse as SiteCreateResponse,
    type SiteRetrieveResponse as SiteRetrieveResponse,
    type SiteUpdateResponse as SiteUpdateResponse,
    type SiteListResponse as SiteListResponse,
    type SiteDeleteResponse as SiteDeleteResponse,
    type SiteRetrieveAnalyticsResponse as SiteRetrieveAnalyticsResponse,
    type SiteListResponsesMyCursorPage as SiteListResponsesMyCursorPage,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
    type SiteListParams as SiteListParams,
    type SiteRetrieveAnalyticsParams as SiteRetrieveAnalyticsParams,
  };

  export {
    Pages as Pages,
    type PageRetrieveResponse as PageRetrieveResponse,
    type PageUpdateResponse as PageUpdateResponse,
    type PageDeleteResponse as PageDeleteResponse,
    type PageUpdateParams as PageUpdateParams,
  };

  export {
    Blocks as Blocks,
    type BlockRetrieveResponse as BlockRetrieveResponse,
    type BlockUpdateResponse as BlockUpdateResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockUpdateParams as BlockUpdateParams,
  };

  export {
    BlogPosts as BlogPosts,
    type BlogPostRetrieveResponse as BlogPostRetrieveResponse,
    type BlogPostListResponse as BlogPostListResponse,
    type BlogPostListResponsesMyCursorPage as BlogPostListResponsesMyCursorPage,
    type BlogPostListParams as BlogPostListParams,
  };

  export {
    Bookings as Bookings,
    type BookingListResponse as BookingListResponse,
    type BookingAcceptResponse as BookingAcceptResponse,
    type BookingCancelResponse as BookingCancelResponse,
    type BookingCompleteResponse as BookingCompleteResponse,
    type BookingDeclineResponse as BookingDeclineResponse,
    type BookingListRequestsResponse as BookingListRequestsResponse,
    type BookingListSampleResponse as BookingListSampleResponse,
    type BookingRescheduleResponse as BookingRescheduleResponse,
    type BookingListResponsesMyCursorPage as BookingListResponsesMyCursorPage,
    type BookingListRequestsResponsesMyCursorPage as BookingListRequestsResponsesMyCursorPage,
    type BookingListParams as BookingListParams,
    type BookingAcceptParams as BookingAcceptParams,
    type BookingCancelParams as BookingCancelParams,
    type BookingCompleteParams as BookingCompleteParams,
    type BookingDeclineParams as BookingDeclineParams,
    type BookingListRequestsParams as BookingListRequestsParams,
    type BookingRescheduleParams as BookingRescheduleParams,
  };

  export {
    EventTypes as EventTypes,
    type EventTypeRetrieveResponse as EventTypeRetrieveResponse,
    type EventTypeListResponse as EventTypeListResponse,
    type EventTypeListResponsesMyCursorPage as EventTypeListResponsesMyCursorPage,
    type EventTypeListParams as EventTypeListParams,
  };

  export {
    FormResponses as FormResponses,
    type FormResponseListResponse as FormResponseListResponse,
    type FormResponseListSampleResponse as FormResponseListSampleResponse,
    type FormResponseListResponsesMyCursorPage as FormResponseListResponsesMyCursorPage,
    type FormResponseListSampleResponsesMyCursorPage as FormResponseListSampleResponsesMyCursorPage,
    type FormResponseListParams as FormResponseListParams,
    type FormResponseListSampleParams as FormResponseListSampleParams,
  };

  export {
    FormTemplates as FormTemplates,
    type FormTemplateRetrieveResponse as FormTemplateRetrieveResponse,
    type FormTemplateListResponse as FormTemplateListResponse,
    type FormTemplateListResponsesMyCursorPage as FormTemplateListResponsesMyCursorPage,
    type FormTemplateRetrieveParams as FormTemplateRetrieveParams,
    type FormTemplateListParams as FormTemplateListParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceDeleteResponse as InvoiceDeleteResponse,
    type InvoiceMarkPaidResponse as InvoiceMarkPaidResponse,
    type InvoiceSendResponse as InvoiceSendResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceListResponsesMyCursorPage as InvoiceListResponsesMyCursorPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceMarkPaidParams as InvoiceMarkPaidParams,
    type InvoiceSendParams as InvoiceSendParams,
    type InvoiceVoidParams as InvoiceVoidParams,
  };

  export {
    Orders as Orders,
    type OrderListResponse as OrderListResponse,
    type OrderListSampleResponse as OrderListSampleResponse,
    type OrderListResponsesMyCursorPage as OrderListResponsesMyCursorPage,
    type OrderListSampleResponsesMyCursorPage as OrderListSampleResponsesMyCursorPage,
    type OrderListParams as OrderListParams,
    type OrderListSampleParams as OrderListSampleParams,
  };

  export {
    SiteContacts as SiteContacts,
    type SiteContactCreateResponse as SiteContactCreateResponse,
    type SiteContactListResponse as SiteContactListResponse,
    type SiteContactListSampleResponse as SiteContactListSampleResponse,
    type SiteContactListResponsesMyCursorPage as SiteContactListResponsesMyCursorPage,
    type SiteContactCreateParams as SiteContactCreateParams,
    type SiteContactListParams as SiteContactListParams,
  };

  export {
    Webhooks as Webhooks,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookListResponsesMyCursorPage as WebhookListResponsesMyCursorPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };

  export {
    Workspaces as Workspaces,
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceListResponse as WorkspaceListResponse,
    type WorkspaceListResponsesMyCursorPage as WorkspaceListResponsesMyCursorPage,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceListParams as WorkspaceListParams,
  };

  export {
    SiteInvitations as SiteInvitations,
    type SiteInvitationCreateResponse as SiteInvitationCreateResponse,
    type SiteInvitationRetrieveResponse as SiteInvitationRetrieveResponse,
    type SiteInvitationListResponse as SiteInvitationListResponse,
    type SiteInvitationDeleteResponse as SiteInvitationDeleteResponse,
    type SiteInvitationListResponsesMyCursorPage as SiteInvitationListResponsesMyCursorPage,
    type SiteInvitationCreateParams as SiteInvitationCreateParams,
    type SiteInvitationListParams as SiteInvitationListParams,
  };

  export {
    SiteMemberships as SiteMemberships,
    type SiteMembershipCreateResponse as SiteMembershipCreateResponse,
    type SiteMembershipRetrieveResponse as SiteMembershipRetrieveResponse,
    type SiteMembershipUpdateResponse as SiteMembershipUpdateResponse,
    type SiteMembershipListResponse as SiteMembershipListResponse,
    type SiteMembershipDeleteResponse as SiteMembershipDeleteResponse,
    type SiteMembershipListResponsesMyCursorPage as SiteMembershipListResponsesMyCursorPage,
    type SiteMembershipCreateParams as SiteMembershipCreateParams,
    type SiteMembershipUpdateParams as SiteMembershipUpdateParams,
    type SiteMembershipListParams as SiteMembershipListParams,
  };

  export {
    WorkspaceMemberships as WorkspaceMemberships,
    type WorkspaceMembershipCreateResponse as WorkspaceMembershipCreateResponse,
    type WorkspaceMembershipRetrieveResponse as WorkspaceMembershipRetrieveResponse,
    type WorkspaceMembershipUpdateResponse as WorkspaceMembershipUpdateResponse,
    type WorkspaceMembershipListResponse as WorkspaceMembershipListResponse,
    type WorkspaceMembershipDeleteResponse as WorkspaceMembershipDeleteResponse,
    type WorkspaceMembershipListResponsesMyCursorPage as WorkspaceMembershipListResponsesMyCursorPage,
    type WorkspaceMembershipCreateParams as WorkspaceMembershipCreateParams,
    type WorkspaceMembershipUpdateParams as WorkspaceMembershipUpdateParams,
    type WorkspaceMembershipListParams as WorkspaceMembershipListParams,
  };

  export {
    WorkspaceInvitations as WorkspaceInvitations,
    type WorkspaceInvitationCreateResponse as WorkspaceInvitationCreateResponse,
    type WorkspaceInvitationRetrieveResponse as WorkspaceInvitationRetrieveResponse,
    type WorkspaceInvitationListResponse as WorkspaceInvitationListResponse,
    type WorkspaceInvitationDeleteResponse as WorkspaceInvitationDeleteResponse,
    type WorkspaceInvitationListResponsesMyCursorPage as WorkspaceInvitationListResponsesMyCursorPage,
    type WorkspaceInvitationCreateParams as WorkspaceInvitationCreateParams,
    type WorkspaceInvitationListParams as WorkspaceInvitationListParams,
  };

  export {
    InvoiceItems as InvoiceItems,
    type InvoiceItemCreateResponse as InvoiceItemCreateResponse,
    type InvoiceItemRetrieveResponse as InvoiceItemRetrieveResponse,
    type InvoiceItemUpdateResponse as InvoiceItemUpdateResponse,
    type InvoiceItemListResponse as InvoiceItemListResponse,
    type InvoiceItemDeleteResponse as InvoiceItemDeleteResponse,
    type InvoiceItemListResponsesMyCursorPage as InvoiceItemListResponsesMyCursorPage,
    type InvoiceItemCreateParams as InvoiceItemCreateParams,
    type InvoiceItemUpdateParams as InvoiceItemUpdateParams,
    type InvoiceItemListParams as InvoiceItemListParams,
  };

  export {
    Messages as Messages,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageListResponsesMyCursorPage as MessageListResponsesMyCursorPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Quotes as Quotes,
    type QuoteCreateResponse as QuoteCreateResponse,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteUpdateResponse as QuoteUpdateResponse,
    type QuoteListResponse as QuoteListResponse,
    type QuoteDeleteResponse as QuoteDeleteResponse,
    type QuoteAcceptResponse as QuoteAcceptResponse,
    type QuoteDeclineResponse as QuoteDeclineResponse,
    type QuoteSendResponse as QuoteSendResponse,
    type QuoteListResponsesMyCursorPage as QuoteListResponsesMyCursorPage,
    type QuoteCreateParams as QuoteCreateParams,
    type QuoteUpdateParams as QuoteUpdateParams,
    type QuoteListParams as QuoteListParams,
    type QuoteAcceptParams as QuoteAcceptParams,
    type QuoteDeclineParams as QuoteDeclineParams,
    type QuoteSendParams as QuoteSendParams,
  };
}
