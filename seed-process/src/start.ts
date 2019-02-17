import { server } from './server'
import { Server } from 'http'
import { AddressInfo } from 'net'

interface Options {
  port: number
}

export function start({ port }: Options) {
  return new Promise<Server>((resolve, reject) => {
    server.listen(port, (err: Error) => {
      if (err) {
        return reject(err)
      }
      const addr = server.address() as AddressInfo
      console.log('server listening on port', addr.port) //tslint:disable-line
      resolve(server)
    })
  })
}
