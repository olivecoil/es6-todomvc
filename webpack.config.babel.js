const webpackValidator = require('webpack-validator')
const {resolve} = require('path')

module.exports = env => {
  const config = {
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
    },
    devtool: env.prod ? 'source-map' : 'eval',
  }
  return webpackValidator(config)
}
