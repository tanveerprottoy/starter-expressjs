import express from "express";
import usersService from "./users-service";

class UsersController {

    readMany = async (
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> => {
        let limit = parseInt(req.query.limit.toString());
        let page = parseInt(req.query.page.toString());
        return await usersService.readMany(limit, page, res);
    };
}

export default new UsersController;