/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Charging current for electric and hybrid vehicles in milli amps. Not all EV and HEVs may report this field.
 */
export interface VehicleStatsEvChargingCurrentMilliAmp {
    time: Samsara.Time;
    /** Charging current for electric and hybrid vehicles in milli amps. */
    value: number;
}
