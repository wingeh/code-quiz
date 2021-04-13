//universal variables
var highScore;
var questionCount = 0;
var winCount = 0;

var questionNumber = document.getElementById("questionNumber");
var questionText = document.getElementById("questionText");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");




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
  
  document.getElementById('score').innerText = "You answered " + winCount + " of " + questions.length + " questions correctly.";
};


// Quiz Function -------------------------------------------------------------------
//function startQuiz () {
  
  
//};

// Question Function ------------------------------------------------------------------------------

function startQuiz() {
  console.log ("startQuiz called")
  document.getElementById("quizBlock").style.display = "block"; // display quizBlock

// event liseners  
  answer1.addEventListener("click", checkAnswer);
  answer2.addEventListener("click", checkAnswer);
  answer3.addEventListener("click", checkAnswer);
  answer4.addEventListener("click", checkAnswer);

  if (questionCount === questions.length) {
      endGame();
  } else {
  questionText.textContent = questions[questionCount].questionText;
  answer1.value = questions[questionCount].answer1;
  answer2.value = questions[questionCount].answer2;
  answer3.value = questions[questionCount].answer3;
  answer4.value = questions[questionCount].answer4;
  };
  
};

// Check Answers Functions -----------------------------------------------------------------

function checkAnswer(event) {
    
  if (event.target.value === answers[questionCount]) {
      winCount++;
      console.log (winCount)
  } else {
      timeLeft = timeLeft - 5; //remove time on bad answer
  };
  questionCount++;
  startQuiz();
  
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

//  Questions Array -------------------------------------------------------------------------

var questions = [
  {   questionText:"Which is NOT a primitive data type?",
      answer1: "Object",
      answer2: "String",
      answer3: "Number",
      answer4: "Boolean",
      
  },
  {   questionText: "What is the basic syntax of an if statement",
      answer1: "if {};",
      answer2: "if () {};",
      answer3: "if {} ();",
      answer4: "if ();",
  },    
  {   questionText: "Which symbols represent 'or'?",
      answer1: "&&",
      answer2: "++",
      answer3: "||",
      answer4: "%%",
      
  },
  {   questionText: "Which is NOT a way of declaring a variable? ",
      answer1: "var",
      answer2: "set",
      answer3: "let",
      answer4: "const",
      
  },
];

// Answers Array --------------------------------------------------------------------------

var answers = ["Object", "if () {};", "||", "set"]
