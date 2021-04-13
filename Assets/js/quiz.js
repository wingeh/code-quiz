//universal variables
var highScore;
var questionCount;




// Jump to next input box when first initial is added ------------------------------
$(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
});

// End of Game Function ------------------------------------------------------------
function endGame (){

  //hide timer and quizBlock
  document.getElementById("quizBlock").style.display = "none";
  document.getElementById('timerBlock').style.display = "none";

  //show scoreBlock
  document.getElementById('scoreBlock').style.display = "block";
};
// Quiz Function -------------------------------------------------------------------
function startQuiz () {
  document.getElementById("quizBlock").style.display = "block"; // display quizBlock

  
};

// Timer Function ------------------------------------------------------------------

// variables to pass elements from HTML to Javascript
var startTimer = document.getElementById("startTimer");
var timerBlock = document.getElementById('timerBlock');
var elem = document.getElementById('counter');

// event listener
startTimer.addEventListener("click", timer);

var timeLeft = 30; // starting time in seconds
    
    
function timer() {  
  startQuiz();
  var timerInterval = setInterval(function(){
    
    document.getElementById('timerBlock').style.display = "block"; //display timer

    //when there is less than 10 seconds remaining change text to red
    if (timeLeft <= 9){
      document.getElementById("timerBlock").style.color = "red";
      document.getElementById("counter").innerHTML= "00:0" + timeLeft;
    } else {
      document.getElementById("counter").innerHTML= "00:" + timeLeft;
    }

    //if time runs out or the questions are all answered end the game and stop the timer
    if (timeLeft === 0 || questionCount === 4) {
      clearInterval(timerInterval);
      document.getElementById("counter").innerHTML = "DONE";
      endGame();
      return
  } 
  timeLeft--;
  }, 1000);

};

