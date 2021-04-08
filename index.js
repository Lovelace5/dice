//dice 1 random

let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

let randomImageSource1 = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//dice 2 random

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//change the value of h1 to display the winner

let winnerStatus = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  winnerStatus.innerHTML = "It's a draw. Try again!";
}
else if (randomNumber1 > randomNumber2) {
  winnerStatus.innerHTML = "🚩 Player 1 wins!";
}
else {
  winnerStatus.innerHTML = "Player 2 wins! 🚩";
}
