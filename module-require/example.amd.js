require(["./module1"], function(module1) {
    console.log("aaa");
    var module2 = require("./module2");
    console.log("bbb");
});