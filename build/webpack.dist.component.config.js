const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function getEntry(globPath) {
  let files = glob.sync(globPath);
  let entries = {};
  let entry = void 0;
  let dirname = void 0;
  let extname = void 0;

  for (let i = 0; i < files.length; i++) {
    let key = void 0;
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);

    let startPosition = entry.indexOf('src/component/');

    if( startPosition !== -1 && extname === '.js') {
      key = dirname.slice((startPosition + 'src/component/'.length), dirname.length);
    }
    entries[key] = entry;
  }
  return entries;
}


function addEntry() {
  let entries = getEntry('./src/component/**/index.js');
  return entries;
}
module.exports = merge(webpackBaseConfig, {
  entry: addEntry(),
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
