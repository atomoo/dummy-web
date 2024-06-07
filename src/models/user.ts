import Elysia, {t} from 'elysia'

export const UserModel = new Elysia().model('user', t.Object({
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    username: t.String(),
    password: t.String(),
}))