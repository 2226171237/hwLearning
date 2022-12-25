const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api1", {  // 遇见/api1前缀的请求就会触发改代理
            target: "http://localhost:10086", // 请求转发给谁
            changeOrigin: true,  // 控制服务器收到的请求头中Host字段的值 true: localhost:10086  false: loclahost:3000
            pathRewrite: { '^/api1': '' } // 重写请求路径
        })
    ),
    app.use(
        createProxyMiddleware("/api2", {
            target: "http://localhost:10087",
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}