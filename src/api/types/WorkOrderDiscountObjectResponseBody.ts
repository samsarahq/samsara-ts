/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * How much a work order is discounted. Either money or basisPoints are specified.
 */
export interface WorkOrderDiscountObjectResponseBody {
    /** The discount in basis points. 100 basis points = 1%. */
    basisPoints?: number;
    money?: Samsara.WorkOrderMoneyObjectResponseBody;
}
