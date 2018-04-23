/**
 * 公共配置
 * @author lianpf
 * @date 18-04-20
 */

module.exports = {
  /** 加载器
   * loader 用于对模块的源代码进行转换, 在 import 或"加载"模块时预处理文件, 让 webpack 能够去处理那些非 JavaScript 文件 (webpack 自身只理解 JavaScript)
   * */
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          /** presets
           * "es2015" -- 预先加载es6编译的相关模块
           * "react" -- 需要编译jsx
           * "stage-0" -- 对ES7一些提案的支持，Babel通过插件的方式引入，让Babel可以编译ES7代码
           * */
          presets: ['es2015', "stage-0", 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css']
  }
};
