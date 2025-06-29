/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

export interface CreateRoutesStopRequestObjectRequestBody {
    /** ID of the address. An address [externalId](https://developers.samsara.com/docs/external-ids#using-external-ids) can also be used interchangeably here. */
    addressId?: string;
    /** A map of external ids */
    externalIds?: Record<string, string>;
    /** Name of the stop */
    name?: string;
    /** Notes for the stop */
    notes?: string;
    /** Specifies the time window (in milliseconds) after a stop's scheduled arrival time during which the stop is considered 'on-time'. */
    ontimeWindowAfterArrivalMs?: number;
    /** Specifies the time window (in milliseconds) before a stop's scheduled arrival time during which the stop is considered 'on-time'. */
    ontimeWindowBeforeArrivalMs?: number;
    /** This is a required field for all stops EXCEPT the start and end, based on route start and stop settings selected. */
    scheduledArrivalTime?: string;
    /** This is a required field for all stops EXCEPT the start and end, based on route start and stop settings selected. */
    scheduledDepartureTime?: string;
    singleUseLocation?: Samsara.RoutesSingleUseAddressObjectRequestBody;
}
