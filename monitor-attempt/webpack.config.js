module.exports = {
  entry: './main.js', // 入口文件路径
  output: {
    path: '/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 7888
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
}