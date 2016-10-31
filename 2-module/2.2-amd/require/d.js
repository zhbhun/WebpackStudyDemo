console.log('d.js = ' + module.id);

const d1 = require('./d1');
console.log(module.id, d1);

define(['./d2'], function (d2) {
  console.log(module.id, d2);

  const d3 = require('./d3');
  console.log(module.id, d3);

  require(['./d4'], function (d4) {
    console.log(module.id, d4);

    const d5 = require('./d5');
    console.log(module.id, d5);
  })

  return 'd';
});


require(['./d6'], function (d6) {
  console.log(module.id, d6);
})
