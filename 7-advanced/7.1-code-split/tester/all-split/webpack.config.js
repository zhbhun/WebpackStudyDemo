const path = require("path");
const rimraf = require("rimraf");

const outputPath = path.resolve(__dirname, "./dist");

rimraf(outputPath, () => null);

class MyExampleWebpackPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.initialize.tap("MyExampleWebpackPlugin", () => {
      console.log(compiler.options.optimization.splitChunks);
    });
  }
}

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    chunkFilename: "[name].chunk.js",
    filename: "[name].js",
    path: outputPath,
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        allVendors: {
          name: `all-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: 0,
          chunks: "all",
        },
      },
    },
  },
  plugins: [new MyExampleWebpackPlugin()],
};
