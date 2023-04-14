import express from "express";
import usersController from "./users-controller";

export const userRouterOld = express.Router();

userRouterOld.post('/', usersController.create);
userRouterOld.get('/', usersController.readMany);
userRouterOld.get('/:id', usersController.readOne);
userRouterOld.patch('/', usersController.update);
userRouterOld.delete('/', usersController.delete);
