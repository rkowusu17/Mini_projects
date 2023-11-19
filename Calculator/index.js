let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("total-el");
function add() {
  let result = num1 + num2;
  sum.textContent = " Total: " + result;
}
function subtract() {
  let result = num1 - num2;
  sum.textContent = " Total: " + result;
}
function divide() {
  let result = num1 / num2;
  sum.textContent = " Total: " + result;
}

function multiply() {
  let result = num1 * num2;
  sum.textContent = "Total: " + result;
}
