/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type MediaListRequestTriggerReasonsItem =
    | "api"
    | "panicButton"
    | "periodicStill"
    | "rfidEvent"
    | "safetyEvent"
    | "tripEndStill"
    | "tripStartStill"
    | "videoRetrieval";
export const MediaListRequestTriggerReasonsItem = {
    Api: "api",
    PanicButton: "panicButton",
    PeriodicStill: "periodicStill",
    RfidEvent: "rfidEvent",
    SafetyEvent: "safetyEvent",
    TripEndStill: "tripEndStill",
    TripStartStill: "tripStartStill",
    VideoRetrieval: "videoRetrieval",
} as const;
