var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var proxy = require('express-http-proxy')

var app = new (require('express'))()
var port = (process.env.PORT || 4000)
var API_URL = 'http://localhost:' + (process.env.API_PORT || 3000)

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use('/api', proxy(API_URL, {
  forwardPath: function(req, res) {
    return '/api' + require('url').parse(req.url).path;
  }
}));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
