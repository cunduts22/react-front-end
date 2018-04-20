const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin("css/style.[contenthash].bundle.css",{ disable: false, allChunks: true});
const cssProd = extractSass.extract({
    use: [
        {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
        }
    ],
    fallback: "style-loader",
    publicPath: 'assets/css/'
});
module.exports = merge(common, {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssProd
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({sourceMap: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        extractSass
    ]
});