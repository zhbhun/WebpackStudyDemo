var module1Callback = require('bundle?lazy!./module1');
console.log("aaa");
module1Callback(function(module1) {
    console.log(module1);
});