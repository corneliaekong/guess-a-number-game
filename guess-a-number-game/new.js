// generating a random number
var computerGuess;
var userGuessLog =[];
var attempts = 0;
var maxAttempts = 10;
var computerGuessLog = [];


document.querySelector('.panel-start').style.display = 'none';
document.querySelector('.panel3').style.display = 'none';



//function init
function newGame(){
  document.querySelector('.panel-start').style.display = 'block';
  document.querySelector('.panel3').style.display = 'block';
}


// function to compare the guess
function compareGuess(){
  computerGuess = Math.floor(Math.random()*50 + 1);
  var userGuess = document.getElementById('guessNumber').value;

  if(computerGuess > userGuess){
  document.querySelector('#guess').innerHTML = "Your guess is too low, the computer guessed " + computerGuess;
  document.querySelector('#guessNumber').value = "";
  }

  else if(computerGuess < userGuess){
  document.querySelector('#guess').innerHTML = "Your guess is too high, the computer guessed " + computerGuess;
  document.querySelector('#guessNumber').value ="";
  }
  else if(document.getElementById('guessNumber').value = ""){
  document.querySelector('#guess').innerHTML = "You must select a number";

  }
  else{
  document.querySelector('#guess').innerHTML = "Your guessed it right" + computerGuess;
  document.querySelector('#guessNumber').value = "";
  }

  // checking user attempts
  computerGuessLog.push(computerGuess)
  userGuessLog.push(userGuess);
  attempts ++;

  document.querySelector('#previousGuess').innerHTML ="" + userGuessLog + "";
  document.querySelector('#attemptNumber').innerHTML = attempts;
  document.querySelector('#computerGuess').innerHTML = computerGuessLog;

  // checking number of attempts
  if(userGuessLog === maxAttempts){
    document.getElementById('guess').innerHTML = "You Lose"
    document.getElementById('guessNumber').disabled = true;
    document.querySelector('.close').style.display = "block";
  }



}



// take user inputs


/* checking number of attempts and previous guesses
userGuessLog.push(userInput);
attempts++;
document.querySelector('#previousGuess').innerHTML ="" + userGuessLog + "";
document.querySelector('#attemptNumber').innerHTML = attempts;
if(userGuessLog.length === maxAttempts){
 document.getElementById('guess').innerHTML = "You Lose"
 document.getElementById('guessNumber').setAttribute('readonly','readonly');
 
}
}*/







