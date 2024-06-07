import Elysia from "elysia"
import {UserController} from "./user"

export const controllers = (app: Elysia) => {
    return app.use(UserController)
}