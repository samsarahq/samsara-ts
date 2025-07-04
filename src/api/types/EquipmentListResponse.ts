/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * List of all equipment objects, and pagination information.
 */
export interface EquipmentListResponse {
    /** List of equipment objects. */
    data: Samsara.EquipmentObject[];
    pagination: Samsara.PaginationResponse;
}
