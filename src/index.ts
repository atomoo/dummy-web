import {Elysia} from "elysia"
import 'dotenv/config'
import {readEnvFile} from "./utils/config"
import {BaseResponse} from "./plugins/base-response"
import {controllers} from "./controllers"

readEnvFile().then(config => {
  new Elysia()
    .decorate('configuration', config)
    .trace(async ({request, response}) => {
      const {time} = await request
      const {end} = await response
      console.log('handle took',(await end) - time, 'ms')
    })
    .onError(({error}) => {
      console.error(error)
      return {code: -1, message: 'system error', content: null}
    })
    .use(BaseResponse)
    .use(controllers)
    .onStart(({server}) => {
      console.log(`Running at ${server?.hostname}:${server?.port}`)
    })
    .listen(3000)
})
