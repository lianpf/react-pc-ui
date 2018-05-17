const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
  // 多页面(入口)配置
  entry: {
    button: './src/component/button/index.js',
    table: './src/component/table/index.js',
    message: './src/component/message/index.js',
  },
  /**
   * 多个入口起点
   * 如果配置创建了多个单独的 "chunk"（例如，使用多个入口起点或使用像 CommonsChunkPlugin 这样的插件），则应该使用占位符(substitutions)来确保每个文件具有唯一的名称
   * */
  output: {
    path: path.resolve(__dirname, '../lib'), //输出目标
    filename: '[name]/index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  /**
   * 剥离了那些不需要改动的依赖模块
   * 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)
   * */
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
