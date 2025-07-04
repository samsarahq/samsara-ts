/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * A site associated with the alert.
 */
export interface AlertObjectSitesResponseBody {
    /** The ID of the site associated with the alert */
    id: string;
    /** The name of the site */
    name?: string;
    /** The list of [tags](https://kb.samsara.com/hc/en-us/articles/360026674631-Using-Tags-and-Tag-Nesting) associated with the Site. */
    tags?: Samsara.GoaTagTinyResponseResponseBody[];
}
