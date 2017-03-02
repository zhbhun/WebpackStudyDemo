require.ensure(["./module1"], function(require) {
    console.log("aaa");
    var module2 = require("./module2");
    console.log("bbb");
    require("./module1");
}, 'test');