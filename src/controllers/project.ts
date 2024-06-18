import Elysia from "elysia"

import {ProjectService} from "../services/project"

export const ProjectController = new Elysia()
    .decorate('projectService', new ProjectService())
    