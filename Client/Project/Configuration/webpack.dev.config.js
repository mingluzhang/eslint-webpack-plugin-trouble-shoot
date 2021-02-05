/// <reference path="../node_modules/@types/node/index.d.ts"/>

const webpackUtility = require("./webpack.utility");
const appPath = webpackUtility.appPath;
const appCorePath = webpackUtility.appCorePath;
const webpack = require("webpack");
const path = require("path");
const commonConfig = require("./webpack.common.config");
const merge = require("webpack-merge");

const devConfigExtension = env => {
  return {
    output: {
      filename: "[name].js",
      path: path.join(appPath, "dist")
    },

    resolve: {
      alias: {
        "react-dom$": "@hot-loader/react-dom"
      }
    },

    devtool: "eval-source-map",

    watch: true,

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [appPath, appCorePath],
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                plugins: ["react-hot-loader/babel"],
              },
            },
            {
              loader: "awesome-typescript-loader",
              options: {
                configFileName: path.join(appPath, "tsconfig.json"),
                silent: true,
                useCache: true
              }
            }
          ]
        },
      ]
    },

    plugins: [
      // Used for hot-reload
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        DEBUG: true,
        UNITTEST: false
      })
    ]
  };
};

module.exports = [
  env => {
    return merge(commonConfig(env), devConfigExtension(env));
  },
]
