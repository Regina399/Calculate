var field = document.querySelector('input');
document.querySelectorAll('button').forEach(function(button) {
  if (!button.onclick) button.onclick = function(button) { field.value += this.innerText; }
});
