window.addEventListener("hashchange", () => {
  if (location.hash === "#1") {
    console.log(import("./submodule1"));
  } else if (location.hash === "#2") {
    console.log(import("./submodule2"));
  }
});

document.body.innerHTML = `
<h2 class="title">Hello</h2>
<ul>
  <li>
    <a href="#1">1</a>
  </li>
  <li>
    <a href="#2">2</a>
  </li>
</ul>

`
