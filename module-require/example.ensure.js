require.ensure(["./module1"], function(require) {
    var module2 = require("./module2");
    console.log(arguments);
// });
}, 'test');