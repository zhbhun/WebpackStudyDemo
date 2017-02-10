window.value1 = '';
var input1Element = document.getElementById('input1');
input1Element.addEventListener('change', function handleChange(e) {
  window.value1 = e.target.value;
});
input1Element.value = window.value1;
input1Element.placeholder = 'input1';
