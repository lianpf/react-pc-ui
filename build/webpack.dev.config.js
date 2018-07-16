/**
 * 本地预览
 * @author lianpf
 * @date 18-04-20
 */

var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(webpackBaseConfig, {
  entry: {
    app: './examples/index',
    // vendors: './src/vendors.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../examples/dist'),
    publicPath: '',
    chunkFilename: '[name].chunk.js'
  },
  mode: 'development',
  plugins: [
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      // title: 'component library'
      inject: true,
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/index.html')
    }),
  ]
});
