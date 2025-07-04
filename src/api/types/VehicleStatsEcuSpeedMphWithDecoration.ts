/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * The speed of the vehicle in miles per hour, as reported by the ECU.
 */
export interface VehicleStatsEcuSpeedMphWithDecoration {
    decorations?: Samsara.VehicleStatsDecorations;
    time: Samsara.Time;
    /** The speed of the vehicle in miles per hour. */
    value: number;
}
