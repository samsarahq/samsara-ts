/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current HOS status type and time the driver started being in this status.
 */
export interface CurrentDutyStatus {
    /** The Hours of Service status type.  If the driver app is disconnected, an empty string will be returned. To reconnect the app and return updated values, drivers should have the app open with good cell service. Valid values: `offDuty`, `sleeperBed`, `driving`, `onDuty`, `yardMove`, `personalConveyance`. */
    hosStatusType?: CurrentDutyStatus.HosStatusType;
}

export namespace CurrentDutyStatus {
    /**
     * The Hours of Service status type.  If the driver app is disconnected, an empty string will be returned. To reconnect the app and return updated values, drivers should have the app open with good cell service. Valid values: `offDuty`, `sleeperBed`, `driving`, `onDuty`, `yardMove`, `personalConveyance`.
     */
    export type HosStatusType = "offDuty" | "sleeperBed" | "driving" | "onDuty" | "yardMove" | "personalConveyance";
    export const HosStatusType = {
        OffDuty: "offDuty",
        SleeperBed: "sleeperBed",
        Driving: "driving",
        OnDuty: "onDuty",
        YardMove: "yardMove",
        PersonalConveyance: "personalConveyance",
    } as const;
}
