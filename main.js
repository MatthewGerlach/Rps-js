// Create array to include the options for the game
const options = ["rock", "paper", "scissors"];

// Create variables the player and computer score and the buttons
let playerScore = 1;
let computerScore = 1;
const buttons = document.querySelectorAll(".element-button");
const display = document.querySelector(".display");
const delayedDisplay = document.querySelector(".delayedDisplay");

function removal() {
    display.remove();
    delayedDisplay.style.color = "green";
    delayedDisplay.textContent = "You won five rounds: You win!!! Refresh to play again";
}

function removal2() {
    display.remove();
    delayedDisplay.style.color = "red";
    delayedDisplay.textContent = "The robot won five rounds: You lost!!! Refresh to try again";
}


// Add an event listener to each button that calls the playRound function
// with the playerSelection being the value of the button that is clicked
// Make the display box contain a message after player or computer reaches five wins

buttons.forEach((button) => {
    button.addEventListener("click", () => {
playRound(button.value);
if (playerScore == 6) {
    setInterval(removal, 800);
} else if (computerScore == 6) {
    setInterval(removal2, 800);
} 
});
});

// Create function for the computer "player" that will randomly return one of the three options 
function computerPlay() {
    return options[Math.floor(Math.random(options) * 3)];
} 

// Create function to play one round with the playerSelection parameter
// Make it return a string in the display box that declares the winner
function playRound(playerSelection) { 
    const computerSelection = computerPlay();
    // Player wins
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        display.textContent = `${playerSelection} beats ${computerSelection}! Your score = ${playerScore}`;
        playerScore++
    // Computer wins
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        display.textContent = `${playerSelection} loses to ${computerSelection}! Computer score = ${computerScore}`;
        computerScore++
        // Tie game
    } else {
        display.textContent = `${playerSelection} vs ${computerSelection} = Tie!`;
    }
} 


