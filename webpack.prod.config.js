var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); // 生成html文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge'); // 合并两个webpack配置文件
var webpackBaseConfig = require('./webpack.config.js');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        // 将入口文件重命名为带有20位hash值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [
        new ExtractTextPlugin({
            // 提取css，并重命名为带有20为hash值的唯一文件
            filename: '[name].[hash].css',
            allChunks: true
        }),
        // 定义当前node环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 提取模板，并保存入口html
        new HtmlwebpackPlugin({
            filename: '../index_prod.html',
            //模板index.ejs动态设置了静态资源的路径和文件名
            /**
             * ejs是一个js模板库，用来从JSON数据生成html字符串，常用于node.js
             */
            template: './index.ejs',
            inject: false
        }),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
})