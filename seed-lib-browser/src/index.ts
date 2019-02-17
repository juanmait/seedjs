import { nodeEnv, babelEnv, isProd, isDev, isTest } from './envs'

export const formatedEnvs = `
  nodeEnv = ${nodeEnv}
  babelEnv = ${babelEnv}
  isProd = ${isProd}
  isDev = ${isDev}
  isTest = ${isTest}
`
