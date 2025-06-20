/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * A camera stream associated with the alert.
 */
export interface AlertObjectOnvifCameraStreamResponseBody {
    cameraDevice?: Samsara.AlertObjectWorkforceCameraDeviceResponseBody;
    /** The ID of the camera stream associated with the alert. */
    id: string;
    /** The name of the camera stream. */
    name?: string;
    /** The list of [tags](https://kb.samsara.com/hc/en-us/articles/360026674631-Using-Tags-and-Tag-Nesting) associated with the camera stream. */
    tags?: Samsara.GoaTagTinyResponseResponseBody[];
}
