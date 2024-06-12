import {Api, PrismaClient, Project, User} from "@prisma/client"
import {dateResultExtend} from "./extend"

export const prisma = new PrismaClient().$extends({
    result: {
        user: dateResultExtend<User>(),
        api: dateResultExtend<Api>(),
        project: dateResultExtend<Project>(),
    }
})