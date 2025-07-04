/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Vehicle fuel percentage reading.
 */
export interface VehicleStatsFuelPercent {
    time: Samsara.Time;
    /** The engine fuel level in percentage points (e.g. `99`, `50`, etc). */
    value: number;
}
