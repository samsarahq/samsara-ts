/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * A description of a DVIR defect
 */
export interface DvirDefectsObjectV20220913ResponseBody {
    /** Comment on the defect. */
    comment?: string;
    /** Time when the defect was created. UTC timestamp in RFC 3339 format. */
    createdAtTime: string;
    /** The type of DVIR defect. */
    defectType: string;
    /** The ID of the defect. */
    id: string;
    /** Signifies if this defect is resolved. */
    isResolved: boolean;
    /** The mechanic notes on this defect. */
    mechanicNotes?: string;
    /** Time when mechanic notes were last updated. UTC timestamp in RFC 3339 format. */
    mechanicNotesUpdatedAtTime?: string;
    /** Time when this defect was resolved. Will not be returned if the defect is unresolved. UTC timestamp in RFC 3339 format. */
    resolvedAtTime?: string;
    resolvedBy?: Samsara.DvirResolvedByObjectResponseBody;
    trailer?: Samsara.GoaTrailerTinyResponseResponseBody;
    vehicle?: Samsara.VehicleWithGatewayTinyResponseResponseBody;
}
