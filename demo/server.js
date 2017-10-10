const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev.js');
console.log(process.env.NODE_ENV)
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

// Serve the files on port 3000.
app.listen(4000, function () {
  console.log('Example app listening on port 4000!\n');
});
