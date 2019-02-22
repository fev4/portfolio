const withTM = require('next-transpile-modules')

module.exports = withTM({
  transpileModules: ['@fillipvt/components'],
  target: 'serverless'
})