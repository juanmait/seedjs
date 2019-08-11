import * as env from 'dotenv'
env.config()
import { start } from './start'

console.log(`
--------------------------
NODE_ENV:     ${process.env.NODE_ENV}
BABEL_ENV:    ${process.env.BABEL_ENV}
EXAMPLE_ENV:  ${process.env.EXAMPLE_ENV}
--------------------------
`)

const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 1234
start({ port: PORT })
