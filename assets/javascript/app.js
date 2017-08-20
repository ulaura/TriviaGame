//variables
var remainingTime = 5; //in seconds
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


//Test questions for now. 
//I will add more later when I can get the logic to work. 
var theQuestions = [
	{
	question: "What is generally considered the start of the work week in the United States?",
	choices: ["Sunday", "Monday", "Friday", "Saturday"],
	correct: "Monday"
	},

	{
	question: "What month was I born in?",
	choices: ["January", "December", "June", "July"],
	correct: "July"
	},
];

var i = 0;

console.log(theQuestions[0].question); //test
console.log(theQuestions[1].correct); //test


$("p").hide();
$(".main-section").append($("<button>"));
$("button").attr("type", "start-button");
$("button").html("Click to start game!");


$("button").on("click", function theGame() {
	//alert("TEST"); 
	$("p").show(); //return p tags
	$("button").hide(); //hide the start button
	$("#countdown").html(remainingTime);
	

	timer();

	function timer() {
		setInterval(decrement, 1000);
		askTheQuestion();

	};


	function decrement() {
		remainingTime--;
		$("#countdown").html(remainingTime);
		if (remainingTime <= -1) {
			alert("You're out of time.");

		}
	}
	
	function askTheQuestion() {
		$("#question").html(theQuestions[i].question);
		$("#option-a").html(theQuestions[i].choices[0]);
		$("#option-b").html(theQuestions[i].choices[1]);
		$("#option-c").html(theQuestions[i].choices[2]);
		$("#option-d").html(theQuestions[i].choices[3]);

		$("span").on("click", function(event) {
			if (($(event.target).text()) == theQuestions[i].correct) {
				alert("You are correct!");
				i++;
			} else {
				alert("YOU ARE WRONG!");
				i++;
			}

		});

	}

	

	





	

	

	
	
	




	function result() {
		$("#question").hide();
		$("#choices").hide();

		$(".main-section").append("<p>Number Correct: " + correctAnswers + "</p>");
		$(".main-section").append("<p>Number Incorrect: " + incorrectAnswers + "</p>");
		$(".main-section").append("<p>Unanswered Questions: " + unanswered + "</p>");


	}






});
