import { start } from './start'

const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 1234
start({ port: PORT })
