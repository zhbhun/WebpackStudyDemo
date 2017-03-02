function renderPage1() {
  require(['./page/page1'], function(page1) {
    console.log(page1);
  })
}

function renderPage2() {
  require(['./page/page2'], function(page2) {
    console.log(page2);
  })
}

// ...
