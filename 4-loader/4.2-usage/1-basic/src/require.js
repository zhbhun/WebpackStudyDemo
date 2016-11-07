// const data = require('json-loader!./data.json');
const data = require('json!./data.json');
console.log(typeof data, data);

module.exports = data;

