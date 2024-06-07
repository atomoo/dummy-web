import {PrismaClient} from "@prisma/client"
import {userResultExtend} from "../models/user"

export const db = new PrismaClient().$extends({
    result: {
        user: userResultExtend,
    }
})