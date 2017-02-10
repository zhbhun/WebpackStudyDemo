require.ensure(["./module1"], function(require) {
    console.log("aaa");
    require("./module1");
    console.log("bbb");
}, 'common');

require.ensure(["./module2"], function(require) {
    console.log("ccc");
    require("./module2");
    console.log("ddd");
}, 'common');