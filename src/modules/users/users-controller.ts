import express from "express";
import usersService from "./users-service";

class UsersController {

    async create(
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> {
        return await usersService.create({});
    }

    async readMany(
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> {
        const limit = parseInt(req.query.limit.toString());
        const page = parseInt(req.query.page.toString());
        return await usersService.readMany(limit, page, res);
    }

    async readOne(
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> {
        const id = req.query.id.toString();
        return await usersService.readOne(id, res);
    }

    async update(
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> {
        const id = req.query.id.toString();
        return await usersService.update(id, {});
    }

    async delete(
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> {
        const id = req.query.id.toString();
        return await usersService.delete(id);
    }
}

export default new UsersController;