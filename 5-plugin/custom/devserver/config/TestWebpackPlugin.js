class TestWebpackPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap("TestWebpackPlugin", () => {
      if (compiler.options.mode === "development") {
        if (!compiler.options.devServer) {
          compiler.options.devServer = {};
        }
        const orginalBefore = compiler.options.devServer.before;
        compiler.options.devServer.before = (app, server, compiler) => {
          app.get("/test", (req, res) => {
            res.json({ code: 0 });
          });
          if (orginalBefore) {
            orginalBefore(app, server, compiler);
          }
        };
      }
    });
  }
}

module.exports = TestWebpackPlugin;
