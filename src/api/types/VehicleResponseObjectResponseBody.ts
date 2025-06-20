/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * A single vehicle
 */
export interface VehicleResponseObjectResponseBody {
    /** List of attributes associated with the entity */
    attributes?: Samsara.GoaAttributeTinyResponseBody[];
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType1?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType10?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType11?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType12?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType13?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType2?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType3?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType4?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType5?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType6?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType7?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType8?: string;
    /** The type of auxiliary input configured for this Vehicle. */
    auxInputType9?: string;
    /** The serial number of the camera installed in the vehicle */
    cameraSerial?: string;
    /** Time the vehicle was created in RFC 3339 format. */
    createdAtTime: string;
    /** Engine serial number. */
    esn?: string;
    /** A map of external ids */
    externalIds?: Record<string, string>;
    gateway?: Samsara.GoaGatewayTinyResponseResponseBody;
    /** The harsh acceleration setting type. */
    harshAccelerationSettingType?: string;
    /** ID of the vehicle */
    id: string;
    /** The license plate of the vehicle. */
    licensePlate?: string;
    /** The Vehicle’s manufacturing make. */
    make?: string;
    /** The Vehicle’s manufacturing model. */
    model?: string;
    /** Name of the vehicle */
    name?: string;
    /** These are generic notes about the Vehicle. */
    notes?: string;
    sensorConfiguration?: Samsara.VehicleSensorConfigurationResponseBody;
    /** The serial number of the gateway installed in the vehicle. */
    serial?: string;
    staticAssignedDriver?: Samsara.DriverObjectResponseBody;
    /** The list of tags associated with the Vehicle. */
    tags?: Samsara.GoaTagTinyResponseResponseBody[];
    /** Time the vehicle was updated in RFC 3339 format. */
    updatedAtTime?: string;
    /** Whether the vehicle is regulated or unregulated (non-CMV).  Valid values: `regulated`, `unregulated` */
    vehicleRegulationMode?: VehicleResponseObjectResponseBody.VehicleRegulationMode;
    /** The type of the vehicle. Only returned for customers with commercial speed limits (CSL) enabled.  Valid values: `unset`, `passenger`, `truck`, `bus` */
    vehicleType?: VehicleResponseObjectResponseBody.VehicleType;
    /** The weight of the vehicle in either pounds (lb) or kilograms (kg). Unit of weight is unknown. Only returned for customers with commercial speed limits (CSL) enabled. */
    vehicleWeight?: number;
    /** The weight of the vehicle in kilograms (kg). Only returned for customers with commercial speed limits (CSL) enabled. */
    vehicleWeightInKilograms?: number;
    /** The weight of the vehicle in pounds (lb). Only returned for customers with commercial speed limits (CSL) enabled. */
    vehicleWeightInPounds?: number;
    /** The VIN of the vehicle. */
    vin?: string;
    year?: string;
}

export namespace VehicleResponseObjectResponseBody {
    /**
     * Whether the vehicle is regulated or unregulated (non-CMV).  Valid values: `regulated`, `unregulated`
     */
    export type VehicleRegulationMode = "regulated" | "unregulated";
    export const VehicleRegulationMode = {
        Regulated: "regulated",
        Unregulated: "unregulated",
    } as const;
    /**
     * The type of the vehicle. Only returned for customers with commercial speed limits (CSL) enabled.  Valid values: `unset`, `passenger`, `truck`, `bus`
     */
    export type VehicleType = "unset" | "passenger" | "truck" | "bus";
    export const VehicleType = {
        Unset: "unset",
        Passenger: "passenger",
        Truck: "truck",
        Bus: "bus",
    } as const;
}
