/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Samsara from "../../../index.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";

export declare namespace Contacts {
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

export class Contacts {
    protected readonly _options: Contacts.Options;

    constructor(_options: Contacts.Options = {}) {
        this._options = _options;
    }

    /**
     * Returns a list of all contacts in an organization.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Read Alert Contacts** under the Setup & Administration category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {Samsara.ContactsListRequest} request
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contacts.list()
     */
    public async list(
        request: Samsara.ContactsListRequest = {},
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.Page<Samsara.Contact>> {
        const list = core.HttpResponsePromise.interceptFunction(
            async (
                request: Samsara.ContactsListRequest,
            ): Promise<core.WithRawResponse<Samsara.ListContactsResponse>> => {
                const { limit, after } = request;
                const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
                if (limit != null) {
                    _queryParams["limit"] = limit.toString();
                }
                if (after != null) {
                    _queryParams["after"] = after;
                }
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.baseUrl)) ??
                            (await core.Supplier.get(this._options.environment)) ??
                            environments.SamsaraEnvironment.ProductionApi,
                        "contacts",
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
                    return { data: _response.body as Samsara.ListContactsResponse, rawResponse: _response.rawResponse };
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
                        throw new errors.SamsaraTimeoutError("Timeout exceeded when calling GET /contacts.");
                    case "unknown":
                        throw new errors.SamsaraError({
                            message: _response.error.errorMessage,
                            rawResponse: _response.rawResponse,
                        });
                }
            },
        );
        const dataWithRawResponse = await list(request).withRawResponse();
        return new core.Pageable<Samsara.ListContactsResponse, Samsara.Contact>({
            response: dataWithRawResponse.data,
            rawResponse: dataWithRawResponse.rawResponse,
            hasNextPage: (response) => response?.pagination?.endCursor != null,
            getItems: (response) => response?.data ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "after", response?.pagination?.endCursor));
            },
        });
    }

    /**
     * Add a contact to the organization.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Write Alert Contacts** under the Setup & Administration category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {Samsara.CreateContactRequest} request
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contacts.create()
     */
    public create(
        request: Samsara.CreateContactRequest = {},
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Samsara.ContactResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Samsara.CreateContactRequest = {},
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Samsara.ContactResponse>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                "contacts",
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
            return { data: _response.body as Samsara.ContactResponse, rawResponse: _response.rawResponse };
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
                throw new errors.SamsaraTimeoutError("Timeout exceeded when calling POST /contacts.");
            case "unknown":
                throw new errors.SamsaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get a specific contact's information.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Read Alert Contacts** under the Setup & Administration category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {string} id - Unique identifier for the contact.
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contacts.get("id")
     */
    public get(
        id: string,
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Samsara.ContactResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(id, requestOptions));
    }

    private async __get(
        id: string,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Samsara.ContactResponse>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                `contacts/${encodeURIComponent(id)}`,
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Samsara.ContactResponse, rawResponse: _response.rawResponse };
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
                throw new errors.SamsaraTimeoutError("Timeout exceeded when calling GET /contacts/{id}.");
            case "unknown":
                throw new errors.SamsaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Delete the given contact.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Write Alert Contacts** under the Setup & Administration category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {string} id - Unique identifier for the contact.
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contacts.delete("id")
     */
    public delete(id: string, requestOptions?: Contacts.RequestOptions): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(this.__delete(id, requestOptions));
    }

    private async __delete(
        id: string,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                `contacts/${encodeURIComponent(id)}`,
            ),
            method: "DELETE",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Samsara-Version": requestOptions?.version,
                }),
                requestOptions?.headers,
            ),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body, rawResponse: _response.rawResponse };
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
                throw new errors.SamsaraTimeoutError("Timeout exceeded when calling DELETE /contacts/{id}.");
            case "unknown":
                throw new errors.SamsaraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update a specific contact's information.
     *
     *  **Submit Feedback**: Likes, dislikes, and API feature requests should be filed as feedback in our <a href="https://forms.gle/zkD4NCH7HjKb7mm69" target="_blank">API feedback form</a>. If you encountered an issue or noticed inaccuracies in the API documentation, please <a href="https://www.samsara.com/help" target="_blank">submit a case</a> to our support team.
     *
     * To use this endpoint, select **Write Alert Contacts** under the Setup & Administration category when creating or editing an API token. <a href="https://developers.samsara.com/docs/authentication#scopes-for-api-tokens" target="_blank">Learn More.</a>
     *
     * @param {string} id - Unique identifier for the contact.
     * @param {Samsara.UpdateContactRequest} request
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contacts.update("id")
     */
    public update(
        id: string,
        request: Samsara.UpdateContactRequest = {},
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Samsara.ContactResponse> {
        return core.HttpResponsePromise.fromPromise(this.__update(id, request, requestOptions));
    }

    private async __update(
        id: string,
        request: Samsara.UpdateContactRequest = {},
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Samsara.ContactResponse>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SamsaraEnvironment.ProductionApi,
                `contacts/${encodeURIComponent(id)}`,
            ),
            method: "PATCH",
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
            return { data: _response.body as Samsara.ContactResponse, rawResponse: _response.rawResponse };
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
                throw new errors.SamsaraTimeoutError("Timeout exceeded when calling PATCH /contacts/{id}.");
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
