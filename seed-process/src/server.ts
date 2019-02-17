import { createServer, IncomingMessage, ServerResponse } from 'http'

export const server = createServer(
  (_req: IncomingMessage, res: ServerResponse) => {
    res.end('hello')
  },
)
