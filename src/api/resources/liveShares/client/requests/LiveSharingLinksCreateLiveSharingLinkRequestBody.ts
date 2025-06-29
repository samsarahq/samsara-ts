/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../../../../index.js";

/**
 * @example
 *     {
 *         name: "Example Live Sharing Link name",
 *         type: "assetsLocation"
 *     }
 */
export interface LiveSharingLinksCreateLiveSharingLinkRequestBody {
    assetsLocationLinkConfig?: Samsara.AssetsLocationLinkConfigObject;
    assetsNearLocationLinkConfig?: Samsara.AssetsNearLocationLinkConfigObject;
    assetsOnRouteLinkConfig?: Samsara.AssetsOnRouteLinkConfigObject;
    /** Description for the Live Sharing Link (not applicable for 'assetsOnRoute' type). */
    description?: string;
    /** Date that this link expires in RFC 3339 format. Can't be set in the past. If not provided then link will never expire. */
    expiresAtTime?: string;
    /** Name of the Live Sharing Link. */
    name: string;
    /** Type of the Live Sharing Link. This field specifies which one of '<type>LinkConfig' objects will be used to configure the sharing link.  Valid values: `assetsLocation`, `assetsNearLocation`, `assetsOnRoute` */
    type: LiveSharingLinksCreateLiveSharingLinkRequestBody.Type;
}

export namespace LiveSharingLinksCreateLiveSharingLinkRequestBody {
    /**
     * Type of the Live Sharing Link. This field specifies which one of '<type>LinkConfig' objects will be used to configure the sharing link.  Valid values: `assetsLocation`, `assetsNearLocation`, `assetsOnRoute`
     */
    export type Type = "assetsLocation" | "assetsNearLocation" | "assetsOnRoute";
    export const Type = {
        AssetsLocation: "assetsLocation",
        AssetsNearLocation: "assetsNearLocation",
        AssetsOnRoute: "assetsOnRoute",
    } as const;
}
