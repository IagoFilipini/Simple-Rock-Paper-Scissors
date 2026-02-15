humanScore = 0;
computerScore = 0;
// console.log(`${humanScore}x${computerScore}`);

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

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toUpperCase();

    console.log(human);
    console.log(`Computer WIN`);
    computerScore++;
    console.log(`SCORE= HUMAN: ${humanScore} x COMPUTER: ${computerScore}`);

}

function playGame() {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);

// console.log(getHumanChoice());
// getComputerChoice(3);