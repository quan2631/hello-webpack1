var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var config = {
    entry: {
        mian: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            // 支持对.vue文件的解析
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'style-loader'
                        })
                    }
                }
            },
            // 支持对ES6的解析
            {
                test: /.\js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // css集中打包处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            // 支持图片字体等文件
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                // 如果小于1kb，不会生成一个文件
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        // 重命名提取后的css文件
        new ExtractTextPlugin("main.css"),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};
module.exports = config;