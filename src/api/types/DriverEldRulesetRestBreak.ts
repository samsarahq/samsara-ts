/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The rest break required setting of the ELD ruleset applied to this driver. Valid values: `Property (off-duty/sleeper)`, `Explosives/HazMat (on-duty)`
 */
export type DriverEldRulesetRestBreak = "Property (off-duty/sleeper)" | "Explosives/HazMat (on-duty)";
export const DriverEldRulesetRestBreak = {
    PropertyOffDutySleeper: "Property (off-duty/sleeper)",
    ExplosivesHazMatOnDuty: "Explosives/HazMat (on-duty)",
} as const;
