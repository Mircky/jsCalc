const num_space = document.querySelector(".num_space");

function clear() {
  const num_space = document.querySelector(".num_space");
  num_space.textContent ="";
}

const buttons = Array.from(document.querySelectorAll(".operator_buttons"));
const clearButton = buttons[0];
clearButton.addEventListener('click', clear);

function input(i) {
  if (num_space.textContent === '0')
  {
    num_space.textContent = ''
    num_space.textContent = num_space.textContent+i;
  }
  else {
    num_space.textContent = num_space.textContent+i;
  }
  // num_space.textContent = num_space.textContent+i;
}

function result() {
  num_space.textContent = eval(num_space.textContent)
}