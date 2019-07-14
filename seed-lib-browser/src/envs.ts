/* global process */
export const nodeEnv = process.env.NODE_ENV
export const babelEnv = process.env.BABEL_ENV
export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'
export const isTest = process.env.NODE_ENV === 'test'
