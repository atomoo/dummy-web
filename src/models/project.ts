import Elysia, {t} from 'elysia'

export const ProjectModel = new Elysia().model('project', t.Object({
    name: t.Optional(t.String()),
    description: t.Optional(t.String()),
}))