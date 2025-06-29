/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * A summary of this vehicle's fuel and energy data.
 */
export interface FuelEnergyVehicleReportObjectResponseBody {
    /** Meters traveled over the given time range. */
    distanceTraveledMeters: number;
    /** Efficiency in MPG or MPGE over the given time range. For fuel vehicles this will be provided in MPG, for hybrid and electric vehicles this will be provided in MPGE. MPG/MPGE values are provided based on US gallons. */
    efficiencyMpge: number;
    /** Kilowatt-hours of energy used over the given time range. Only provided for hybrid and electric vehicles. */
    energyUsedKwh?: number;
    /** Milliseconds of engine idle time over the given time range. Only provided for fuel and hybrid vehicles. */
    engineIdleTimeDurationMs?: number;
    /** Milliseconds of engine run time over the given time range. Only provided for fuel and hybrid vehicles. */
    engineRunTimeDurationMs?: number;
    /** Estimated kilograms of carbon emissions over the given time range. Only provided for fuel and hybrid vehicles. */
    estCarbonEmissionsKg?: number;
    estFuelEnergyCost: Samsara.FuelEnergyCostResponseResponseBody;
    /** Milliliters of fuel consumed over the given time range. Only provided for fuel and hybrid vehicles. */
    fuelConsumedMl?: number;
    vehicle: Samsara.FuelEnergyVehicleObjectResponseBody;
}
