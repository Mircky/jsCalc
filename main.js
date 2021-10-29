const num_space = document.querySelector(".num_space");

function clear() {
  const num_space = document.querySelector(".num_space");
  num_space.textContent = "";
}

const buttons = Array.from(document.querySelectorAll('.operator_buttons'))

const clearButton = buttons[0]
console.log(clearButton.textContent)

clearButton.addEventListener('click', clear())