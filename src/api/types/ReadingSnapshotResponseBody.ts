/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A snapshot of a reading value at a point in time.
 */
export interface ReadingSnapshotResponseBody {
    /** The ID of the entity this readings is for. */
    entityId: string;
    /** A map of external ids */
    externalIds?: Record<string, string>;
    /** The time in RFC 3339 format when the reading was measured. */
    happenedAtTime?: string;
    /** The ID of the reading for which the data is being returned. */
    readingId: string;
    /** The value of the reading. */
    value?: Record<string, unknown>;
}
