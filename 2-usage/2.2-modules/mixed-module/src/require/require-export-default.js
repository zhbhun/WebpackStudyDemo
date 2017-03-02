var { a, b } = require('../define/export-default');
console.log(a, b);

var { a, b } = require('../define/export-default').default;
console.log(a, b);
