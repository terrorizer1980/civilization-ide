/* eslint-disable no-undef,
   @typescript-eslint/no-require-imports,
   @typescript-eslint/no-var-requires,
   global-require,
   @typescript-eslint/no-magic-numbers
*/

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    output: {
        pathinfo: false
    }
});
