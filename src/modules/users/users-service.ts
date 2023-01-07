import DbUtils from "../../libs/mongodb/db.utils";
import { HttpCodes } from "../../utils/constants";
import { ResponseUtils } from "../../utils/response-utils";
import usersRepository from "./users-repository";
import express from "express";

class UsersService {

    create = async (
        data: any
    ): Promise<any> => {
        const result = await usersRepository.create(data);
        console.log(result);
        console.log(result.insertedId.toString());
        return result.insertedId.toString();
    };

    readMany = async (
        limit: number,
        page: number,
        res: express.Response,
    ): Promise<any> => {
        const cursor = usersRepository.readMany(limit, page);
        let docs = await DbUtils.streamCursorData(cursor);
        if(!docs) {
            docs = [];
        }
        return ResponseUtils.respond(
            HttpCodes.HTTP_200,
            docs,
            res,
        );
    };

    readOne = async (
        id: string
    ): Promise<any> => {
        return await usersRepository.readOne(id);
    };

    update = async (
        id: string,
        data: any
    ): Promise<any> => {
        return await usersRepository.update(id, data);
    };
}

export default new UsersService;