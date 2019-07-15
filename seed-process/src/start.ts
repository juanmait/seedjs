import { server } from './server'
import { Server } from 'http'
import { AddressInfo } from 'net'

interface Options {
  port: number
}

export function start({ port }: Options) {
  return new Promise<Server>((resolve, _reject) => {
    server.on('error', error => {
      console.error(error)
    })
    server.listen(port, () => {
      const addr = server.address() as AddressInfo
      console.log('server listening on port', addr.port)
      resolve(server)
    })
  })
}
