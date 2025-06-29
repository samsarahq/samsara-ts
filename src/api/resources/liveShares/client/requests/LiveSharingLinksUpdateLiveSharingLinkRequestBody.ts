/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         id: "id",
 *         name: "Example Live Sharing Link name"
 *     }
 */
export interface LiveSharingLinksUpdateLiveSharingLinkRequestBody {
    /**
     * Unique identifier for the Live Sharing Link.
     */
    id: string;
    /** Description for the Live Sharing Link (not applicable for 'assetsOnRoute' type). */
    description?: string;
    /** Date that this link expires in RFC 3339 format. Can't be set in the past. If not provided then link will never expire. */
    expiresAtTime?: string;
    /** Name of the Live Sharing Link. */
    name: string;
}
