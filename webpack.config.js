// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/build/",
    filename: '[name].js'
  },
  // 新添加的module属性
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      {test: /\.css$/, loader: "style-loader!css-loader"}, // 把多个css压缩到一个css中。
    ]
  },
  babel: {
    presets: ["babel-preset-env", "react", "stage-2"]
  },
  devServer: {
    inline: true,
        // http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000
        // target: 'http://m.maoyan.com',
    // proxy: {
    //   '/api': {
    //     target: 'https://api.douban.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};