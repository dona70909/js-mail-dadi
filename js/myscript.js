const arrayEmail = ["ciao@gmail.com", "st546hdg@gmail", "12top@gmail.com"];
const inputUserEmail = document.getElementById("my-email").value;
const outputCheckEmail  = document.getElementById("output-email-check");
const outputRandomOne = document.getElementById("output-one");
const outputRandomTwo = document.getElementById("output-two");
const outWinner = document.getElementById("output-winner");

const arrayDiceOne = [];
const arrayDiceTwo = [];

for(i = 0; i<arrayEmail.length; i++){
    if(arrayEmail[i] == inputUserEmail){
        outputCheckEmail.innerHTML = "yes";
    } else{
        outputCheckEmail.innerHTML = "nope";
    }
}

let countWinOne = 0;
let countWinTwo = 0;

/*  */
for(i=0; i < 6; i++){

    let diceOne = Math.floor((Math.random() * 6) + 1);
    arrayDiceOne.push(diceOne);
    outputRandomOne.innerHTML = (arrayDiceOne);
    let diceTwo = Math.floor((Math.random() * 6) + 1);
    arrayDiceTwo.push(diceTwo);
    outputRandomTwo.innerHTML = (arrayDiceTwo);

    if(diceOne > diceTwo){
        countWinOne = countWinOne + 1;
    } else if (diceOne < diceTwo){
        countWinTwo = countWinTwo + 1;
    } else{
        countWinOne = countWinOne;
        countWinTwo = countWinTwo;
    }
}

if ( countWinOne > countWinTwo){
    outWinner.innerHTML = "ha vinto player 1";
} else if(countWinOne < countWinTwo){
    outWinner.innerHTML = "ha vinto player 1";
} else{
    outWinner.innerHTML = "Pari";
}