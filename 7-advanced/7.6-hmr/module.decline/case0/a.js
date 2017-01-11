require('./b');

window.a = '';

var container = document.getElementById('a');
var label = container.getElementsByTagName('label')[0];
label.innerHTML = 'a: ';
var input = container.getElementsByTagName('input')[0];
input.value = window.a;
input.addEventListener('change', function handleChange(e) {
  window.a = e.target.value;
});

console.log('>>> a.js');
module.exports = 'a';
