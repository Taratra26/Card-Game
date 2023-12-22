

function randomGo(){
    let snideWords = [
    "Now it's time to fight. Let's GO!!!",
    "Time to begin the showdown",
    "Time to kick some a** . (I can't really say the A word because it's a family game.",
    "Let the battle commence"];             
    let randomIndex = Math.floor(Math.random() * snideWords.length)
    let randomBye = snideWords[randomIndex];
    return randomBye;
}

exports.Go = randomGo;
