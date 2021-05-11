
const { ANALYZE } = process.env

module.exports = {
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    if (ANALYZE && !isServer) {

      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: `./analyze/client-${new Date().toLocaleString()}.html`,
        })
      )
    }

    return config
  },
}

