/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
  /**
   * 入口
   * 分离应用程序(app) 和 第三方库(vendor) 入口
   * */
  entry: {
    app: './examples/index',
    // vendors: './src/vendors.js'
  },
  /**
   * 输出
   * filename 用于输出文件的文件名
   * 目标输出目录 path 的绝对路径
   * */
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../examples/dist'),
    publicPath: '',
    chunkFilename: '[name].chunk.js'
  },
  /**
   *
   * */
  // devtool: 'inline-source-map',
  // devServer: {
  //   // contentBase: './dist',
  //   hot: true
  // },
  /**
   * mode
   * 环境
   * */
  mode: 'development',
  /**
   * 插件
   * 插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量, 可以用来处理各种各样的任务
   * */
  plugins: [
    new FriendlyErrorsPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    /** HtmlWebpackPlugin
     * HtmlWebpackPlugin 创建了一个全新的index.html 文件去替换原来的index.html，所有的 bundle 会自动添加到新的 html 中
     * */
    new HtmlWebpackPlugin({
      // title: 'component library'
      inject: true,
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/index.html')
    }),
  ]
});
