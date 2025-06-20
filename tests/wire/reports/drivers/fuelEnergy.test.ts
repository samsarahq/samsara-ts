/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../../mock-server/MockServerPool.js";
import { SamsaraClient } from "../../../../src/Client";

describe("FuelEnergy", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new SamsaraClient({ token: "test", version: "2025-05-12", environment: server.baseUrl });

        const rawResponseBody = {
            data: {
                driverReports: [
                    {
                        distanceTraveledMeters: 1384000,
                        driver: { id: "45646", name: "Driver Bob" },
                        efficiencyMpge: 21.4,
                        energyUsedKwh: 73.2,
                        engineIdleTimeDurationMs: 4320000,
                        engineRunTimeDurationMs: 576000,
                        estCarbonEmissionsKg: 22.7,
                        estFuelEnergyCost: { amount: 94.01, currencyCode: "USD" },
                        fuelConsumedMl: 162773,
                    },
                ],
            },
            pagination: { endCursor: "MjkY", hasNextPage: true },
        };
        server
            .mockEndpoint()
            .get("/fleet/reports/drivers/fuel-energy")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.reports.drivers.fuelEnergy.list({
            startDate: "startDate",
            endDate: "endDate",
        });
        expect(response).toEqual({
            data: {
                driverReports: [
                    {
                        distanceTraveledMeters: 1384000,
                        driver: {
                            id: "45646",
                            name: "Driver Bob",
                        },
                        efficiencyMpge: 21.4,
                        energyUsedKwh: 73.2,
                        engineIdleTimeDurationMs: 4320000,
                        engineRunTimeDurationMs: 576000,
                        estCarbonEmissionsKg: 22.7,
                        estFuelEnergyCost: {
                            amount: 94.01,
                            currencyCode: "USD",
                        },
                        fuelConsumedMl: 162773,
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
