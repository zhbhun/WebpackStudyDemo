setTimeout(function() {
    require("bundle!./file.js")(function(fileJsExports) {
        console.log(fileJsExports);
    });
}, 3000);
