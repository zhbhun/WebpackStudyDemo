console.log('c.js = ' + module.id);

// AMD module
define(function () {
  // AMD require
  require(['./c1'], function (c1) {
    console.log(module.id, c1);

    const c2 = require('./c2');
    console.log(module.id, c2);
  })

  require('./common');

  return 'c';
})

