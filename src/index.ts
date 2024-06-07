import {Elysia} from "elysia"
import 'dotenv/config'
import {readEnvFile} from "./utils/config"
import {BaseResponse} from "./plugins/base-response"
import {controllers} from "./controllers"
import {logger} from "./plugins/logger"

readEnvFile().then(config => {
  new Elysia()
    .decorate('configuration', config)
    .use(logger)
    .trace(async ({handle, context}) => {
      const {path, body, request, query, logger} = context
      const {time, end} = await handle
      logger.info(`[${request.method}]: [${path}] with {query: ${JSON.stringify(query)}}, {body: ${JSON.stringify(body)}}`,(await end) - time, 'ms')
    })
    .onError(({error, logger}) => {
      logger.error(error)
      return {code: -1, message: 'system error', content: null}
    })
    .use(BaseResponse)
    .use(controllers)
    .onStart(({server, decorator}) => {
      decorator.logger.info(`Running at ${server?.hostname}:${server?.port}`)
    })
    .listen(3000)
})
