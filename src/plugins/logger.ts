/* eslint-disable no-console */
import chalk from 'chalk'
import Elysia from 'elysia'

export class Logger {

    info(...args: any[]) {
        console.log(...args)
    }

    debug(...args: any[]) {
        console.debug(...args)
    }

    error(...args: any[]) {
        console.log(chalk.red(...args))
    }

}

export const logger = new Elysia({name: 'logger'}).decorate('logger', new Logger())