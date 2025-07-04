/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific vehicle fault code.
 */
export interface SpecificVehicleFaultCodeObjectResponseBody {
    /** The specific fault code name. */
    faultCode: string;
    /** The specific fault code type.  Valid values: `INVALID_FAULT_CODE_TYPE`, `J1939_DTC`, `J1939_SPN`, `PASSENGER_DTC` */
    type: SpecificVehicleFaultCodeObjectResponseBody.Type;
}

export namespace SpecificVehicleFaultCodeObjectResponseBody {
    /**
     * The specific fault code type.  Valid values: `INVALID_FAULT_CODE_TYPE`, `J1939_DTC`, `J1939_SPN`, `PASSENGER_DTC`
     */
    export type Type = "INVALID_FAULT_CODE_TYPE" | "J1939_DTC" | "J1939_SPN" | "PASSENGER_DTC";
    export const Type = {
        InvalidFaultCodeType: "INVALID_FAULT_CODE_TYPE",
        J1939Dtc: "J1939_DTC",
        J1939Spn: "J1939_SPN",
        PassengerDtc: "PASSENGER_DTC",
    } as const;
}
