import Elysia from "elysia"
import {UserService} from "../services/user"
import {UserModel} from "../models/user"

export const UserController = new Elysia()
    .decorate('userService', new UserService())
    .use(UserModel)
    .get('/user', async ({userService}) => {
        const list = await userService.findAll()
        return {data: list}
    })
    .post(
        '/user/create', 
        async ({body, userService}) => {
            return userService.create(body)
        },
        {body: 'user'}
    )
