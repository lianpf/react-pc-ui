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
  externals: {
    'react': 'react',
    'react-dom': 'reactDOM'
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
