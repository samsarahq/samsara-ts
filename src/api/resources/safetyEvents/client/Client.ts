/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Samsara from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";
import { AuditLogs } from "../resources/auditLogs/client/Client.js";

export declare namespace SafetyEvents {
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

export class SafetyEvents {
    protected readonly _options: SafetyEvents.Options;
    protected _auditLogs: AuditLogs | undefined;

    constructor(_options: SafetyEvents.Options = {}) {
        this._options = _options;
    }

    public get auditLogs(): AuditLogs {
        return (this._auditLogs ??= new AuditLogs(this._options));
    }

    /**
     * Fetch safety events for the organization in a given time period.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Read Safety Events & Scores** under the Safety & Cameras category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {Samsara.SafetyEventsListRequest} request
     * @param {SafetyEvents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.safetyEvents.list({
     *         startTime: "startTime",
     *         endTime: "endTime"
     *     })
     */
    public async list(
        request: Samsara.SafetyEventsListRequest,
        requestOptions?: SafetyEvents.RequestOptions,
    ): Promise<core.Page<Samsara.SafetyEvent>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Samsara.SafetyEventsListRequest,
            ): Promise<core.WithRawResponse<Samsara.SafetyEventsListResponse>> => {
                const { after, startTime, endTime, tagIds, parentTagIds, vehicleIds } = request;
                const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
                if (after != null) {
                    _queryParams["after"] = after;
                }
                _queryParams["startTime"] = startTime;
                _queryParams["endTime"] = endTime;
                if (tagIds != null) {
                    if (Array.isArray(tagIds)) {
                        _queryParams["tagIds"] = tagIds.map((item) => item);
                    } else {
                        _queryParams["tagIds"] = tagIds;
                    }
                }
                if (parentTagIds != null) {
                    if (Array.isArray(parentTagIds)) {
                        _queryParams["parentTagIds"] = parentTagIds.map((item) => item);
                    } else {
                        _queryParams["parentTagIds"] = parentTagIds;
                    }
                }
                if (vehicleIds != null) {
                    if (Array.isArray(vehicleIds)) {
                        _queryParams["vehicleIds"] = vehicleIds.map((item) => item);
                    } else {
                        _queryParams["vehicleIds"] = vehicleIds;
                    }
                }
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.SamsaraEnvironment.ProductionApi,
                        "fleet/safety-events",
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
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        data: _response.body as Samsara.SafetyEventsListResponse,
                        rawResponse: _response.rawResponse,
                    };
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
                        throw new errors.SamsaraTimeoutError("Timeout exceeded when calling GET /fleet/safety-events.");
                    case "unknown":
                        throw new errors.SamsaraError({
                            message: _response.error.errorMessage,
                            rawResponse: _response.rawResponse,
                        });
                }
            },
        );
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Pageable<Samsara.SafetyEventsListResponse, Samsara.SafetyEvent>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => response?.pagination?.endCursor != null,
            getItems: (response) => response?.data ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "after", response?.pagination?.endCursor));
            },
        });
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
