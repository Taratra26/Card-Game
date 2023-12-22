

function randomPseudoAsker(){
    let snideWords = ["May you give me your name?",
    "Mind sharing your name?",
    "Hey... What's your name ?",
    "If I could rearrange the alphabet, I'd put U and I together. By the way, what's your name ?",
    "Call me curious, but what's your name?", "Your name must be some secret weapon... care to share it? "];
    let randomIndex = Math.floor(Math.random() * snideWords.length)
    let randomAsking = snideWords[randomIndex];
    return randomAsking;
}

exports.askingName = randomPseudoAsker;
