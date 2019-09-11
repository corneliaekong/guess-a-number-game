// generating a random number
  var number;
  var userGuessLog =[];
  var attempts = 0;
  var maxAttempts = 5;
  document.querySelector('.panel-start').style.display = 'none';
  document.querySelector('.panel3').style.display = 'none';





  function newGame(){
    //window.location.reload();
    document.querySelector('.panel-start').style.display = 'block';
    document.querySelector('.panel3').style.display = 'block';
  }

  function settings(){
    document.querySelector('.settings').style.display= "block";
  }
  function close(){
    document.querySelector('.settings').style.display='none';
    
  }
  

// take user inputs

function check(){
  //e.preventDefault();
  //window.location.reload();
  number = Math.floor(Math.random()*50 + 1);

  var userInput = document.getElementById('guessNumber').value;

  if(userInput === number){
    document.querySelector('#guess').innerHTML = " Bravo! You guessed it right " + number;
    document.getElementById('guessNumber').value = "";
    }
 
  else{
    document.querySelector('#guess').innerHTML = "Aw! You missed it try again " +  number;
    document.getElementById('guessNumber').value = "";
  }

  // checking number of attempts and previous guesses
  userGuessLog.push(userInput);
  attempts++;
  document.querySelector('#previousGuess').innerHTML ="" + userGuessLog + "";
  document.querySelector('#attemptNumber').innerHTML = attempts;

  if(userGuessLog.length === maxAttempts){

    document.getElementById('guess').innerHTML = "You Lose"
    document.getElementById('guessNumber').disabled = true;
    document.getElementById('submitBtn').disabled = true;
    document.querySelector('.finish').style.display = 'block';
    document.querySelector('.main-content').style.display = 'none';
   
  }

}
  function startNew(){

    document.querySelector('.main-content').style.display = 'block';
    document.querySelector('.finish').style.display = 'none';
    document.getElementById('guess').innerHTML = ""
    document.getElementById('guessNumber').disabled = false;
    document.getElementById('submitBtn').disabled = false;
    document.querySelector('#attemptNumber').innerHTML = 0;
    document.querySelector('#previousGuess').innerHTML = 0;
    
    check();

  }


  




