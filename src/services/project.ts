import {Prisma} from '@prisma/client'
import {prisma} from "../prisma"

export class ProjectService {

    private readonly project

    constructor() {
        this.project = prisma.project
    }

    findAll() {
        return this.project.findMany()
    }

    create(project: Prisma.ProjectCreateInput) {
        return this.project.create({data: project, select: {id: true}})
    }

    findById(id: string) {
        return this.project.findUnique({where: {id}})
    }

    deleteById(id: string) {
        return this.project.delete({where: {id}})
    }
}
