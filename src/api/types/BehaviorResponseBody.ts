/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Object reference for the behavior within the session.
 */
export interface BehaviorResponseBody {
    /** Coachable behavior type for the behavior in the coaching session.  Valid values: `acceleration`, `braking`, `cameraObstruction`, `crash`, `defensiveDriving`, `didNotYield`, `drinkPolicy`, `drowsy`, `eatingDrinking`, `event`, `falsePositive`, `foodPolicy`, `forwardCollisionWarning`, `genericDistraction`, `harshTurn`, `hosViolation`, `idling`, `laneDeparture`, `lateResponse`, `maskPolicy`, `maxSpeed`, `mobileUsage`, `nearCollison`, `noSeatbelt`, `obstructedCamera`, `outwardObstruction`, `passengerPolicy`, `ranRedLight`, `rollingRailroadCrossing`, `rollingStop`, `rollingStop`, `rollover`, `rolloverProtection`, `rolloverProtectionBrakeControlActivated`, `rolloverProtectionEngineControlActivated`, `severeSpeeding`, `smoking`, `speeding`, `tailgating`, `unknown`, `yawControl`, `yawControlBrakeControlActivated`, `yawControlEngineControlActivated` */
    coachableBehaviorType: BehaviorResponseBody.CoachableBehaviorType;
    /** Object references for the coachableEvents within the behavior. Returned when includeCoachableEvents is 'true'. Capped at 100 coachable events per Coaching session. For sessions where coachable events exceed 100, please visit the Samsara dashboard to address this coaching session. Corresponds to the following unique identifiers: Non-Speeding Safety events - unique Samsara ID of the safety event as 'vehicleId - eventMS'. Speeding events - unique UUID of the event. Day of HOS Violations - unique Samsara ID of the day of violations as '{driverId},{date}'. Idling events - unique UUID of the event. */
    coachableEvents?: Samsara.CoachableEventResponseBody[];
    /** Unique ID for the coaching behavior. */
    id: string;
    /** Time of last coached date for the same behavior label. */
    lastCoachedTime: string;
    /** Associated note for the coaching behavior. Returned when present. */
    note?: string;
    /** Time of coaching behavior update in UTC. */
    updatedAtTime: string;
}

export namespace BehaviorResponseBody {
    /**
     * Coachable behavior type for the behavior in the coaching session.  Valid values: `acceleration`, `braking`, `cameraObstruction`, `crash`, `defensiveDriving`, `didNotYield`, `drinkPolicy`, `drowsy`, `eatingDrinking`, `event`, `falsePositive`, `foodPolicy`, `forwardCollisionWarning`, `genericDistraction`, `harshTurn`, `hosViolation`, `idling`, `laneDeparture`, `lateResponse`, `maskPolicy`, `maxSpeed`, `mobileUsage`, `nearCollison`, `noSeatbelt`, `obstructedCamera`, `outwardObstruction`, `passengerPolicy`, `ranRedLight`, `rollingRailroadCrossing`, `rollingStop`, `rollingStop`, `rollover`, `rolloverProtection`, `rolloverProtectionBrakeControlActivated`, `rolloverProtectionEngineControlActivated`, `severeSpeeding`, `smoking`, `speeding`, `tailgating`, `unknown`, `yawControl`, `yawControlBrakeControlActivated`, `yawControlEngineControlActivated`
     */
    export type CoachableBehaviorType =
        | "acceleration"
        | "braking"
        | "cameraObstruction"
        | "crash"
        | "defensiveDriving"
        | "didNotYield"
        | "drinkPolicy"
        | "drowsy"
        | "eatingDrinking"
        | "event"
        | "falsePositive"
        | "foodPolicy"
        | "forwardCollisionWarning"
        | "genericDistraction"
        | "harshTurn"
        | "hosViolation"
        | "idling"
        | "laneDeparture"
        | "lateResponse"
        | "maskPolicy"
        | "maxSpeed"
        | "mobileUsage"
        | "nearCollison"
        | "noSeatbelt"
        | "obstructedCamera"
        | "outwardObstruction"
        | "passengerPolicy"
        | "ranRedLight"
        | "rollingRailroadCrossing"
        | "rollingStop"
        | "rollover"
        | "rolloverProtection"
        | "rolloverProtectionBrakeControlActivated"
        | "rolloverProtectionEngineControlActivated"
        | "severeSpeeding"
        | "smoking"
        | "speeding"
        | "tailgating"
        | "unknown"
        | "yawControl"
        | "yawControlBrakeControlActivated"
        | "yawControlEngineControlActivated";
    export const CoachableBehaviorType = {
        Acceleration: "acceleration",
        Braking: "braking",
        CameraObstruction: "cameraObstruction",
        Crash: "crash",
        DefensiveDriving: "defensiveDriving",
        DidNotYield: "didNotYield",
        DrinkPolicy: "drinkPolicy",
        Drowsy: "drowsy",
        EatingDrinking: "eatingDrinking",
        Event: "event",
        FalsePositive: "falsePositive",
        FoodPolicy: "foodPolicy",
        ForwardCollisionWarning: "forwardCollisionWarning",
        GenericDistraction: "genericDistraction",
        HarshTurn: "harshTurn",
        HosViolation: "hosViolation",
        Idling: "idling",
        LaneDeparture: "laneDeparture",
        LateResponse: "lateResponse",
        MaskPolicy: "maskPolicy",
        MaxSpeed: "maxSpeed",
        MobileUsage: "mobileUsage",
        NearCollison: "nearCollison",
        NoSeatbelt: "noSeatbelt",
        ObstructedCamera: "obstructedCamera",
        OutwardObstruction: "outwardObstruction",
        PassengerPolicy: "passengerPolicy",
        RanRedLight: "ranRedLight",
        RollingRailroadCrossing: "rollingRailroadCrossing",
        RollingStop: "rollingStop",
        Rollover: "rollover",
        RolloverProtection: "rolloverProtection",
        RolloverProtectionBrakeControlActivated: "rolloverProtectionBrakeControlActivated",
        RolloverProtectionEngineControlActivated: "rolloverProtectionEngineControlActivated",
        SevereSpeeding: "severeSpeeding",
        Smoking: "smoking",
        Speeding: "speeding",
        Tailgating: "tailgating",
        Unknown: "unknown",
        YawControl: "yawControl",
        YawControlBrakeControlActivated: "yawControlBrakeControlActivated",
        YawControlEngineControlActivated: "yawControlEngineControlActivated",
    } as const;
}
