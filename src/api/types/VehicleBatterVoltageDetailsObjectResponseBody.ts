/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Details specific to Vehicle Battery Voltage
 */
export interface VehicleBatterVoltageDetailsObjectResponseBody {
    /** The battery volt threshold value. */
    batteryVolts: number;
    /** The number of milliseconds the trigger needs to stay active before alerting. */
    minDurationMilliseconds: number;
    /** How to evaluate the threshold.  Valid values: `GREATER`, `LESS` */
    operation: VehicleBatterVoltageDetailsObjectResponseBody.Operation;
}

export namespace VehicleBatterVoltageDetailsObjectResponseBody {
    /**
     * How to evaluate the threshold.  Valid values: `GREATER`, `LESS`
     */
    export type Operation = "GREATER" | "LESS";
    export const Operation = {
        Greater: "GREATER",
        Less: "LESS",
    } as const;
}
