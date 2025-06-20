/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * List of all driver tachograph files in a specified time range.
 */
export interface TachographDriverFilesResponse {
    data?: Samsara.TachographDriverFileData;
    pagination?: Samsara.PaginationResponse;
}
