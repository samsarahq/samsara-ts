/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool.js";
import { SamsaraClient } from "../../../src/Client";

describe("Media", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new SamsaraClient({ token: "test", version: "2025-05-12", environment: server.baseUrl });

        const rawResponseBody = {
            data: {
                media: [
                    {
                        availableAtTime: "2019-11-11T14:00:12-04:00",
                        endTime: "2019-06-13T19:08:25Z",
                        input: "dashcamForwardFacing",
                        mediaType: "image",
                        startTime: "2019-06-13T19:08:25Z",
                        triggerReason: "api",
                        urlInfo: {
                            url: "https://sample.s3.url.com/image.jpeg",
                            urlExpiryTime: "2019-11-11T14:00:12-04:00",
                        },
                        vehicleId: "1234",
                    },
                ],
            },
            pagination: { endCursor: "MjkY", hasNextPage: true },
        };
        server.mockEndpoint().get("/cameras/media").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.cameras.media.list({
            vehicleIds: "vehicleIds",
            startTime: "startTime",
            endTime: "endTime",
        });
        expect(response).toEqual({
            data: {
                media: [
                    {
                        availableAtTime: "2019-11-11T14:00:12-04:00",
                        endTime: "2019-06-13T19:08:25Z",
                        input: "dashcamForwardFacing",
                        mediaType: "image",
                        startTime: "2019-06-13T19:08:25Z",
                        triggerReason: "api",
                        urlInfo: {
                            url: "https://sample.s3.url.com/image.jpeg",
                            urlExpiryTime: "2019-11-11T14:00:12-04:00",
                        },
                        vehicleId: "1234",
                    },
                ],
            },
            pagination: {
                endCursor: "MjkY",
                hasNextPage: true,
            },
        });
    });
});
