import { Prisma } from '@prisma/client'
import { db } from "../prisma";

export class UserService {
    user

    constructor() {
        this.user = db.user
    }

    findAll() {
        return this.user.findMany()
    }

    create(user: Prisma.UserCreateInput) {
        return this.user.create({ data: user, select: { id: true } })
    }
}