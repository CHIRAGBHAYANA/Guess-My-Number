"use strict";
let correctNumber = Math.round(Math.random() * 20);
console.log(correctNumber);
let score = 20;
let highScore = document.querySelector(".highscore").textContent;
console.log(highScore);
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
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  correctNumber = Math.round(Math.random() * 20);
  console.log(correctNumber);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number ").style.width = "15rem";
});
