/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * The value of the document field. The shape of value depends on the type.
 */
export interface FieldObjectValueRequestBody {
    /** The value of a barcode scanning field. Only present for barcode scanning fields. */
    barcodeValue?: Samsara.BarcodeValueObjectRequestBody[];
    dateTimeValue?: Samsara.DateTimeValueObjectRequestBody;
    /** The value of a multiple choice field. Only present for multiple choice fields. */
    multipleChoiceValue?: Samsara.MultipleChoiceValueObjectRequestBody[];
    /** The value of a number field. Only present for number fields. */
    numberValue?: number;
    /** The value of a photo field. Only present for photo fields. */
    photoValue?: Samsara.PhotoValueObjectRequestBody[];
    /** The value of a scanned document field. Only present for scanned document fields. */
    scannedDocumentValue?: Samsara.ScannedDocumentValueObjectRequestBody[];
    signatureValue?: Samsara.SignatureValueObjectRequestBody;
    /** The value of a string field. Only present for string fields. */
    stringValue?: string;
}
