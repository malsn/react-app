// Webpack v4
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundles/app/js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
	  {
        test: /\.scss$/,
        use:  [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
	new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      filename: 'bundles/app/css/style.[contenthash].css',
    }),
	new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/base.html.twig',
      filename: 'base.html.twig'
    }),
    new WebpackMd5Hash()
  ]
};