var num1 = Math.floor(Math.random() * 6) + 1;
var dice = "images/dice" + num1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", dice);

var num2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "images/dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", dice2);

if(num1 > num2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if(num1 < num2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}


/*🚩 Play 1 Wins!
  Player 2 Wins! 🚩"
  Draw!
  */
