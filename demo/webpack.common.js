const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // publicPath: '/'
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'prodution' 
    }),
    new cleanWebpackPlugin(['dist'])
  ]
}



























  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     },
  //     {
  //       test: /\.(png|jpg|svg|gif|jpeg)$/,
  //       use: ['file-loader']
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: ['file-loader']
  //     },
  //     {
  //       test: /\.xml$/,
  //       use: ['xml-loader']
  //     },
  //     {
  //       test: /\.(csv|tsv)$/,
  //       use: ['csv-loader']
  //     }
  //   ]
  // }
