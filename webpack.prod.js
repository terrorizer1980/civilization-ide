/* eslint-disable no-undef,
   @typescript-eslint/no-require-imports,
   @typescript-eslint/no-var-requires,
   global-require,
   @typescript-eslint/no-magic-numbers
*/

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    output: {
        filename: "[name].[contenthash:8].bundle.js"
    },
    optimization: {
        runtimeChunk: "single",
        moduleIds: "hashed",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [new CleanWebpackPlugin()]
});
