/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface RoutesPatchRouteRequestBody {
    /** ID of the driver. Can be either a unique Samsara ID or an [external ID](https://developers.samsara.com/docs/external-ids) for the driver. */
    driverId?: string;
    /** A map of external ids */
    externalIds?: Record<string, string>;
    /** Name for the route */
    name?: string;
    /** Notes about the route. */
    notes?: string;
    /** This optional boolean parameter controls whether route schedule arrival and departure times are recalculated. When set to true, the system will automatically recompute the scheduledArrivalTime and scheduledDepartureTime for each stop along the route during route creation. This process overrides any manually provided values, with the exception of the first stop, which retains its user-defined schedule. */
    recomputeScheduledTimes?: boolean;
    settings?: Samsara.RouteSettingsRequestBody;
    /** List of stops along the route. If a valid `id` of a stop is provided, that stop will be updated. If no `id` is provided for a passed in stop, that stop will be created. If `id` value are passed in for some stops and not for others, those with `id` value specified will be retained and updated in the original route, those without `id` value specified in the body will be created, and those without `id` value specified that already existed on the route will be deleted. For each new stop, exactly one of `addressId` and `singleUseLocation` are required. Depending on the `settings` on your route, either a `scheduledArrivalTime` or `scheduledDepartureTime` must be specified for the first job, if a new first job is being added. */
    stops?: Samsara.UpdateRoutesStopRequestObjectRequestBody[];
    /** ID of the vehicle. Can be either a unique Samsara ID or an [external ID](https://developers.samsara.com/docs/external-ids) for the vehicle. */
    vehicleId?: string;
}
