module.exports = {
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://localhost:8000/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}