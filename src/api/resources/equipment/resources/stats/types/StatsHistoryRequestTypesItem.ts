/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type StatsHistoryRequestTypesItem =
    | "gatewayEngineStates"
    | "obdEngineStates"
    | "fuelPercents"
    | "engineRpm"
    | "gatewayEngineSeconds"
    | "obdEngineSeconds"
    | "gatewayJ1939EngineSeconds"
    | "gpsOdometerMeters"
    | "gps"
    | "engineTotalIdleTimeMinutes";
export const StatsHistoryRequestTypesItem = {
    GatewayEngineStates: "gatewayEngineStates",
    ObdEngineStates: "obdEngineStates",
    FuelPercents: "fuelPercents",
    EngineRpm: "engineRpm",
    GatewayEngineSeconds: "gatewayEngineSeconds",
    ObdEngineSeconds: "obdEngineSeconds",
    GatewayJ1939EngineSeconds: "gatewayJ1939EngineSeconds",
    GpsOdometerMeters: "gpsOdometerMeters",
    Gps: "gps",
    EngineTotalIdleTimeMinutes: "engineTotalIdleTimeMinutes",
} as const;
