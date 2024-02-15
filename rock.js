// Hämta referenser till knapparna och resultatet
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// Lägg till händelselyssnare för att hantera klick på knapparna
rockButton.addEventListener('click', () => {
  playGame('rock');
});

paperButton.addEventListener('click', () => {
  playGame('paper');
});

scissorsButton.addEventListener('click', () => {
  playGame('scissors');
});

// Funktion för att spela spelet
function playGame(playerChoice) {
  // Generera datorns val (rock, paper eller scissors)
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Avgör vinnaren baserat på spelarens och datorns val
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer wins!';
  }

  // Visa resultatet på sidan
  resultDiv.textContent = result;
}



