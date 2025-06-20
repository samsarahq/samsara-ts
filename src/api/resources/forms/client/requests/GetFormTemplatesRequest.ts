/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface GetFormTemplatesRequest {
    /**
     * A comma-separated list containing up to 100 template IDs to filter on.
     */
    ids?: string | string[];
    /**
     *  If specified, this should be the endCursor value from the previous page of results. When present, this request will return the next page of results that occur immediately after the previous page of results.
     */
    after?: string;
}
