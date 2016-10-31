console.log('c1.js = ' + module.id);

require('./common');

// AMD module
define(function () {
  return 'c1';
})
