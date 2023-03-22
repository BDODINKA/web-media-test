const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    createProxyMiddleware('price', {
      target: 'https://min-api.cryptocompare.com/data/',
      changeOrigin: true,
    })
  )
}
