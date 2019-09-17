const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main', //main.js中的.js可以省略，前面的./不能省
  output: {
    filename: './dist/[hash]app.js', // dist文件夹不存在时，会自动创建
    hashDigestLength: 8 // 默认长度是20
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  })], //第三步，实例化后放在plugins这个数组中就行
  devServer: {
    contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录dist，如果配置不对，会报Cannot GET /错误
    port: 9009, //端口改为9000
    open: true // 自动打开浏览器，适合懒人
  }
}