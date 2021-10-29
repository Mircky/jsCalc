const num_space = document.querySelector(".num_space");

function clear() {
  const num_space = document.querySelector(".num_space");
  num_space.textContent = "";
}

const buttons = Array.from(document.querySelectorAll(".operator_buttons"));

const clearButton = buttons[0];
const sumButton = buttons[1];
const minusButton = buttons[2];
const multyButton = buttons[3];
const devideButton = buttons[4];
const evenButton = buttons[5];

clearButton.addEventListener('click', clear);