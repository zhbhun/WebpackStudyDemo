var a = require("a");
var b = require("b");
function t() {
    require.ensure(["c"], function(require) {
        require("b").xyz();
        var d = require("d");
    });
}
setTimeout(t, 3000);