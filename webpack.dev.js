const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require("webpack");
// const scssDev = ['style-loader', 'css-loader', 'sass-loader'];
const scssDev =[ {
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            } ]

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: scssDev,
                include: (__dirname),
                exclude : "/node_modules/",
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
        // stats: "errors-only",
        open: true,
        hot: true,
        historyApiFallback: true,
        inline: true,
        progress: true,
        publicPath: '/'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});