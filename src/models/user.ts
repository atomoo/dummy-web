import {User} from '@prisma/client'
import dayjs from 'dayjs'
import Elysia, {t} from 'elysia'

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export const userResultExtend = {
    createdAt: {
        needs: {createdAt: true},
        compute(data: User) {
            return dayjs(data.createdAt).format(DATE_FORMAT)
        },
    },
    updatedAt: {
        needs: {updatedAt: true},
        compute(data: User) {
            return dayjs(data.updatedAt).format(DATE_FORMAT)
        },
    },
}

export const UserModel = new Elysia().model('user', t.Object({
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    username: t.String(),
    password: t.String(),
}))