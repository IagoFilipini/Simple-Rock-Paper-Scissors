//initiate both scores
humanScore = 0;
computerScore = 0;

function getHumanChoice() { //shows a prompt screen for user answer
    return choice = prompt("Type rock, paper or scissors: ");
}

function getComputerChoice() { //generate a random number between 0 to 2 and determine their element name by its number
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
const human = humanChoice.toLowerCase(); //makes humanChoice value case-insensitive

    //shows both player and computer choices
    console.log(`human: ${human}`);
    console.log(`computer: ${computerChoice}`);

    //generate the win/lose conditions by comparing its value
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

//gets both getHumanChoice and getComputerChoice functions results and put them in their new variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); //transfer the results (from variables above) to the arguments at playRound function
