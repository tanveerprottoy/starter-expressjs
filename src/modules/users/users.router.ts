import usersController from "./users.controller";

export function initUserRouter(router: any) {
    router.get('/', usersController.getAll);
}
