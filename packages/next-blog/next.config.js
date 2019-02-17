const withTM = require('next-transpile-modules')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTM({
  // You may only need to add assetPrefix in the production.
  transpileModules: ['@fillipvt/components'],
  target: 'serverless',
  assetPrefix: isProd ? 'https://fillipvt.com/blog' : ''
})