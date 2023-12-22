function IACard() {
    let cardType = ["FIRE", "GRASS", "EAU"];

    let randomIndex = Math.floor(Math.random() * cardType.length);
    let IACard = cardType[randomIndex];
    return IACard;
}
exports.iaCard = IACard;