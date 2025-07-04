/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * DVIR defects data.
 */
export interface DefectsResponseDataResponseBody {
    /** Comment on the defect. */
    comment: string;
    /** Time when defect was created in RFC 3339 format. */
    createdAtTime?: string;
    /** List of DVIR defect's photos */
    defectPhotos?: Samsara.DefectPhotoResponseResponseBody[];
    /** The unique ID of the defect type. */
    defectTypeId?: string;
    /** The unique ID of the defect's DVIR. */
    dvirId: string;
    /** The unique ID of the DVIR defect. */
    id: string;
    /** Signifies if this defect is resolved. */
    isResolved: boolean;
    /** The mechanics notes on the defect. */
    mechanicNotes?: string;
    /** Time when this defect was resolved in RFC 3339 format. Will not be returned if the defect is unresolved. */
    resolvedAtTime?: string;
    resolvedBy?: Samsara.DvirResolvedByObjectResponseBody;
    trailer?: Samsara.DefectTrailerResponseResponseBody;
    /** Time when defect was last updated in RFC 3339 format. */
    updatedAtTime?: string;
    vehicle?: Samsara.DefectVehicleResponseResponseBody;
}
