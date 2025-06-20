/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Location object.
 */
export interface LocationResponseResponseBody {
    /** Radial accuracy of gps location in meters. This will only return if strong GPS is not available. */
    accuracyMeters?: number;
    address?: Samsara.AddressResponseResponseBody;
    geofence?: Samsara.GeofenceResponseResponseBody;
    /** Heading of the asset in degrees. May be 0 if the asset is not moving. */
    headingDegrees: number;
    /** Latitude of the location of the asset. */
    latitude: number;
    /** Longitude of the location of the asset. */
    longitude: number;
}
