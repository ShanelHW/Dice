//================ Task 1 ==============================
// Create a function (rollDice)// Roll Two "dice" one for the player
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)
// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]
let results;
let playerScore = 0;
let computerScore = 0;
let plays = 0;
const winnerDiv = document.querySelector("#winner")
let runningScore = document.querySelector('#running-score')
const rollDice = () => {
  let playerDice = Math.ceil(Math.random() * 6);
  let computerDice = Math.ceil(Math.random() * 6);
  //const winner = playerDice > computerDice ? `PLAYER WINS` : 'COMPUTER WINS'
  const winner =
    playerDice == computerDice
      ? /*If tied*/ `It's a Tie`
      : playerDice > computerDice
      ? /*If player wins*/ "PLAYER wins "
      : /*If computer wins*/ "COMPUTER wins ";
  results = [playerDice, computerDice, winner];
  playerDice > computerDice ? playerScore++ : computerScore++;
  plays++;
  console.log(`number of rounds: ${plays} Computer:${computerDice} Player:${playerDice} Winner: ${winner}`);
  return results;
};
console.log(rollDice());
// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)


const reset = () =>  {
const finalWinner = playerScore == computerScore ? 'GAME IS A TIE!' : (playerScore>computerScore ? `PLAYER WINS` : `COMPUTER WINS`)
window.alert(finalWinner)
console.log("RESET");
computerScore = 0;
playerScore = 0;
plays = 0;
//remove all rounds of game
while(document.querySelector('#winner').firstElementChild){
    document.querySelector('#winner').firstElementChild.remove()}
    //reset score
document.querySelector('#running-score').firstChild.textContent(`Player:      Computer:      Winner:    `)
}
const displayScore = () => {
  
  const div = document.createElement(`div`);
  div.textContent = 
  `Player: ${results[0]} 
  Computer: ${results[1]}
  Winner: ${results[2]} round ${plays}`
  winnerDiv.appendChild(div)
  document.querySelector('#running-score').firstChild.textContent = `Player: ${playerScore} Computer: ${computerScore} `
  console.log(div);
};



const playGame = () => {
    rollDice();
    displayScore();
}

const playBtn = document.querySelector("#play-game");
playBtn.addEventListener("click", playGame);

const resetBtn = document.querySelector(`#reset`);
resetBtn.addEventListener("click", reset);
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.

// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)

// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button

// ===== Now let's host this game in GITHUB PAGES and style it !!!
