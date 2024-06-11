import Elysia, {t} from "elysia"
import {UserService} from "../services/user"
import {UserModel} from "../models/user"

export const UserController = new Elysia()
    .use(UserModel)
    .decorate('userService', new UserService())
    .get('/user/list', async ({userService}) => {
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
    .get(
        '/user',
        async ({userService, query: {id}}) => {
            const user = await userService.findById(id)
            if (!user) {
                throw new Error('User not found')
            }
            return user
        },
        {
            query: t.Object({id: t.String()})
        }
    )
    .post(
        '/user/delete',
        async ({userService, body: {id}}) => {
            const user = await userService.findById(id)
            if (!user) {
                throw new Error('User not found')
            }
            try {
                await userService.deleteById(id)
            } catch (error) {
                throw new Error('delete user error')
            }
            return null
        },
        {
            body: t.Object({id: t.String()})
        }
    )
