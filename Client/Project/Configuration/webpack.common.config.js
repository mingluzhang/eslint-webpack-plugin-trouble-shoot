/// <reference path="../node_modules/@types/node/index.d.ts"/>

const path = require("path");
const webpackUtility = require("./webpack.utility");
const appPath = webpackUtility.appPath;
const appCorePath = webpackUtility.appCorePath;
const nodeModulesPath = webpackUtility.nodeModulesPath;
var coreNodeModulesPath = path.join(appCorePath, "..", "node_modules");
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = env => {
  var pulseScripts = [
    path.join(appPath, "App.tsx")
  ];

  console.log("Start webpack ...");

  return {
    target: "web",

    mode: env.production ? "production" : "development",

    entry: {
      pulse: pulseScripts
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".json"],
      modules: [coreNodeModulesPath, nodeModulesPath, "resources", appPath, appCorePath],
    },

    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          pulseprereqs: {
            test: /node_modules/,
            name: "pulseprereqs"
          }
        }
      }
    },

    plugins: [new ESLintWebpackPlugin({
        emitError: true,
        emitWarning: true,
        failOnError: true,
        extensions: ["ts", "tsx"],
        overrideConfigFile: "../.eslintrc.js"
    })],
  };
};