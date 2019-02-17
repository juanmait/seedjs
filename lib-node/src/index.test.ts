import { formatedEnvs } from '.'

test('all is okay', () => {
  expect(formatedEnvs).toMatchInlineSnapshot(`
"
  nodeEnv = test
  babelEnv = undefined
  isProd = false
  isDev = false
  isTest = true
"
`)
})
