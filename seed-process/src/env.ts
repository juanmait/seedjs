import * as env from 'dotenv'
const result = env.config()

// DEFAULTS:

const DEFAULT_PORT = 3000
const DEFAULT_HOST = 'localhost'
const DEFAULT_NODE_ENV = 'development'
const DEFAULT_BABEL_ENV = 'development'

if (result.error) {
  const noEnvFound = Boolean(
    result.error.message.match(/.+\.env['"]?$/) &&
      result.error.message.match(/ENOENT/)
  )

  if (noEnvFound) {
    console.warn(
      `
    WARNING: No .env file was found! Default values will be used.`
    )
  } else {
    throw result.error
  }
}

// EXPORTS:

export const HOST = process.env.HOST || DEFAULT_HOST

const castedProt =
  (process.env.HOST && parseInt(process.env.HOST, 10)) || DEFAULT_PORT
export const PORT = (isNaN(castedProt) && DEFAULT_PORT) || castedProt

export const NODE_ENV = process.env.NODE_ENV || DEFAULT_NODE_ENV
export const BABEL_ENV = process.env.BABEL_ENV || DEFAULT_BABEL_ENV

console.info(`
    -------------------------------------------------------------
    CONFIG:
    -------------------------------------------------------------
    HOST:       ${HOST}
    PORT:       ${PORT}
    NODE_ENV:   ${PORT}
    BABEL_ENV:  ${PORT}
    `)
