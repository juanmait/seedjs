require('@babel/register').default({
  // Setting this will remove the currently hooked extensions of `.es6`, `.es`, `.jsx`, `.mjs`
  // and .js so you'll have to add them back if you want them to be used again.
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx', '.svg'],

  // Setting this to false will disable the cache.
  cache: false,
})
// require('babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js')
// require('@babel/plugin-transform-runtime')
