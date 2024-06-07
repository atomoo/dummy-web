import Elysia from "elysia"

export const BaseResponse = (app: Elysia) => app.mapResponse(({response}) => {
    return new Response(
        JSON.stringify({code: 0, content: response}), 
        {
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            status: 200
        }
    )
})