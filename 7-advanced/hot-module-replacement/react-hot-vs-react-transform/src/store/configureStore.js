if (process.env.NODE_ENV === 'hot') {
  module.exports = require('./configureStore.hot');
} else {
  module.exports = require('./configureStore.dev');
}
