// Create variables for player and computer score
let playerScore = 0;
let computerScore = 0;

// Create array to include the options for the game
const options = ["rock", "paper", "scissors"];

// Create function for the computer "player" that will randomly return one of the three options 
function computerPlay() {
return options[Math.floor(Math.random(options) * 3)];
} 

// Create function for the playerChoice to contain an input box where the player can enter one of 
// the options and have that option returned unless the input is not one of the options
function playerChoice() { 
    let input = prompt("Type rock, paper, or scissors");
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        return playerChoice();
    } else {
        return input;
    }
} 

// Create function to play one round with the playerSelection and computerSelection parameters
// Make it return a string that declares the winner
function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    // Player wins
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`${playerSelection} vs ${computerSelection} = Player wins!`);
        playerScore++
    // Computer wins
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`${playerSelection} vs ${computerSelection} = Computer wins!`);
        computerScore++
        // Tie game
    } else {
        console.log(`${playerSelection} vs ${computerSelection} = Tie!`);
    }
}  

// Create function to play 5 rounds and report the final result at the end
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        }
        finalResult(); 
    } console.log(game());

// Create function to display the result of the 5 rounds
    function finalResult() {
        if (playerScore > computerScore) {
            console.log("Player won this round!");
        } else if (playerScore < computerScore) {
            console.log("Computer won this round!");
        } else {
            console.log("This round was a tie!");
        }
    }
