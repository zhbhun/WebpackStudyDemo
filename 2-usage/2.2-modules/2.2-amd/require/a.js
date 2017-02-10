console.log('a.js = ' + module.id);

// CommonJS require
const a1 = require('./a1');
console.log(module.id, a1);

require('./common');

module.exports = 'a';
