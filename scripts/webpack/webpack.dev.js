const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
    ]
});
