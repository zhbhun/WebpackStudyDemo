console.log('b.js = ' + module.id);

// AMD module
define(function (require) {
  // CommonJS require
  const b1 = require('./b1');
  console.log(module.id, b1);

  require('./common');

  return 'b';
})

