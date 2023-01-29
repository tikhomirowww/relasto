const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    hot: true,
    // contentBase: './dist',
    open: true,
    port: 3000,
  },
  // resolve: {
  //   alias: {
  //     'react-dom': '@hot-loader/react-dom',
  //   },
  // },
})
