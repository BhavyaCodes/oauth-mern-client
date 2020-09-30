const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "https://oauth-mern-api.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
