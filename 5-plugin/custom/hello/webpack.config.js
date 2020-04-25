class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("Hello World Plugin", (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log("Hello World!");
    });
  }
}

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [new HelloWorldPlugin()],
};
