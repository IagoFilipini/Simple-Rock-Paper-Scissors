humanScore = 0;
computerScore = 0;
// console.log(`${humanScore}x${computerScore}`);

function getHumanChoice() {
    return choice = prompt("Type rock, paper or scissors: ");
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return randomChoice = "rock";
    } else if (randomChoice === 1) {
        return randomChoice = "paper";
    } else {
        return randomChoice = "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    console.log(`human: ${human}`);
    console.log(`computer: ${computerChoice}`);

    if (human === "rock" && computerChoice === "paper" || human === "paper" && computerChoice === "scissors" || human === "scissors" && computerChoice === "rock") {
        console.log("computer WIN");
        computerScore++;
        console.log(`human: ${humanScore} x computer: ${computerScore}`);
    } else if (human === "rock" && computerChoice === "rock" || human === "paper" && computerChoice === "paper" || human === "scissors" && computerChoice === "scissors") {
        console.log("TIE");
        console.log(`human: ${humanScore} x computer: ${computerScore}`);
    } else {
        console.log("human WIN");
        humanScore++;
        console.log(`human: ${humanScore} x computer: ${computerScore}`);
    }

}

function playGame() {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// console.log(getHumanChoice());
// getComputerChoice(3);



//  || computerChoice === 1 && human === "scissors" || computerChoice === 2 && human === "rock"