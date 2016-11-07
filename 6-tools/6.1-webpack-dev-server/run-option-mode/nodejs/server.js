var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack(require('./webpack.config.js'));

var server = new WebpackDevServer(compiler, {
    contentBase: "build",
});
server.listen(8080, "localhost", function() {});