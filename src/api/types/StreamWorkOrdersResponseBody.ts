/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

export interface StreamWorkOrdersResponseBody {
    /** Work Orders */
    data: Samsara.WorkOrderObjectResponseBody[];
    pagination: Samsara.GoaPaginationResponseResponseBody;
}
