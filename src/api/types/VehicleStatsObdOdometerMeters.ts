/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Vehicle OBD odometer reading.
 */
export interface VehicleStatsObdOdometerMeters {
    time: Samsara.Time;
    /** Number of meters the vehicle has traveled according to the on-board diagnostics. */
    value: number;
}
