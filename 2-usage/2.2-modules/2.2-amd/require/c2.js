console.log('c2.js = ' + module.id);

require('./common');

// AMD module
define(function () {
  return 'c2';
})
