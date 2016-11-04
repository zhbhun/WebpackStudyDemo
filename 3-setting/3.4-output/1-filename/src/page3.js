require(['./page3-1'], function (page31) {
  console.log(page31);
});

require.ensure(['./page3-2'], function () {
  const page32 = require('./page3-2');
  console.log(page32);
}, 'a');

require.ensure(['./page3-3'], function () {
  const page33 = require('./page3-3');
  console.log(page33);
}, 'a');

require.ensure(['./page3-4.js', './page3-5.js'], function () {
  const page34 = require('./page3-4');
  const page35 = require('./page3-5');
  console.log(page34, page35);
}, 'b');
