window.b = '';

var container = document.getElementById('b');
var label = container.getElementsByTagName('label')[0];
label.innerHTML = 'b: ';
var input = container.getElementsByTagName('input')[0];
input.value = window.b;
input.addEventListener('change', function handleChange(e) {
  window.b = e.target.value;
});

console.log('>>> b.js');
module.exports = 'b';
