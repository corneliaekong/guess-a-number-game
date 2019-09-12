// generating a random number
let number;
let userGuessLog = [];
let attempts = 0;
const maxAttempts = 5;
let computerGuess = [];
document.querySelector('.panel-start').style.display = 'none';
document.querySelector('.panel3').style.display = 'none';
document.querySelector('.help').style.display = "none";






function newGame() {
  //window.location.reload();
  document.querySelector('.panel-start').style.display = 'block';
  document.querySelector('.panel3').style.display = 'block';
}

function settings() {
  document.querySelector('.settings').style.display = "block";
}
function help(){
  document.querySelector('.help').style.display = "block";
}
function closeAll() {
  document.querySelector('.settings').style.display = 'none';
  document.querySelector('.help').style.display = "none";

}


// take user inputs
function validateInput() {
  let userInput = document.getElementById('guessNumber').value;
  console.log(typeof (userInput));
  if (isNaN(userInput)) {
    alert('only numbers are accepted');
    document.getElementById('guessNumber').value = "";

  }
  else {
    check();

  }


}

function check() {
  //e.preventDefault();
  //window.location.reload();
  number = Math.floor(Math.random() * 50 + 1);

  let userInput = document.getElementById('guessNumber').value;

  if (userInput === number) {
    document.querySelector('#guess').innerHTML = " Bravo! You guessed it right " + number;
    document.getElementById('guessNumber').value = "";
  }

  else {
    document.querySelector('#guess').innerHTML = "Aw! You missed it try again " + number;
    document.getElementById('guessNumber').value = "";
  }

  // checking number of attempts and previous guesses
  userGuessLog.push(userInput);
  computerGuess.push(number);
  attempts++;
  document.querySelector('#previousGuess').innerHTML = "" + userGuessLog + "";
  document.querySelector('#attemptNumber').innerHTML = attempts;
  document.querySelector('#computerGuess').textContent = computerGuess;

  if (userGuessLog.length === maxAttempts) {

    document.getElementById('guess').innerHTML = "You Lose"
    document.getElementById('guessNumber').disabled = true;
    document.getElementById('submitBtn').disabled = true;
    document.querySelector('.finish').style.display = 'block';
    document.querySelector('.main-content').style.display = 'none';

  }

}
function startNew() {
  window.location.reload();

  /*document.querySelector('.main-content').style.display = 'block';
  document.querySelector('.finish').style.display = 'none';
  document.getElementById('guess').innerHTML = ""
  document.getElementById('guessNumber').disabled = false;
  document.getElementById('submitBtn').disabled = false;
  document.querySelector('#attemptNumber').innerHTML = 0;
  document.querySelector('#previousGuess').innerHTML = 0;*/

  check();

}







