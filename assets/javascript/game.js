//variables for player wins, player losses, player score counter, current goal score, array of values of crystals
var wins = 0;
var losses = 0;
var playerScore = 0;
var goalScore;
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;




//create function that randomly generates a goal score between 21 and 85, and display to page
function newGame(){
  playerScore = 0;
  goalScore = Math.floor(Math.random() * 100);
  crystalOne = Math.floor(Math.random() * crystalValues.length + 1);
  crystalTwo = Math.floor(Math.random() * crystalValues.length + 1);
  crystalThree = Math.floor(Math.random() * crystalValues.length + 1);
  crystalFour = Math.floor(Math.random() * crystalValues.length + 1);
  console.log(goalScore);
  console.log(crystalOne);
  console.log(crystalTwo);
  console.log(crystalThree);
  console.log(crystalFour);
  $($goalScore).text(goalScore);
  $($playerScore).text(playerScore);
}

//create function that randomly assigns number from value array to crystals(setAttr)

//add .on("click") to images, increase player score by that value
$("# $crystalOne").on("click", function() {
  playerScore += crystalOne;
  console.log(playerScore);
});
//if player score === goal score, add to wins value, begin new game

//if player score exceeds goal score, add to losses value, begin new game

//new game function

newGame();
