//dice 1 random

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let image1 = document.querySelector(".img1");

if (randomNumber1 === 1) {
  image1.setAttribute("src", "images/dice1.png");
}
if (randomNumber1 === 2) {
  image1.setAttribute("src", "images/dice2.png");
}
if (randomNumber1 === 3) {
image1.setAttribute("src", "images/dice3.png");
}
if (randomNumber1 === 4) {
image1.setAttribute("src", "images/dice4.png");
}
if (randomNumber1 === 5) {
image1.setAttribute("src", "images/dice5.png");
}
if (randomNumber1 === 6) {
  image1.setAttribute("src", "images/dice6.png");
}
//dice 2 random
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let image2 = document.querySelector(".img2");

if (randomNumber2 === 1) {
  image2.setAttribute("src", "images/dice1.png");
}
if (randomNumber2 === 2) {
  image2.setAttribute("src", "images/dice2.png");
}
if (randomNumber2 === 3) {
image2.setAttribute("src", "images/dice3.png");
}
if (randomNumber2 === 4) {
image2.setAttribute("src", "images/dice4.png");
}
if (randomNumber2 === 5) {
image2.setAttribute("src", "images/dice5.png");
}
if (randomNumber2 === 6) {
  image2.setAttribute("src", "images/dice6.png");
}
