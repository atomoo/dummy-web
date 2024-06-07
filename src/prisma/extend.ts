import dayjs from "dayjs"

const DEFAULT_TEMPLATE = 'YYYY-MM-DD HH:mm:ss'

export const dateResultExtend = <T extends {createdAt: Date, updatedAt: Date}>(template: string = DEFAULT_TEMPLATE) => {
    return {
        createdAt: {
            needs: {createdAt: true},
            compute(data: T) {
                return dayjs(data.createdAt).format(template)
            },
        },
        updatedAt: {
            needs: {updatedAt: true},
            compute(data: T) {
                return dayjs(data.updatedAt).format(template)
            },
        },
    }
}
