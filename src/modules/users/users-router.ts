import express from "express";
import usersController from "./users-controller";

export function initUserRouter(): express.Router {
    const router = express.Router();
    router.post('/', usersController.create);
    router.get('/', usersController.readMany);
    router.get('/:id', usersController.readOne);
    router.patch('/', usersController.update);
    router.delete('/', usersController.delete);
    return router;
}
