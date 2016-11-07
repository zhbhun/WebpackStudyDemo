if (process.env.NODE_ENV === 'hot') {
  module.exports = require('./Root.hot');
} else {
  module.exports = require('./Root.dev');
}
