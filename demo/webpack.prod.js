let merge = require('webpack-merge');
let webpack = require('webpack')
let commonConfig = require('./webpack.common.js');
let uglifyjs = require('uglifyjs-webpack-plugin')

console.log(process.env.NODE_ENV)
module.exports = merge(commonConfig, {
  plugins: [
    new uglifyjs(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV' : JSON.stringify('production')
    //   }
    // })
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
