const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less')

module.exports = withCSS(withLess({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true
 },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config) => {
     return config
  }
 }))