/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Charging energy for electric and hybrid vehicles in microwatt hours. Not all EV and HEVs may report this field.
 */
export interface VehicleStatsEvChargingEnergyMicroWh {
    time: Samsara.Time;
    /** Charging energy for electric and hybrid vehicles in microwatt hours. */
    value: number;
}
