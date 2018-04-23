var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
module.exports = merge(webpackBaseConfig, {
    entry: {
      "react-pc-ui": './src/components/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../lib'), //输出目标
      filename: '[name].js',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      'react': 'react',
      'react-dom': 'reactDOM'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          },
          comments: false,
          sourceMap: false
      })
   ]
});
