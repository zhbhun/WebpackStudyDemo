exports.name = 'a';
console.log('a: cache before require b', JSON.stringify(require.cache)); // index + a
const b = require('./b');
b.value = '2';
console.log('a: module b\' export', b); // value = 2
console.log('a: cache after require b', JSON.stringify(require.cache)); // index + a + b

delete require.cache[require.resolve('./b')];
console.log('a: cache after delete b', JSON.stringify(require.cache)); // index + a
console.log('a: module b\' export', require('./b')); // value = 1
