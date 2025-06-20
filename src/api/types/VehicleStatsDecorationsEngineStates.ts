/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface VehicleStatsDecorationsEngineStates {
    /** The state of the engine. */
    value: VehicleStatsDecorationsEngineStates.Value;
}

export namespace VehicleStatsDecorationsEngineStates {
    /**
     * The state of the engine.
     */
    export type Value = "Off" | "On" | "Idle";
    export const Value = {
        Off: "Off",
        On: "On",
        Idle: "Idle",
    } as const;
}
