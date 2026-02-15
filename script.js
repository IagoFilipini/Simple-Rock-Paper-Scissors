function getHumanChoice() {
    return choice = prompt("Type rock, paper or scissors: ");
}

function getComputerChoice(max) {
    let randomChoice = Math.floor(Math.random() * max);
    if (randomChoice === 0) {
        return console.log("ROCK");
    } else if (randomChoice === 1) {
        return console.log("PAPER");
    } else {
        return console.log("SCISSORS");
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice(3));