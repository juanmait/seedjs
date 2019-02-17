import { start } from './start'

test('server start okay', async () => {
  expect.assertions(1)
  const server = await start({ port: 1234 })
  expect(server.listening).toBe(true)
  server.close()
})
