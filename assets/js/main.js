const mychoice = document.getElementById("mychoice");
const iachoice = document.getElementById("iachoice");
const yourscoreSpan = document.getElementById("yourScore");
const computerscoreSpan = document.getElementById("computerscore");
const result = document.getElementById("result");

let playerscore = 0;
let computerscore = 0;
let round = 0;

let n = parseInt(prompt("Number of games"));

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Tie";
  } else {
    switch (playerChoice) {
      case "scissors":
        result = computerChoice === "paper" ? "Winner" : "Loser";
      case "rock":
        result = computerChoice === "scissors" ? "Winner" : "Loser";
      case "paper":
        result = computerChoice === "rock" ? "Winner" : "Loser";
    }
  }
  switch (result) {
    case "Winner":
      playerscore++;
      computerscore--;

    case "Loser":
      computerscore++;

    case "Tie":
      round++;
  }

  mychoice.textContent = `${playerChoice}`;
  iachoice.textContent = `${computerChoice}`;
  console.log(result);
  alert(result + "!");
  console.log("Round: " + round);
  alert("Me: " + playerscore);
  console.log("Me: " + playerscore);
  alert("Computer: " + computerscore);
  console.log("Computer: " + computerscore);

  if (round === n) {
    alert("Game Over");
    window.location.reload();
  }
}
