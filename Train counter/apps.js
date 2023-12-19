// document.getElementById("count-el").innerText = 5;
let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
  count += 1;
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function restart() {
  countEl.textContent = 0;
  count = 0;
  // saveEl.textContent =
}

function deduct() {
  countEl.textContent = count - 1;
  count = count - 1;
}

let welcomeEl = document.getElementById("welcome-el");
let username = "reggie";
let greeting = " Welcome back Agent";
welcomeEl.innerText = greeting + " " + username;
welcomeEl.innerText += "👋";
