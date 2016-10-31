console.log('index.js = ' + module.id);

// one module
require(['./a'], function (a) {
  console.log(module.id, a);
})

// two module
require(['./b', './c'], function (b, c) {
  console.log(module.id, b);
  console.log(module.id, c);
})

// mix module
require(['./d'], function (d) {
  console.log(module.id, d);
})
