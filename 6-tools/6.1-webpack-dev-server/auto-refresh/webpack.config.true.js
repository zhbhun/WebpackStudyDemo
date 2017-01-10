module.exports = {
  entry: "./src/entry.js",
  output: {
    path: './dist',
    filename: "bundle.js"
  },
  devServer: {
    inline: true
  }
};
