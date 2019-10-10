const path = require('path');
// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[ // 添加plugins节点配置插件
            new htmlWebpackPlugin({
                template:path.resolve(__dirname, 'src/index.html'),//模板路径
                filename:'index.html'//自动生成的HTML文件的名称
            })
        ],
  module: { // 用来配置第三方loader模块的
    rules: [ // 文件的匹配规则
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  }
};