const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/mera', // Adjust the path as needed
    createProxyMiddleware({
      target: 'http://localhost:8080', // Specify your backend server
      changeOrigin: true,
    })
  );
  app.use(
    '/trening', // Adjust the path as needed
    createProxyMiddleware({
      target: 'http://localhost:8080', // Specify your backend server
      changeOrigin: true,
    })
  );
};