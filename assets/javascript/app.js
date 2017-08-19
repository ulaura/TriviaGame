//variables
var remainingTime = 30; //as in 30 seconds
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//The questions for now.
//I will add more later when everything comes together.
var questionOne = {
	question: "What is generally considered the start of the work week in the United States?",
	choices: ["Sunday", "Monday", "Friday", "Saturday"],
	correct: "Monday"
};

var questionTwo = {
	question: "What month was I born in?",
	choices: ["January", "December", "June", "July"],
	correct: "July"
};

console.log(questionTwo.question);   //test
console.log(questionTwo.choices[3]); //test


$("p").remove();
$(".main-section").append($("<button>"));
$("button").attr("type", "start-button");
$("button").html("Click to start game!");

$("button").on("click", function theGame() {
	alert("TEST"); 








});

	



















