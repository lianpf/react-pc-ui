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
    modal: './src/component/modal/index.js',
    breadcrumb: './src/component/breadcrumb/index',
    tabs: './src/component/tabs/index',
    slider: './src/component/slider/index',
    steps: './src/component/steps/index',
    countdown: './src/component/countdown/index',
    pagination: './src/component/pagination/index',
  },
  output: {
    path: path.resolve(__dirname, '../lib'), //输出目标
    filename: '[name]/index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
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
