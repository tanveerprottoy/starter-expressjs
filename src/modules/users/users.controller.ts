import express from "express";

class UsersController {

    getAll = async (
        req: express.Request,
        res: express.Response,
    ): Promise<express.Response> => {
        let userList = await UsersRepository.getAll();
        if(!userList) {
            return ResponseUtils.respond(
                res,
                Constants.HTTP_200,
                []
            );
        }
        return ResponseUtils.respond(
            res,
            Constants.HTTP_200,
            userList
        );
    };
}

export default new UsersController;