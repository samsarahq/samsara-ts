/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments.js";
import * as core from "../../../../../../../../core/index.js";
import * as Samsara from "../../../../../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../../../core/headers.js";
import urlJoin from "url-join";
import * as errors from "../../../../../../../../errors/index.js";

export declare namespace FuelEnergy {
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

export class FuelEnergy {
    protected readonly _options: FuelEnergy.Options;

    constructor(_options: FuelEnergy.Options = {}) {
        this._options = _options;
    }

    /**
     * Get fuel and energy efficiency driver reports for the requested time range.
     *
     *  <b>Rate limit:</b> 5 requests/sec (learn more about rate limits <a href="https://developers.samsara.com/docs/rate-limits" target="_blank">here</a>).
     *
     * To use this endpoint, select **Read Fuel & Energy** under the Fuel & Energy category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * @param {Samsara.reports.drivers.FuelEnergyListRequest} request
     * @param {FuelEnergy.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Samsara.UnauthorizedError}
     * @throws {@link Samsara.NotFoundError}
     * @throws {@link Samsara.MethodNotAllowedError}
     * @throws {@link Samsara.TooManyRequestsError}
     * @throws {@link Samsara.InternalServerError}
     * @throws {@link Samsara.NotImplementedError}
     * @throws {@link Samsara.BadGatewayError}
     * @throws {@link Samsara.ServiceUnavailableError}
     * @throws {@link Samsara.GatewayTimeoutError}
     *
     * @example
     *     await client.reports.drivers.fuelEnergy.list({
     *         startDate: "startDate",
     *         endDate: "endDate"
     *     })
     */
    public list(
        request: Samsara.reports.drivers.FuelEnergyListRequest,
        requestOptions?: FuelEnergy.RequestOptions,
    ): core.HttpResponsePromise<Samsara.FuelEnergyGetFuelEnergyDriverReportsResponseBody> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Samsara.reports.drivers.FuelEnergyListRequest,
        requestOptions?: FuelEnergy.RequestOptions,
    ): Promise<core.WithRawResponse<Samsara.FuelEnergyGetFuelEnergyDriverReportsResponseBody>> {
        const { startDate, endDate, driverIds, tagIds, parentTagIds, after } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["startDate"] = startDate;
        _queryParams["endDate"] = endDate;
        if (driverIds != null) {
            if (Array.isArray(driverIds)) {
                _queryParams["driverIds"] = driverIds.map((item) => item);
            } else {
                _queryParams["driverIds"] = driverIds;
            }
        }

        if (tagIds != null) {
            _queryParams["tagIds"] = tagIds;
        }

        if (parentTagIds != null) {
            _queryParams["parentTagIds"] = parentTagIds;
        }

        if (after != null) {
            _queryParams["after"] = after;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                "fleet/reports/drivers/fuel-energy",
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
            return {
                data: _response.body as Samsara.FuelEnergyGetFuelEnergyDriverReportsResponseBody,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Samsara.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Samsara.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 405:
                    throw new Samsara.MethodNotAllowedError(_response.error.body as unknown, _response.rawResponse);
                case 429:
                    throw new Samsara.TooManyRequestsError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Samsara.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 501:
                    throw new Samsara.NotImplementedError(_response.error.body as unknown, _response.rawResponse);
                case 502:
                    throw new Samsara.BadGatewayError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Samsara.ServiceUnavailableError(_response.error.body as unknown, _response.rawResponse);
                case 504:
                    throw new Samsara.GatewayTimeoutError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.SamsaraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SamsaraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.SamsaraTimeoutError(
                    "Timeout exceeded when calling GET /fleet/reports/drivers/fuel-energy.",
                );
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
