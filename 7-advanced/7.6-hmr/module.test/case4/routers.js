console.warn('routes module');

const App = require('./App');
const Page1 = require('./Page1');
const Page2 = require('./Page2');

module.exports = function routers() {
  switch (window.location.hash) {
  case '#1':
    App(Page1);
    break;
  case '#2':
    App(Page2);
    break;
  default:
    //
  }
};
