window.value2 = '';
var input2Element = document.getElementById('input2');
input2Element.addEventListener('change', function handleChange(e) {
  window.value2 = e.target.value;
});
input2Element.value = window.value2;
input2Element.placeholder = 'input2';
