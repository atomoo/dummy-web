import {PrismaClient, User} from "@prisma/client"
import {dateResultExtend} from "./extend"

export const prisma = new PrismaClient().$extends({
    result: {
        user: dateResultExtend<User>(),
    }
})