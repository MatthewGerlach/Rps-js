// Create array to include the options for the game
const options = ["rock", "paper", "scissors"];

// Create variables the player and computer score and the buttons
let playerScore = 1;
let computerScore = 1;
const buttons = document.querySelectorAll(".element-button");

// Add an event listener to each button that calls the playRound function
// with the playerSelection being the value of the button that is clicked
// Create element to display after player or computer reaches five wins
buttons.forEach((button) => {
    button.addEventListener("click", () => {
playRound(button.value);
if (playerScore == 6) {
    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.style.color = "green";
    winner.textContent = "Player won five rounds: Player wins!!!";
    container.appendChild(winner);
} else if (computerScore == 6) {
    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.style.color = "red";
    winner.textContent = "The robot won five rounds: You lost!!!";
    container.appendChild(winner);
} 
});
});

// Create function for the computer "player" that will randomly return one of the three options 
function computerPlay() {
    return options[Math.floor(Math.random(options) * 3)];
} 

// Create function to play one round with the playerSelection parameter
// Make it return a string that declares the winner
// Turn the console.log statements into DOM methods
function playRound(playerSelection) { 
    const computerSelection = computerPlay();
    // Player wins
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        const playerWin = document.createElement('div');
        playerWin.classList.add("playerWin");
        playerWin.textContent = `${playerSelection} vs ${computerSelection} = Player wins: ${playerScore}`;
        container.appendChild(playerWin);
        playerScore++
    // Computer wins
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        const computerWin = document.createElement('div');
        computerWin.classList.add("computerWin");
        computerWin.textContent = `${playerSelection} vs ${computerSelection} = Computer wins: ${computerScore}`;
        container.appendChild(computerWin);
        computerScore++
        // Tie game
    } else {
        const tie = document.createElement('div');
        tie.classList.add("tie");
        tie.textContent = `${playerSelection} vs ${computerSelection} = Tie!`;
        container.appendChild(tie);
    }
} 

 





