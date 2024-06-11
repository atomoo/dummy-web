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
      const {request, logger} = context
      const {time, end} = await handle
      const endTime = await end
      const dur = (endTime - time).toFixed(2)
      logger.info(`[${request.method}]: [${request.url}]`, dur, 'ms')
      // set.headers['Server-Timing'] = `handle;dur=${dur}`
    })
    .onError(({error, logger, body, path, query, request}) => {
      logger.error(`[${request.method}]: [${path}] with {query: ${JSON.stringify(query)}}, {body: ${JSON.stringify(body)}}`, ' ', error.name, error.message, error.stack, error.cause)
      return {code: -1, message: error.message || 'system error', content: null}
    })
    .use(BaseResponse)
    .use(controllers)
    .onStart(({server, decorator}) => {
      decorator.logger.info(`Running at ${server?.hostname}:${server?.port}`)
    })
    .listen(config.port ?? 3000)
})
