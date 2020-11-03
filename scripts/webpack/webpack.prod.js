const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge(commonConfig, {
    mode: 'production',
    output: {
        publicPath: './',
        chunkFilename: '[name].js?[chunkhash:8]',
        filename: '[name].js?[chunkhash:8]'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
});

// NOTE Replace style-loader to mini-css-extract-plugin for profuction
config.module.rules[2].use[0] = MiniCssExtractPlugin.loader;

module.exports = config;