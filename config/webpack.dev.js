const path = require("path")
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: [
            /*
             * webpack adds a polyfill before the actual code
             * ie11 needs it because it cant even run the transpiled code 
             * that babel gives you
             */
            "core-js/fn/promise", 
            "./src/main.js"
        ]
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader", //linting
                        options: {
                            attrs: ["img:src"] // target img elements src attribute
                        }
                    },
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader'
                    }
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader',
                        query: {
                            inlineRequires: '/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.hbs",
            title: "lol"
        })
    ]
}