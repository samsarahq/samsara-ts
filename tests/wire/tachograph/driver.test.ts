/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool.js";
import { SamsaraClient } from "../../../src/Client";

describe("Driver", () => {
    test("activity", async () => {
        const server = mockServerPool.createServer();
        const client = new SamsaraClient({ token: "test", version: "2025-05-12", environment: server.baseUrl });

        const rawResponseBody = {
            data: [
                {
                    activity: [
                        {
                            endTime: "2020-01-03T16:04:05Z07:00",
                            isManualEntry: false,
                            startTime: "2020-01-02T15:04:05Z07:00",
                        },
                    ],
                    driver: { id: "88668", name: "Susan Bob" },
                },
            ],
            pagination: { endCursor: "MjkY", hasNextPage: true },
        };
        server
            .mockEndpoint()
            .get("/fleet/drivers/tachograph-activity/history")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.tachograph.driver.activity({
            startTime: "startTime",
            endTime: "endTime",
        });
        expect(response).toEqual({
            data: [
                {
                    activity: [
                        {
                            endTime: "2020-01-03T16:04:05Z07:00",
                            isManualEntry: false,
                            startTime: "2020-01-02T15:04:05Z07:00",
                        },
                    ],
                    driver: {
                        id: "88668",
                        name: "Susan Bob",
                    },
                },
            ],
            pagination: {
                endCursor: "MjkY",
                hasNextPage: true,
            },
        });
    });

    test("files", async () => {
        const server = mockServerPool.createServer();
        const client = new SamsaraClient({ token: "test", version: "2025-05-12", environment: server.baseUrl });

        const rawResponseBody = {
            data: [
                {
                    driver: { id: "88668", name: "Susan Bob" },
                    files: [
                        {
                            cardNumber: "1000000492436002",
                            createdAtTime: "2020-01-02T15:04:05Z07:00",
                            id: "4aff772c-a7bb-45e6-8e41-6a53e34feb83",
                            url: "https://samsara-tachograph-files.s3.us-west-2.amazonaws.com/123/456/789/4aff772c-a7bb-45e6-8e41-6a53e34feb83.ddd",
                        },
                    ],
                },
            ],
            pagination: { endCursor: "MjkY", hasNextPage: true },
        };
        server
            .mockEndpoint()
            .get("/fleet/drivers/tachograph-files/history")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.tachograph.driver.files({
            startTime: "startTime",
            endTime: "endTime",
        });
        expect(response).toEqual({
            data: [
                {
                    driver: {
                        id: "88668",
                        name: "Susan Bob",
                    },
                    files: [
                        {
                            cardNumber: "1000000492436002",
                            createdAtTime: "2020-01-02T15:04:05Z07:00",
                            id: "4aff772c-a7bb-45e6-8e41-6a53e34feb83",
                            url: "https://samsara-tachograph-files.s3.us-west-2.amazonaws.com/123/456/789/4aff772c-a7bb-45e6-8e41-6a53e34feb83.ddd",
                        },
                    ],
                },
            ],
            pagination: {
                endCursor: "MjkY",
                hasNextPage: true,
            },
        });
    });
});
