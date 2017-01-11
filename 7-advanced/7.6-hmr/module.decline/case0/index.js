require('./a');

console.log('>>> index.js');
module.exports = 'Hello World';

if (module.hot) {
  module.hot.decline('./a.js');
  module.hot.accept();
}
