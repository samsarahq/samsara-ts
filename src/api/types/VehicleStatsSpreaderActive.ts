/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Whether vehicle is actively spreading any material.
 */
export interface VehicleStatsSpreaderActive {
    time: Samsara.Time;
    /** Whether vehicle is actively spreading any material. */
    value: VehicleStatsSpreaderActive.Value;
}

export namespace VehicleStatsSpreaderActive {
    /**
     * Whether vehicle is actively spreading any material.
     */
    export type Value = "Off" | "On";
    export const Value = {
        Off: "Off",
        On: "On",
    } as const;
}
