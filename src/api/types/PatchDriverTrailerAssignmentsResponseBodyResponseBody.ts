/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Response after successfully updating a Driver Trailer Assignment
 */
export interface PatchDriverTrailerAssignmentsResponseBodyResponseBody {
    /** Time when the driver trailer assignment was created, in RFC 3339 format */
    createdAtTime?: string;
    /** Samsara ID for the driver that this assignment is for. */
    driverId: string;
    /** Time when the driver trailer assignment ends, in RFC 3339 format */
    endTime: string;
    /** Samsara ID for the assignment. */
    id: string;
    /** Time when the driver trailer assignment starts, in RFC 3339 format */
    startTime: string;
    /** Samsara ID of the trailer */
    trailerId: string;
    /** Time when the driver trailer assignment was last updated, in RFC 3339 format */
    updatedAtTime?: string;
}
