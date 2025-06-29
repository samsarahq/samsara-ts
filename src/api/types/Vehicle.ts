/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * The vehicle object.
 */
export interface Vehicle {
    /** A minified attribute */
    attributes?: Samsara.AttributeTiny[];
    auxInputType1?: Samsara.VehicleAuxInputType;
    auxInputType10?: Samsara.VehicleAuxInputType;
    auxInputType11?: Samsara.VehicleAuxInputType;
    auxInputType12?: Samsara.VehicleAuxInputType;
    auxInputType13?: Samsara.VehicleAuxInputType;
    auxInputType2?: Samsara.VehicleAuxInputType;
    auxInputType3?: Samsara.VehicleAuxInputType;
    auxInputType4?: Samsara.VehicleAuxInputType;
    auxInputType5?: Samsara.VehicleAuxInputType;
    auxInputType6?: Samsara.VehicleAuxInputType;
    auxInputType7?: Samsara.VehicleAuxInputType;
    auxInputType8?: Samsara.VehicleAuxInputType;
    auxInputType9?: Samsara.VehicleAuxInputType;
    cameraSerial?: Samsara.CameraSerial;
    esn?: Samsara.VehicleEsn;
    externalIds?: Samsara.VehicleExternalIds;
    gateway?: Samsara.GatewayTiny;
    grossVehicleWeight?: Samsara.GrossVehicleWeight;
    harshAccelerationSettingType?: Samsara.VehicleHarshAccelerationSettingType;
    id: Samsara.VehicleId;
    licensePlate?: Samsara.VehicleLicensePlate;
    make?: Samsara.VehicleMake;
    model?: Samsara.VehicleModel;
    name?: Samsara.VehicleName;
    notes?: Samsara.VehicleNotes;
    sensorConfiguration?: Samsara.VehicleSensorConfiguration;
    serial?: Samsara.Serial;
    staticAssignedDriver?: Samsara.DriverTinyResponse;
    tags?: Samsara.VehicleTags;
    vehicleRegulationMode?: Samsara.VehicleRegulationMode;
    vehicleType?: Samsara.VehicleType;
    vin?: Samsara.VehicleVin;
    year?: Samsara.VehicleYear;
}
