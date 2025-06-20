/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../../../../../../index.js";

/**
 * @example
 *     {
 *         vehicleIds: "vehicleIds",
 *         startTime: "startTime",
 *         endTime: "endTime"
 *     }
 */
export interface MediaListRequest {
    /**
     * A filter on the data based on this comma-separated list of vehicle IDs and externalIds. You can specify up to 20 vehicles. Example: `vehicleIds=1234,5678,samsara.vin:1HGBH41JXMN109186`
     */
    vehicleIds: string;
    /**
     * An optional list of desired camera inputs for which to return captured media. If empty, media for all available inputs will be returned.
     */
    inputs?: Samsara.cameras.MediaListRequestInputsItem | Samsara.cameras.MediaListRequestInputsItem[];
    /**
     * An optional list of desired media types for which to return captured media. If empty, media for all available media types will be returned. Possible options include: image, videoHighRes.
     */
    mediaTypes?: Samsara.cameras.MediaListRequestMediaTypesItem | Samsara.cameras.MediaListRequestMediaTypesItem[];
    /**
     * An optional list of desired trigger reasons for which to return captured media. If empty, media for all available trigger reasons will be returned. Possible options include: api, panicButton, periodicStill, rfidEvent, safetyEvent, tripEndStill, tripStartStill, videoRetrieval. videoRetrieval represents media captured for a dashboard video retrieval request.
     */
    triggerReasons?:
        | Samsara.cameras.MediaListRequestTriggerReasonsItem
        | Samsara.cameras.MediaListRequestTriggerReasonsItem[];
    /**
     * A start time in RFC 3339 format. Millisecond precision and timezones are supported. (Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00).
     */
    startTime: string;
    /**
     * An end time in RFC 3339 format. End time cannot be more than 24 hours after startTime. Millisecond precision and timezones are supported. (Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00).
     */
    endTime: string;
    /**
     * An optional timestamp in RFC 3339 format that can act as a cursor to track which media has previously been retrieved; only media whose availableAtTime comes after this parameter will be returned. Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00
     */
    availableAfterTime?: string;
    /**
     *  If specified, this should be the endCursor value from the previous page of results. When present, this request will return the next page of results that occur immediately after the previous page of results.
     */
    after?: string;
}
