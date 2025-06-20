/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         readingIds: "readingIds",
 *         entityType: "entityType"
 *     }
 */
export interface ReadingsLatestRequest {
    /**
     *  If specified, this should be the endCursor value from the previous page of results. When present, this request will return the next page of results that occur immediately after the previous page of results.
     */
    after?: string;
    /**
     * A collection of comma separated reading IDs. Include up to 3 readings IDs. Use /readings/definitions endpoint to get a list of valid reading IDs.
     */
    readingIds: string;
    /**
     * A filter on the data based on this comma-separated list of entity IDs or external IDs.
     */
    entityIds?: string;
    /**
     * A filter on the data based on this comma-separated list of external IDs.
     */
    externalIds?: string;
    /**
     * A filter on the data that returns the last known data points with timestamps less than or equal to this value. Defaults to now if not provided. Must be a string in RFC 3339 format. Millisecond precision and timezones are supported.
     */
    asOfTime?: string;
    /**
     * A entity type of the entityIds or externalIds to fetch readings for. Use /readings/definitions endpoint to get a list of valid entity types.
     */
    entityType: string;
    /**
     * Optional boolean indicating whether to return external IDs on supported entities
     */
    includeExternalIds?: boolean;
}
