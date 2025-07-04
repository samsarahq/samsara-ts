/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Details specific to DVIR Submitted by Device
 */
export interface DvirSubmittedDeviceTriggerDetailsObjectResponseBody {
    /** The trigger will only fire if the selected DVIR types are submitted within the duration. */
    dvirMinDurationMilliseconds?: number;
    /** Filter to these types of DVIR submissions. */
    dvirSubmissionTypes?: DvirSubmittedDeviceTriggerDetailsObjectResponseBody.DvirSubmissionTypes.Item[];
}

export namespace DvirSubmittedDeviceTriggerDetailsObjectResponseBody {
    export type DvirSubmissionTypes = DvirSubmissionTypes.Item[];

    export namespace DvirSubmissionTypes {
        /**
         * DVIR submission type  Valid values: `SAFE_NO_DEFECTS`, `SAFE_WITH_DEFECTS`, `UNSAFE`
         */
        export type Item = "SAFE_NO_DEFECTS" | "SAFE_WITH_DEFECTS" | "UNSAFE";
        export const Item = {
            SafeNoDefects: "SAFE_NO_DEFECTS",
            SafeWithDefects: "SAFE_WITH_DEFECTS",
            Unsafe: "UNSAFE",
        } as const;
    }
}
