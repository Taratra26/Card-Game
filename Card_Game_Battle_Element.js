const prompt = require("prompt-sync")();
const Guide = require("./tutorial");
const Menu = require("./MenuInterface");
const round = require('./roundCode')
const Name = require('./randomAskingName')
//THIS IS THE GAME
function CardGame() {
  Menu.Menu();
  let pseudo = prompt(`${Name.askingName()} : `);
  console.log(
    `                         \n                        Welcome to the realm of Card Game Battle Element ${pseudo}. `
  );
  console.log(`                         `);
  for (let i = 1; i > 0; i++) {
    let seeTutorial = prompt("          Do you know how to play CARD GAME Element battle ? [yes / no] : ");
    if (seeTutorial == "no") {
      Guide.Tutorial();
      break;
    } else if (seeTutorial == "yes") {
      console.log("");
      console.log(
        "                        So you are a fan of my work huh. That's great ! "
      );
      console.log("");

      break;
    } else {
      console.log("                      yes or no? ");
    }
  }
  for (let i = 1; i > 0; i++) {
          let play = prompt("Shall we begin [yes or no ] : ");
    if (play == "yes" || play == "y" || play == "YES" || play == "Y") {
      round.ROUND(pseudo);
      break;
    } else if (play == "no" || play == "n" || play == "NO" || play == "N") {
      console.log("                                  ");
      console.log("                                 SHAME ON YOU!!!!!!! ");
      console.log("                                 ");
      break;
    }else{
        console.log("Do you want to play, yes or no?")
    }
  }
}
CardGame();








