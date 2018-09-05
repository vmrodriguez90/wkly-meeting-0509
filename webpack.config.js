const WebPack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
const directory = "docs";

module.exports = {
  output:
    {
      path: resolve(__dirname, directory),
      filename: 'main.js'
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.tmpl/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 500000,
              name: "./src/scss/assets/[name].[ext]",
              emitFile : false
            },
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([directory]),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new WebPack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery",
      "window.$":"jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
	new CopyWebpackPlugin([
	  {
		  from: './src/templates',
		  to: './templates',
	  },
	]),
  ],
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000,
    hints: false
  }
};
