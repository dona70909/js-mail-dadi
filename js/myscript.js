const arrayEmail = ["ciao@gmail.com", "st546hdg@gmail", "12top@gmail.com"];

const outputCheckEmail  = document.getElementById("output-email-check");
const outputRandomOne = document.getElementById("output-one");
const outputRandomTwo = document.getElementById("output-two");
const outWinner = document.getElementById("output-winner");
const gameStart = document.getElementById("my-game");
const diceStart = document.getElementById("my-container-winner");

let diceOne = Math.floor((Math.random() * 6) + 1);
let diceTwo = Math.floor((Math.random() * 6) + 1);



const enterEmail = document.getElementById("my-submit-input");
enterEmail.addEventListener("click", function(){

    const inputUserEmail = document.getElementById("my-email").value.toLowerCase().trim();
    
    for(let i = 0; i<arrayEmail.length; i++){
        if(arrayEmail[i] == inputUserEmail){
            
            outputCheckEmail.innerHTML = "Access granted!";
            gameStart.classList.remove("d-none"); 
            diceStart.classList.remove("d-none"); 
            
            /* btn red */
            const btnOne = document.getElementById("my-dice-btn-one");
            btnOne.addEventListener("click", function(){
                outputRandomOne.innerHTML = (diceOne);
            });
            
            /* btn blue */
            const btnTwo = document.getElementById("my-dice-btn-two");
            btnTwo.addEventListener("click", function(){
                outputRandomTwo.innerHTML = (diceTwo);
            });
            
            
            /* grey score button */
            const scoreBtn = document.getElementById("my-score");
            scoreBtn.addEventListener("click", function(){
                
                if(diceOne > diceTwo){
                    outWinner.innerHTML = "ha vinto player 1";
                } else if (diceOne < diceTwo){
                    outWinner.innerHTML = "ha vinto player 2";
                } else{
                    outWinner.innerHTML = "Pari";
                }
                
            });

            /* new game utilizzo le stess funzionalità */
            const btnNewGame = document.getElementById("my-new-game");
            btnNewGame.addEventListener("click",function(){
                
                outputRandomOne.innerHTML = ("roll");
                outputRandomTwo.innerHTML = ("roll");

                let diceOne = Math.floor((Math.random() * 6) + 1);
                let diceTwo = Math.floor((Math.random() * 6) + 1); 
                outWinner.innerHTML = "Inizia nuova partita";
                
                /* btn red */
                const btnOne = document.getElementById("my-dice-btn-one");
                btnOne.addEventListener("click", function(){
                    outputRandomOne.innerHTML = (diceOne);
                });
                
                /* btn blue */
                const btnTwo = document.getElementById("my-dice-btn-two");
                btnTwo.addEventListener("click", function(){
                    outputRandomTwo.innerHTML = (diceTwo);
                });
                
                /* grey score button */
                const scoreBtn = document.getElementById("my-score");
                scoreBtn.addEventListener("click", function(){
                    
                    if(diceOne > diceTwo){
                        outWinner.innerHTML = "ha vinto player 1";
                    } else if (diceTwo > diceOne){
                        outWinner.innerHTML = "ha vinto player 2";
                    } else{
                        outWinner.innerHTML = "Pari";
                    }
                    
                });
            });

            
        } else {
            
            outputCheckEmail.innerHTML = "Hai dimenticato l'email?";
        }
    }
    
    
    
    
});