module.exports = {
    entry: './src/scripts/index.js',    // 需要被打包的js文件路径及文件名
    output: {
        path: __dirname + '/dist',    // 打包输出的目标文件的绝对路径（其中__dirname为当前目录的绝对路径）
        filename: 'scripts/index.js'   // 打包输出的js文件名及相对于dist目录所在路径
    }
};