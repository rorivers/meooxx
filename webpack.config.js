const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: "./app",
    port: 8123
  },

  entry: {
    index: [
      "webpack/hot/dev-server",
      "webpack-dev-server/client?http://localhost:8080",
      path.resolve(__dirname, "app/main.jsx")
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },

      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, "app"),
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.(jpeg|png|jpg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: 'images/[name].[ext]',
        }
      },

      //����
      {
        // ר��iconfont����ʹ�õģ�������һ��ʱ�������Ҫ�ر�ƥ�䵽
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: 'images/[name].[ext]',
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
