let playerScore = 0;
let computerScore = 0;

// Declaring function for future use
function capitalise(value) {
  console.log({ value });
  let first = value.charAt(0);
  let rest = value.slice(1);
  return first.toUpperCase() + rest;
}

//Computer Generates a choice from Rock Paper Scissors

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
  console.log(`Computer Chooses ${value}`);
  return value;
}
//User is asked for an input

//Listen for click event on RPS buttons
const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', playerPlay);

const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', playerPlay);

const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', playerPlay);

function playerPlay(e) {
  console.log(e.target.attributes.value.nodeValue);
  // let playerSelection = ;
  // console.log(`Player Chooses ${playerSelection}`);
  // return playerSelection;
}

//Is the input valid?

// function inputValidation(value) {
//   let playerLowercase = value.toLowerCase();
//   console.log(playerLowercase);
//   if (!['rock', 'paper', 'scissors'].includes(playerLowercase)) {
//     value = 'Invalid Selection';
//     console.log(value);
//   }
//   //If not display error and ask again
//   if (value === 'Invalid Selection') {
//     alert(
//       "You didn't write Rock, Paper, or Scissors. Check your typing and try again!"
//     );
//     return false;
//   }
//   return true;
// }

//Compare computer and user inputs
// function playRound(playerSelection, computerSelection) {
//   let player = playerSelection.toLowerCase();
//   let computer = computerSelection.toLowerCase();
//   if (player === computer) {
//     return `A tie! You both chose ${capitalise(player)}!`;
//   } else if (
//     (player === 'rock' && computer === 'paper') ||
//     (player === 'paper' && computer === 'scissors') ||
//     (player === 'scissors' && computer === 'rock')
//   ) {
//     computerScore++;
//     return `You Lose! ${capitalise(computer)} beats ${capitalise(player)}!`;
//   } else if (
//     (player === 'paper' && computer === 'rock') ||
//     (player === 'scissors') & (computer === 'paper') ||
//     (player === 'rock') & (computer === 'scissors')
//   ) {
//     playerScore++;
//     return `You Win! ${capitalise(player)} beats ${capitalise(computer)}`;
//   }
// }

// //Inform user of outcome
// function game() {
//   // while (playerScore < 5 && computerScore < 5) {
//   let a = playerPlay();
//   let b = computerPlay();

//   console.log(playRound(a, b));
//   console.log({ playerScore, computerScore });
// }
// if (playerScore > computerScore) {
//   console.log('Congratulations. You Win!');
// } else {
//   console.log('The Computer Wins! You Lose!');
// }
// // }

// game();
