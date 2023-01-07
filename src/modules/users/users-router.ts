import usersController from "./users-controller";

export function initUserRouter(app: any) {
    app.get('/', usersController.readMany);
    return app;
}
