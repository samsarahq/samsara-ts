/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Details specific to Route Stop Estimated Arrival
 */
export interface RouteStopEstimatedArrivalDetailsObjectResponseBody {
    /** Time threshold for when to send an alert. Sends an alert when the ETA is less than the threshold. */
    alertBeforeArrivalMilliseconds: number;
    /** If true, will include a live sharing link in the alert. Defaults to false. */
    hasLiveShareLink?: boolean;
    /** If true, will only alert if the vehicle is en-route to the stop. Defaults to false. */
    isAlertOnRouteStopOnly?: boolean;
    location: Samsara.LocationObjectResponseBody;
}
