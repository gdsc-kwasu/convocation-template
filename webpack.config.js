/** @format */

const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const mode = process.env.ENV_MODE || "development";
const isProduction = mode !== "development";
const styleLoader = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const devPlugins = [new Dotenv()];
const prodPlugin = [
  new webpack.DefinePlugin({
    "process.env": {
      ENV_MODE: JSON.stringify(process.env.ENV_MODE),
      API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
    },
  }),
  new CompressionPlugin({ algorithm: "gzip" }),
];

module.exports = {
  mode,
  entry: path.resolve(__dirname, "./src/app.jsx"),
  module: {
    rules: [
      { test: /\.(jsx?)$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.(sa|s?c)ss$/,
        use: [styleLoader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg/,
        loader: "svg-url-loader",
        options: {
          iesafe: true,
        },
      },

      {
        test: /\.(woff2?|eot|ttf|jpe?g|png|gif)$/,
        type: "asset/resource",
        include: path.join(__dirname, "./src/assets"),
        generator: {
          filename: "assets/[name]-[contenthash][ext]",
        },
      },
    ],
  },
  target: "web",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      assets: path.resolve("./src/assets"),
      process: "process/browser",
    },
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    watchContentBase: true,
    hot: true,
    compress: true,
    stats: {
      chunks: false,
      modules: false,
      colors: true,
      assets: false,
      moduleAssets: false,
    },
    historyApiFallback: true,
    port: 5005,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favico.svg"
    }),
    new MiniCssExtractPlugin({ linkType: "text/css" }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    ...(isProduction ? prodPlugin : devPlugins),
  ],
};

