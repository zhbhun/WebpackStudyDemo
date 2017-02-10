console.warn('App module');

module.exports = function App(page) {
  console.log('app render...');
  const app = document.getElementById('app');
  app.innerHTML = page;
}

