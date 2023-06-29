const moves = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function startGame() {
  document.getElementById("Head").textContent = "Rock Paper Scissors";
  document.getElementById("result").textContent = "";
  playerScore = 0;
  computerScore = 0;
}

function endGame() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function calcResult(move1, move2) {
  if (move1 === move2) {
    return "Tie 📍";
  } else if (
    (move1 === "Rock" && move2 === "Scissors") ||
    (move1 === "Paper" && move2 === "Rock") ||
    (move1 === "Scissors" && move2 === "Paper")
  ) {
    playerScore++;
    return "Victory 🏆";
  } else {
    computerScore++;
    return "Crushing Defeat 😓";
  }
}

function randomMove() {
  return moves[Math.floor(Math.random() * moves.length)];
}

function play(event) {
  const playerMove = event.target.textContent;
  const computerMove = randomMove();
  const result = calcResult(playerMove, computerMove);

  document.getElementById("do").textContent = result;
  document.getElementById("result").textContent = `You played ${playerMove} - Computer played ${computerMove}`;
  document.getElementById("player-score").textContent = `Player Score: ${playerScore}`;
  document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 3 || computerScore === 3) {
    endGame();
    document.getElementById("Head").textContent = playerScore === 3 ? "Victory" : "Crushing Defeat";
    document.getElementById("play_again").style.display = "block";
  }
}

function playAgain() {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("play_again").style.display = "none";
  startGame();
}

document.getElementById("rock").addEventListener("click", play);
document.getElementById("paper").addEventListener("click", play);
document.getElementById("scissors").addEventListener("click", play);
document.getElementById("play_again").addEventListener("click", playAgain);

startGame();
