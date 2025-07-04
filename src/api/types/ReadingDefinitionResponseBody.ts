/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * Definition of a reading.
 */
export interface ReadingDefinitionResponseBody {
    /** The category enumeration that this reading belongs to. */
    category: string;
    /** The human readable description for this reading. Translated to English. */
    description: string;
    /** Entity type of this reading. */
    entityType: string;
    /** Array of enumeration values */
    enumValues?: Samsara.EnumValueResponseBody[];
    /** The label for this reading that is suitable to show to a user. Translated to English. */
    label: string;
    /** The ID of the reading used to fetch time series data in other endpoints. */
    readingId: string;
    type: Samsara.ReadingTypeResponseBody;
}
