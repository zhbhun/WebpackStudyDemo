var { a, b } = require('../define/export-default-and-object');
console.log(a, b);

var { a, b } = require('../define/export-default-and-object').default;
console.log(a, b);
