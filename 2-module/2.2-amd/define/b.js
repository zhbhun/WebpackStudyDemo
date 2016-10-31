// require('b1NamedModule'); // Module not found: Error: Cannot resolve module 'b1NamedModule' in ...

define(['./b1'], function (b1) {
  console.log(b1);
  return 'b';
});
