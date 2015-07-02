require(["./module1"], function(module1) {
    var module2 = require("./module2");
    console.log(arguments);
});