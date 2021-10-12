"use strict";
const correctNumber = Math.round(Math.random() * 20);
console.log(correctNumber);
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  }
  if (guess > correctNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🎇You loose the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (correctNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🎇You loose the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (correctNumber === guess) {
    document.querySelector(".message").textContent = "🎉 Correct ans";
    document.querySelector(".number").textContent = correctNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number ").style.width = "30rem";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
});
