define(
    [
        "./module1",
        "bundle!./module2"
    ], function(module1, module2Callback) {
        console.log(module1);
        console.log(module2Callback);
    }
)