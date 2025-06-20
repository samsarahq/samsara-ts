/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Samsara from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";

export declare namespace V1Messages {
    export interface Options {
        environment?: core.Supplier<environments.SamsaraEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Samsara-Version header */
        version?: "2025-05-12";
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        /** Override the X-Samsara-Version header */
        version?: "2025-05-12";
    }
}

export class V1Messages {
    protected readonly _options: V1Messages.Options;

    constructor(_options: V1Messages.Options = {}) {
        this._options = _options;
    }

    /**
     * <n class="warning">
     * <nh>
     * <i class="fa fa-exclamation-circle"></i>
     * This endpoint is still on our legacy API.
     * </nh>
     * </n>
     *
     * Get all messages.
     *
     *  <b>Rate limit:</b> 75 requests/sec (learn more about rate limits <a href="https://developers.samsara.com/docs/rate-limits" target="_blank">here</a>).
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Read Messages** under the Driver Workflow category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {Samsara.V1MessagesListRequest} request
     * @param {V1Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.v1Messages.list()
     */
    public list(
        request: Samsara.V1MessagesListRequest = {},
        requestOptions?: V1Messages.RequestOptions,
    ): core.HttpResponsePromise<Samsara.InlineResponse2005> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Samsara.V1MessagesListRequest = {},
        requestOptions?: V1Messages.RequestOptions,
    ): Promise<core.WithRawResponse<Samsara.InlineResponse2005>> {
        const { endMs, durationMs } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (endMs != null) {
            _queryParams["endMs"] = endMs.toString();
        }

        if (durationMs != null) {
            _queryParams["durationMs"] = durationMs.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                "v1/fleet/messages",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Samsara-Version": requestOptions?.version,
                }),
                requestOptions?.headers,
            ),
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Samsara.InlineResponse2005, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SamsaraError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SamsaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SamsaraTimeoutError("Timeout exceeded when calling GET /v1/fleet/messages.");
            case "unknown":
                throw new errors.SamsaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * <n class="warning">
     * <nh>
     * <i class="fa fa-exclamation-circle"></i>
     * This endpoint is still on our legacy API.
     * </nh>
     * </n>
     *
     * Send a message to a list of driver ids.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Write Messages** under the Driver Workflow category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {Samsara.InlineObject2} request
     * @param {V1Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.v1Messages.create({
     *         driverIds: [111, 222, 333],
     *         text: "This is a message."
     *     })
     */
    public create(
        request: Samsara.InlineObject2,
        requestOptions?: V1Messages.RequestOptions,
    ): core.HttpResponsePromise<Samsara.InlineResponse2006> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Samsara.InlineObject2,
        requestOptions?: V1Messages.RequestOptions,
    ): Promise<core.WithRawResponse<Samsara.InlineResponse2006>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                "v1/fleet/messages",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Samsara-Version": requestOptions?.version,
                }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Samsara.InlineResponse2006, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SamsaraError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SamsaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SamsaraTimeoutError("Timeout exceeded when calling POST /v1/fleet/messages.");
            case "unknown":
                throw new errors.SamsaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["SAMSARA_API_KEY"];
        if (bearer == null) {
            throw new errors.SamsaraError({
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a SAMSARA_API_KEY environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}
