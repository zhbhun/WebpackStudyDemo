console.log(require('./normal'));
console.log(require('./multi-define'));
try {
  console.log(require('NamedModule'));
} catch (error) {
  console.log(error);
}
console.log(require('./named-define'));
