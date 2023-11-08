const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = "./dist";

const webpack = require("webpack");

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: process.env.NODE_ENV ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: process.env.NODE_ENV ? "[id].css" : "[id].[contenthash].css",
  }),
];
if (process.env.NODE_ENV) {
  // only enable hot in development
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //
  output: {
    path: path.join(__dirname, outputDir),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: [".js"] // if we were using React.js, we would include ".jsx"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            exclude: /node_modules/
          } // if we were using React.js, we would include "react"
        }
      },
      {
        test: /\.css$/i,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: "../",
              // hmr: process.env.NODE_ENV === "development"
            }
          },
          // "sass-loader",
          "css-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
    ]
  },
  plugins
};
