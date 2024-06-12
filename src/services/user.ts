import {Prisma} from '@prisma/client'
import {prisma} from "../prisma"

export class UserService {

    private readonly user

    constructor() {
        this.user = prisma.user
    }

    findAll() {
        return this.user.findMany()
    }

    create(user: Prisma.UserCreateInput) {
        return this.user.create({data: user, select: {id: true}})
    }

    findById(id: string) {
        return this.user.findUnique({where: {id}})
    }

    deleteById(id: string) {
        return this.user.delete({where: {id}})
    }
}
