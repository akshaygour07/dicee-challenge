document.querySelector(".rollDice").addEventListener("click", function () {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomImage1 = "images/dice" + randomNumber1 + ".png";
  document.getElementById("img1").setAttribute("src", randomImage1);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomImage2 = "images/dice" + randomNumber2 + ".png";
  document.getElementById("img2").setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 won !!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "!! Player 2 won 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }

  document.querySelector(".rollDice").classList.add("pressed");

  setTimeout(function () {
    document.querySelector(".rollDice").classList.remove("pressed");
  }, 50);
});
