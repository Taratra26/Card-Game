

function randomGoodbye(){
    let snideWords = ["     Goodbye adventurer!",
    "Your hand is played. See you in the next round!",
    "Cardboard farewell! Until the next tactical exchange.",
    "Closing the deck for now. Await the call of the next duel",
    "Exiting game. Keep leveling up in the real world!"];
    let randomIndex = Math.floor(Math.random() * snideWords.length)
    let randomBye = snideWords[randomIndex];
    return randomBye;
}

exports.random = randomGoodbye;
