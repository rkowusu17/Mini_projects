let cards = [];
let sum = 0;
let BlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let CardsEl = document.getElementById("cards-el");
let player = {
  name: "Reggie",
  chips: 145,
};
let PlayerEl = document.getElementById("player-el");
PlayerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function renderGame() {
  CardsEl.textContent = "Cards:  ";
  sumEl.textContent = "Sum: " + sum;
  for (let i = 0; i < cards.length; i++) {
    CardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    BlackJack = true;
    isAlive = false;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  isAlive = true;
  renderGame();
}

function restart() {
  if (BlackJack === true) {
    CardsEl.textContent = "Cards: ";
    sum = 0;
    sumEl.textContent = "Sum: ";
    messageEl.textContent = "Loading new game...";
  } else if (isAlive === false && sum > 21) {
    CardsEl.textContent = "Cards: ";
    sum = 0;
    sumEl.textContent = "Sum: ";
    messageEl.textContent = "Loading new game...";
  }
}
function newCard() {
  if (isAlive === true && BlackJack === false) {
    // messageEl.textContent = "Drawing a new card from the deck ....";
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
  //else {
  //   alert("You're out of the game");
  // }
}
