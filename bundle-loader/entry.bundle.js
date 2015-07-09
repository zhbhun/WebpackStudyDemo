var module1Callback = require('bundle!./module1');
console.log("aaa");
module1Callback(function(module1) {
    console.log(module1);
});