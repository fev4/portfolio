const withTM = require('next-transpile-modules')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTM({
  // You may only need to add assetPrefix in the production.
  transpileModules: ['@fillipvt/components'],
  target: 'serverless',
  assetPrefix: isProd ? 'https://fillipvt.com/blog' : '',
  webpack: function (cfg) {
    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }

    return cfg
  }
})