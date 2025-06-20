/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A summary of this jurisdiction's IFTA data.
 */
export interface IftaJurisdictionSummaryObjectResponseBody {
    /** Jurisdiction code. */
    jurisdiction: string;
    /** Liters purchased for all qualified vehicles. */
    taxPaidLiters?: number;
    /** Distance in meters traveled on public roads in an IFTA jurisdiction. */
    taxableMeters: number;
    /** Total meters driven in this jurisdiction, taxable and non-taxable. */
    totalMeters: number;
}
