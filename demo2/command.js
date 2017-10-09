

const path = require('path');
const yargs = require('yargs');
const webpack = require('webpack');

// 获取nodejs 自带的运行命令行
const exec = require('child_process').execSync;
// console.log( yargs.argv) 返回一个对象
// 获取传入的文件夹参数
let folder = yargs.argv['f']
let configFile = require(`./${folder}/webpack.config.js`);
// 相对路径的上下文
configFile.context = path.resolve(process.cwd(), `./${folder}`);
configFile.output.path = configFile.output.path ? configFile.output.path : path.resolve(configFile.context, './dist');
configFile.watch = true;
Promise.resolve({then: (resolve) => {
  resolve(exec(`rm -rf ${configFile.output.path}`))
}}).then(() => {
  webpack(configFile, (err, stats) => {
    if(err || stats.hasErrors()) {
      return err
    }
    console.log(stats.toString({
      color: true
    }))
  })
})
Promise.resolve(exec(`rm -rf ${configFile.output.path}`)).then(() => {
  webpack(configFile, (err, stats) => {
    if(err || stats.hasErrors()) {
      return err
    }
    console.log(stats.toString({
      color: true
    }))
  })
})
