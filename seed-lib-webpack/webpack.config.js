const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: ['./src/index.ts'],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  mode,
  devtool: prod ? false : 'inline-source-map',
}
