/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * The geofence that defines this address and its bounds. This can either be a circle or a polygon, but not both.
 */
export interface WorkflowGeofenceResponseBody {
    circle?: Samsara.WorkflowCircleResponseBody;
    polygon?: Samsara.WorkflowPolygonResponseBody;
    settings?: Samsara.SettingsResponseBody;
}
