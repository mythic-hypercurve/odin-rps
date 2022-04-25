// Declare global variables
let playerScore = 0;
let computerScore = 0;

// Declare functions for use in round function

function capitalise(value) {
  console.log({ value });
  let first = value.charAt(0);
  let rest = value.slice(1);
  return first.toUpperCase() + rest;
}

function computerPlay() {
  let value;
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    value = 'Rock';
  } else if (number == 1) {
    value = 'Paper';
  } else {
    value = 'Scissors';
  }
  return value;
}
function whoWinsGame(playerScore, computerScore) {
  if (playerScore === 5) {
    document.getElementById('computerChose').textContent = '';
    document.getElementById('playerChose').textContent = '';
    document.getElementById('resultsOutcome').textContent =
      'You Win! You beat the Computer!';
  } else if (computerScore === 5) {
    document.getElementById('computerChose').textContent = '';
    document.getElementById('playerChose').textContent = '';
    document.getElementById('resultsOutcome').textContent =
      'You Lose! The Computer wins!';
  } else;
}

function whoWinsRound(playerChoice, computerChoice) {
  let player = playerChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();
  if (player === computer) {
    document.getElementById(
      'resultsOutcome'
    ).textContent = `A tie! You both chose ${capitalise(player)}!`;
  } else if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    computerScore++;
    console.log({ computerScore });
    // Update computer score.
    document.getElementById('computerScore').textContent = `${computerScore}`;
    document.getElementById(
      'resultsOutcome'
    ).textContent = `You lost the round! ${capitalise(
      computer
    )} beats ${capitalise(player)}!`;
  } else if (
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors') & (computer === 'paper') ||
    (player === 'rock') & (computer === 'scissors')
  ) {
    playerScore++;
    console.log({ playerScore });
    // Update player score display.
    document.getElementById('playerScore').textContent = `${playerScore}`;
    document.getElementById(
      'resultsOutcome'
    ).textContent = `You won the round! ${capitalise(
      player
    )} beats ${capitalise(computer)}`;
  }
}

// Event listener watching buttons for user input
const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', playRound);

const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', playRound);

const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', playRound);

// When click happens...
function playRound(c) {
  // Generate the computer choice.
  computerChoice = computerPlay();
  playerChoice = c.target.attributes.value.nodeValue;
  console.log({ computerChoice });
  console.log({ playerChoice });

  // Display the computer choice in the designated place.
  document.getElementById(
    'computerChose'
  ).textContent = `Computer chose ${computerChoice}!`;

  // Display the player choice in the designated place.

  console.log(`You chose ${playerChoice}!`);
  document.getElementById(
    'playerChose'
  ).textContent = `You chose ${playerChoice}!`;

  // Pass the player and computer choices to function to compare and determine round winner.
  whoWinsRound(playerChoice, computerChoice);
  // Check if anyone won the game yet.
  whoWinsGame(playerScore, computerScore);
}
