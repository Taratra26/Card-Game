function endGame(pseudo, score){
    
    console.log("                                   ...-RESULT-...       ");
    console.log("                              .-----------------------.");
    console.log("                              |                       |");
    console.log(`                                  Winner : ${pseudo}   `);
    console.log(`                                  SCORE  : ${score}    `);
    console.log("                              |      Good Game!       |");
    console.log("                              |                       |");
    console.log("                              '-----------------------'");
}
exports.endGame = endGame;