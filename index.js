
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var dicePlayer1 = "dice" + randomNumber1;
    document.querySelectorAll("img")[0].setAttribute("src", "./img/" + dicePlayer1 + ".png");
         
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var dicePlayer2 = "dice" + randomNumber2;
    document.querySelectorAll("img")[1].setAttribute("src", "./img/" + dicePlayer2 + ".png");

    var winner = document.getElementById("winner");

    if (randomNumber1 > randomNumber2){
        winner.innerHTML =  "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2){
        winner.innerHTML =  "Player 2 wins!";
    } else {
        winner.innerHTML = "Draw!";
    }