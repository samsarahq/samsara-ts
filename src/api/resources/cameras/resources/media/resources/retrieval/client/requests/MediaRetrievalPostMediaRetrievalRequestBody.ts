/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         endTime: "2019-06-13T19:08:55Z",
 *         inputs: ["dashcamRoadFacing", "dashcamRoadFacing"],
 *         mediaType: "image",
 *         startTime: "2019-06-13T19:08:25Z",
 *         vehicleId: "1234"
 *     }
 */
export interface MediaRetrievalPostMediaRetrievalRequestBody {
    /** An end time in RFC 3339 format. If endTime is the same as startTime, an image will be captured at startTime. Must be 1 second or more after startTime and no more than 60 seconds after startTime (Examples: 2019-06-13T19:08:55Z, 2019-06-13T19:08:55.455Z, OR 2015-09-15T14:00:42-04:00). */
    endTime: string;
    /** A list of desired camera inputs for which to capture media. Only media with valid inputs (e.g. device has that input stream and device was recording at the time) will be uploaded. An empty list is invalid. */
    inputs: MediaRetrievalPostMediaRetrievalRequestBody.Inputs.Item[];
    /** The desired media type. If a video is requested, endTime must be after startTime. If an image is requested, endTime must be the same as startTime. Must be one of: image, videoHighRes. Examples: image, videoHighRes.  Valid values: `image`, `videoHighRes` */
    mediaType: MediaRetrievalPostMediaRetrievalRequestBody.MediaType;
    /** A start time in RFC 3339 format. Millisecond precision and timezones are supported. (Examples: 2019-06-13T19:08:25Z, 2019-06-13T19:08:25.455Z, OR 2015-09-15T14:00:12-04:00). */
    startTime: string;
    /** Vehicle ID for which to initiate media capture. Examples: 1234 */
    vehicleId: string;
}

export namespace MediaRetrievalPostMediaRetrievalRequestBody {
    export type Inputs = Inputs.Item[];

    export namespace Inputs {
        /**
         * input  Valid values: `dashcamRoadFacing`, `dashcamDriverFacing`, `analog1`
         */
        export type Item = "dashcamRoadFacing" | "dashcamDriverFacing" | "analog1";
        export const Item = {
            DashcamRoadFacing: "dashcamRoadFacing",
            DashcamDriverFacing: "dashcamDriverFacing",
            Analog1: "analog1",
        } as const;
    }

    /**
     * The desired media type. If a video is requested, endTime must be after startTime. If an image is requested, endTime must be the same as startTime. Must be one of: image, videoHighRes. Examples: image, videoHighRes.  Valid values: `image`, `videoHighRes`
     */
    export type MediaType = "image" | "videoHighRes";
    export const MediaType = {
        Image: "image",
        VideoHighRes: "videoHighRes",
    } as const;
}
