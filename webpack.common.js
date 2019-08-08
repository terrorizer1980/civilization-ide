/* eslint-disable no-undef,
   @typescript-eslint/no-require-imports,
   @typescript-eslint/no-var-requires,
   global-require,
   @typescript-eslint/no-magic-numbers
*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/app.ts"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, "src"),
                loader: "vue-loader",
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        scss: "vue-style-loader!css-loader!sass-loader",
                        sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
                    }
                }
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "src"),
                loader: "ts-loader",
                options: {
                    happyPackMode: true,
                    experimentalWatchApi: true,
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".js",
            ".vue",
            ".json"
        ],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true
        }),
        new HtmlWebpackPlugin({
            title: "Webpack TypeScript+Vue Boilerplate"
        }),
        new VueLoaderPlugin()
    ]
};
