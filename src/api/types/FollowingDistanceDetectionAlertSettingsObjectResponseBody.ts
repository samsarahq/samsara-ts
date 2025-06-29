/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Enables AI detection of tailgating or unsafe following distances, surfaces events in Safety Inbox, and enables configurable alerts. By default, Following Distance will impact the drivers' safety score.
 */
export interface FollowingDistanceDetectionAlertSettingsObjectResponseBody {
    /** Duration of following distance at which to alert, measured in milliseconds. */
    durationMs?: number;
    /** Indicates whether in-cab audio alerts for following distance are turned on. */
    hasInCabAudioAlertsEnabled?: boolean;
    /** Indicates whether AI event detection for following distance is turned on. */
    isEnabled?: boolean;
    /** Alert when speed is over this many miles per hour. */
    speedingThresholdMph?: number;
}
