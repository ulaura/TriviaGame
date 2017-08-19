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


$("p").hide();
$(".main-section").append($("<button>"));
$("button").attr("type", "start-button");
$("button").html("Click to start game!");

$("button").on("click", function theGame() {
	//alert("TEST"); 
	$("p").show(); //return p tags
	$("button").hide(); //hide the start button


	$("#countdown").html(remainingTime + " seconds");
	$("#question").html(questionOne.question);
	$("#option-a").html(questionOne.choices[0]);
	$("#option-b").html(questionOne.choices[1]);
	$("#option-c").html(questionOne.choices[2]);
	$("#option-d").html(questionOne.choices[3]);

	
	//checks to see if clicked option presented matches questionOne.correct.
	$("span").on("click", function(event) {
		if (($(event.target).text()) == questionOne.correct) {
			alert("You are correct!");
		} else {
			alert("YOU ARE WRONG!");
		}

	});






});

	



















