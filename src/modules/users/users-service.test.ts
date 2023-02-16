import { afterAll, beforeAll, describe, expect, it, test } from '@jest/globals';
import { agent as request } from "supertest";
import { GlobalValues } from "../../utils/constants";
import usersService from "./users-service";
import { createServer } from "../../server";
import express from "express";
import { DbClientInstance } from "../../libs/mongodb";

let app: express.Application;

describe("UserService", () => {
    beforeAll(async () => {
        // start the server
        app = await createServer();
    });
    afterAll(() => {
        DbClientInstance.close();
    });
    describe("user get", () => {
        describe("when no user is found, should return 404", () => {
            // api test
            it("should respond with a 404 status code", async () => {
                const id = "id";
                const response = await usersService.readMany(10, 1, id, app.);
                expect(response.statusCode).toBe(404);
            });
        });
    });
    // method test
    describe("should return 9", () => {
        test("multiplies 3 * 3 to equal 9", () => {
            expect(usersService.multiply(3, 3)).toBe(9);
        });
    });
});