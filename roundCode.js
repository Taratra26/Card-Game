const prompt = require("prompt-sync")()
const IACard = require("./IACard");
const endGame = require("./endGameInterface");
const cardInterface = require("./cardInterface");
const randomGoodbye = require("./LastWord")
const goRandom = require('./randomGo')

function round(pseudo) {
        let playerScore = 0;
        let iaScore = 0;
     for (let round = 1; round <= 3; round++) {
        if (round == 1){
          console.log(`\n                    ${goRandom.Go ()}\n`)
        }
            cardInterface.showCardsAvailable(round);
        let iaCard = IACard.iaCard();
        let player = playerCard();
          if (victory(player, iaCard) == true && Draw(player, iaCard) != true) {
              playerScore += 1;
          } else if (
            victory(player, iaCard) == false &&  Draw(player, iaCard) != true
          ) {
            iaScore += 1;
          } else if (Draw(player, iaCard) == true) {
            iaScore += 0;
            playerScore += 0;
          }
          console.log(`       -Player Card  : [${player}]`);
          console.log(`       -Ennemy Card  : [${iaCard}]`);
          console.log(`               Player score : ${playerScore}`);
          console.log(`               IA score : ${iaScore}`);
        }
      
        if (playerScore > iaScore) {
          endGame.endGame(pseudo, playerScore);
        } else if (playerScore < iaScore) {
          endGame.endGame("RoBot", iaScore);
        } else if (playerScore == iaScore) {
          endGame.endGame("DRAW!!!", playerScore);
        }
        let replay = prompt("Do you want another session ? [yes / no] : ");
        if (replay === "yes") {
          round();
        } else {
          console.log(`\n           ${randomGoodbye.random()} \n`);
        }
      }
    
    exports.ROUND = round;



    function playerCard() {
        console.log(" [1] FIRE");
        console.log(" [2] GRASS");
        console.log(" [3] WATER");
        let player_Choice = prompt(" Your move, choose your card : ");
        if (player_Choice == 1) {
          return "FIRE";
        }
        if (player_Choice == 2) {
          return "GRASS";
        }
        if (player_Choice == 3) {
          return "WATER";
        }
      }
 
      
      
      function victory(playerCard, iaCard) {
        if (
          (playerCard == "FIRE" && iaCard == "GRASS") ||
          (playerCard == "WATER" && iaCard == "FIRE") ||
          (playerCard === "GRASS" && iaCard === "WATER")
        ) {
          return true;
        } else {
          return false;
        }
      }
      
      function Draw(playerCard, iaCard) {
        if (playerCard == iaCard) {
          return true;
        }
      }


