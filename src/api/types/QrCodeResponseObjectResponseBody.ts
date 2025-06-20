/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A single document.
 */
export interface QrCodeResponseObjectResponseBody {
    /** ID for the driver the QR code belongs to. */
    driverId: number;
    /** URL link to the driver assignment QR code. Included if a QR code has been created for the driver. */
    qrCodeLink?: string;
}
