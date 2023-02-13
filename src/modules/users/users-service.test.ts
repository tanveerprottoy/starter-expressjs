import { describe, expect, it, test } from '@jest/globals';
import { agent as request } from "supertest";
import { app } from "../../app";
import usersService from "./users-service";

describe("UserService", () => {
    describe("when passed a valid user entity is created", () => {
        // api test
        it("should respond with a 201 status code", async () => {
            const response = await request(app).post("/users").send({
                name: "name",
                address: "address"
            });
            expect(response.statusCode).toBe(201);
        });

        // method test
        describe("should return 9", () => {
            test("multiplies 3 * 3 to equal 9", () => {
                expect(usersService.multiply(3, 3)).toBe(9);
            });
        });
    });
});