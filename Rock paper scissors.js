//A rock paper scissors game made in js, not made by ai, but myself. As that would defeat the propose of this project, which is to learn js.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}); 
let points = 0; const posi = ["r", "s", "p"]; const dosi = ["s", "p", "r"];

//Add to score if x is true, and prints win/loos.
function win(x) {
  if (x === undefined) { console.log("Tie") }
  else { x === true ? console.log("Win") : console.log("Loose"); };
  x ? points++ : null;
  console.log(points);
}

function playRound() {
  //Get user input
  readline.question('Type R/P/S or any key to exit: ', choice => {
    let userInput = choice.toLowerCase();
    if (!posi.includes(userInput)) {
      process.exit(0); 
    }
    //cpu chice of play
    let cpuInput = Math.floor(Math.random() * 3);
    userInput = posi.indexOf(userInput);
    //Win check
    if (userInput === cpuInput) {
      win(undefined);
      playRound();
    }
    else if (posi[userInput] === dosi[cpuInput]) {
      win(true);
      playRound();
    } else{
      win(false); 
      playRound();
    }
  });
} playRound();
