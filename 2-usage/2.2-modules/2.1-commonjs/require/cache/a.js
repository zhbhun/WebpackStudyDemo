console.log(require.cache); // index + a
const b = require('./b');
b.value = '2';
console.log(b); // value = 2
console.log(require.cache); // index + a + b

delete require.cache[require.resolve('./b')];
console.log(require.cache); // index + a
console.log(require('./b')); // value = 1
