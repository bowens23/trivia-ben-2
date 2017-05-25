var slide1 = {
	question: "What was the most common way to get around before trains and planes?",
	correctAnswer: "Horse",
	wrongAnswer1: "Jet",
	picture: "<img src='images/Horse.jpg'>"
}

var slide2 = {
	question: "Which state is more mountainous?",
	correctAnswer: "Montana",
	wrongAnswer1: "Michigan",
	picture: "<img src='images/Mountains.jpg'>"
}

var slide3 = {
	question: "What is a glacier made of?",
	correctAnswer: "Ice and Snow",
	wrongAnswer1: "Rocks",
	picture: "<img src='images/Snow.jpg'>"
}

var slide4 = {
	question: "What is commonly found in a valley?",
	correctAnswer: "A River",
	wrongAnswer1: "A hippo",
	picture: "<img src='images/Slope.jpg'>"
}

var slide5 = {
	question: "What weather is common in mountains?",
	correctAnswer: "Clouds",
	wrongAnswer1: "Sun",
	picture: "<img src='images/Clouds.jpg'>"
}

var slide6 = {
	question: "Which is easier to get around mountains in?",
	correctAnswer: "Cars",
	wrongAnswer1: "Boat",
	picture: "<img src='images/Cars.jpg'>"
}

var slideToShow=[slide1, slide2, slide3, slide4, slide5, slide6];

$("#question").click(stop);
$("#options1").click(stop);
$("#options2").click(stop);
$("#options3").click(stop);
$("#options4").click(stop);

function timeOutScreen(){
$("#pictureRCP").html(slideToShow[round].picture);
$("#answerRCP").html("Time's Up! The correct answer was "+slideToShow[round].correctAnswer)
$("#questions").html("");
$("#options1").html("");
$("#options2").html("");
$("#options3").html("");
$("#options4").html("");
$("#start").html("");
}
function correctAnswerScreen(){
$("#pictureRCP").html(slideToShow[round].picture);
$("#answerRCP").html("Correct!")
$("#questions").html("");
$("#options1").html("");
$("#options2").html("");
$("#options3").html("");
$("#options4").html("");
$("#start").html("");
}
function wrongAnswerScreen(){
$("#pictureRCP").html(slideToShow[round].picture);
$("#answerRCP").html("The correct answer was "+slideToShow[round].correctAnswer)
$("#questions").html("");
$("#options1").html("");
$("#options2").html("");
$("#options3").html("");
$("#options4").html("");
$("#start").html("");
}


function roundReset(){
		round++;
		if (round === slideToShow.length) {
	    end();
	  }
		
}
var clockRunning = false;
var intervalId;
var slideInterval = "";
var number = 7;
var round=-1;
var repeater;
numCorrect=0;
numWrong=0;
unanswered=0;
$("#start").click(startGame);
$("#restart").click(restartGame);
$("#restart").hide();


  function stop() {

    clearInterval(intervalId);
    clockRunning = false;
  }
function decrement() {
	//stop();

number--;
$("#timer").html("You have "+(number)+" seconds remaining.");
	if (number === 0) {
		stop();
		timeOutScreen();
		console.log(number);
	// stop();
	
	setTimeout(slideShow, 4000);
	unanswered++;
	}
}

function startTimer(){
//stop();
number=7;
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
        if(number===0){stop()}
    }
  }



function slideShow(){
startTimer();
roundReset();
$("#timer").html("You have 7 seconds remaining.");
$("#questions").html(slideToShow[round].question);
$("#options1").html(slideToShow[round].correctAnswer);
$("#options2").html(slideToShow[round].wrongAnswer1);
$("#pictureRCP").html("");
$("#answerRCP").html("");			
	
}


$(".button").on("click", function compare(){
var userGuess=$(this).text();

if(userGuess===slideToShow[round].correctAnswer)
		{
		correctAnswerScreen();
		//roundReset();
		setTimeout(slideShow, 4000);
		numCorrect++;

		}
else {
		wrongAnswerScreen();
		//roundReset();
		setTimeout(slideShow, 4000);
		numWrong++;
		};
;});




function startGame(){
slideShow();
startTimer();
$("#start").hide();
$(".message").hide();
}

function end(){
$("#pictureRCP").html("");
$("#answerRCP").html("Number Correct: "+numCorrect+" Number Wrong: "+numWrong+" Number unanswered: "+unanswered);
$("#questions").html("");
$("#options1").html("");
$("#options2").html("");
$("#options3").html("");
$("#options4").html("");
$("#start").html("");
$("#timer").hide();
$("#restart").show();
}

function restartGame (){
	round=-1;
	startGame();
	numWrong=0;
	numCorrect=0;
	unanswered=0;
	$("#restart").hide();
	$("#start").show();
$("#timer").show();
}

