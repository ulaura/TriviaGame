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

//created an array of correct answers so I can use this in the check correct answer loop below
var listCorrectAnswers = [questionOne.correct, questionTwo.correct];

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


	firstQuestion();


	function firstQuestion() {
		$("#countdown").html(remainingTime + " seconds");
		$("#question").html(questionOne.question);
		$("#option-a").html(questionOne.choices[0]);
		$("#option-b").html(questionOne.choices[1]);
		$("#option-c").html(questionOne.choices[2]);
		$("#option-d").html(questionOne.choices[3]);

		
		//checks to see if clicked option presented matches questionOne.correct.
		//problem: running questionTwo brings up the question, but then the clicked
		//answer gets compared to both questionOne.correct AND questionTwo.correct. 

		//possible solution: turn this section into its own for-loop and iterate the 
		//"questionOne.correct" part so this only gets checked once per question. 

		$("span").on("click", function(event) {
			if (($(event.target).text()) == questionOne.correct) {
				alert("You are correct!");
				
				
			} else {
				alert("YOU ARE WRONG!");
				
			}


		});


	};

	

	function secondQuestion() {
		$("#countdown").html(remainingTime + " seconds");
		$("#question").html(questionTwo.question);
		$("#option-a").html(questionTwo.choices[0]);
		$("#option-b").html(questionTwo.choices[1]);
		$("#option-c").html(questionTwo.choices[2]);
		$("#option-d").html(questionTwo.choices[3]);


		$("span").on("click", function(event) {
			if (($(event.target).text()) == questionTwo.correct) {
				alert("You are correct!");
				//thirdQuestion();
				
			} else {
				alert("YOU ARE WRONG!");
				//thirdQuestion();
				
			}

		});

	}

/*
	function thirdQuestion() {
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
				fourthQuestion();
			} else {
				alert("YOU ARE WRONG!");
				fourthQuestion();
			}

		});

	}

	function fourthQuestion() {
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
				fifthQuestion();
			} else {
				alert("YOU ARE WRONG!");
				fifthQuestion();
			}

		});

	}

	function fifthQuestion() {
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
				result();
			} else {
				alert("YOU ARE WRONG!");
				result();
			}

		});

	}
*/
	function result() {
		$("#question").hide();
		$("#choices").hide();

		$(".main-section").append("<p>Number Correct: " + correctAnswers + "</p>");
		$(".main-section").append("<p>Number Incorrect: " + incorrectAnswers + "</p>");
		$(".main-section").append("<p>Unanswered Questions: " + unanswered + "</p>");


	}






});

	



















