import * as env from './env' // make sure this file is always the first thing to load
import { start } from './start'

start({ port: env.PORT })
