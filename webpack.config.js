const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const path = require("path");
const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./src/index",
  output: {
    publicPath: "auto", // New
  },
  target: "web",
  optimization: {
    minimize: mode == 'production',
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: "billingApp",
      filename: "remoteEntry.js",
      remotes: {
        rateApp: `rateApp@http://localhost:3002/remoteEntry.js`,
        lib: "lib@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./accural": "./src/ui/accural/Accural",
      },
      shared: {

      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
