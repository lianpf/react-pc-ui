var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
module.exports = merge(webpackBaseConfig, {
  // 多页面(入口)配置
  entry: {
    button: './src/components/button.js',
    loading: './src/components/loading.js',
    video: './src/components/video.js',
    picker: './src/components/picker.js',
    popup: './src/components/popup.js',
    baseList: './src/components/baseList.js',
    swiper: './src/components/swiper.js',
    toast: './src/components/toast.js',
    tab: './src/components/tab.js',
    slider: './src/components/slider.js'
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    })
  ]
});
