/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

export interface FieldObjectResponseBody {
    /** The name of the field. */
    label: string;
    /** The type of field.  Valid values: `photo`, `string`, `number`, `multipleChoice`, `signature`, `dateTime`, `scannedDocument`, `barcode` */
    type: FieldObjectResponseBody.Type;
    value: Samsara.FieldObjectValueResponseBody;
}

export namespace FieldObjectResponseBody {
    /**
     * The type of field.  Valid values: `photo`, `string`, `number`, `multipleChoice`, `signature`, `dateTime`, `scannedDocument`, `barcode`
     */
    export type Type =
        | "photo"
        | "string"
        | "number"
        | "multipleChoice"
        | "signature"
        | "dateTime"
        | "scannedDocument"
        | "barcode";
    export const Type = {
        Photo: "photo",
        String: "string",
        Number: "number",
        MultipleChoice: "multipleChoice",
        Signature: "signature",
        DateTime: "dateTime",
        ScannedDocument: "scannedDocument",
        Barcode: "barcode",
    } as const;
}
