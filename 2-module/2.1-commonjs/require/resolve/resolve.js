const id = require.resolve("./resolve");
console.log(typeof id);
console.log(id);
console.log(module.id === id);
