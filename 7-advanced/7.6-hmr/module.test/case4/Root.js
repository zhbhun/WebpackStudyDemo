console.warn('Root module');

const routers = require('./routers');

function handleHashChange() {
  routers();
}

module.exports = function Root() {

  window.addEventListener("hashchange", handleHashChange, false);

  window.location.hash = window.location.hash || '1';

  handleHashChange();

}

require('./routers');
if (module.hot) {
  module.hot.accept('./routers', function handler() {
    const newRouters =  require('./routers');
    newRouters();
  });
}
