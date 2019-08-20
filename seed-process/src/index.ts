import * as env from './env' // make sure this file is always the first thing to load
import { start } from './start'

console.log(`
--------------------------
HOST:         ${env.HOST}
PORT:         ${env.PORT}
BABEL_ENV:    ${env.BABEL_ENV}
NODE_ENV:     ${env.NODE_ENV}
--------------------------
`)

start({ port: env.PORT })
