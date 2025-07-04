/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FuelVolumeResponseBody {
    /** Units in which volume is being presented.  Valid values: `GALLONS`, `LITERS` */
    unit: FuelVolumeResponseBody.Unit;
    /** The volume of the measured fuel. */
    value: number;
}

export namespace FuelVolumeResponseBody {
    /**
     * Units in which volume is being presented.  Valid values: `GALLONS`, `LITERS`
     */
    export type Unit = "GALLONS" | "LITERS";
    export const Unit = {
        Gallons: "GALLONS",
        Liters: "LITERS",
    } as const;
}
