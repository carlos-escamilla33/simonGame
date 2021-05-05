
let colorIndex = $("div[id]");

let userClickedPattern = [];

let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let level = 0;

// Makes buttons flash

function fadeInOut(element){

	element.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};

// Plays music of the color selected

function audioPlay(color){

	let audio = new Audio("sounds/" + color + ".mp3");
	audio.play();

};

// adds to the H1 level title

function increment(level){
	level++;
	return $("h1").text("level " + level);
}

// runs when a random key is pressed

function keyPress(){
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	let animationPop = $("div#" + randomChosenColor);
	fadeInOut(animationPop);

	audioPlay(randomChosenColor);

	increment(level++);

	console.log(gamePattern);
};

// runs when a color is clicked

function buttonClick(){

	let userChosenColor = (this.id);
	userClickedPattern.push(userChosenColor);

	audioPlay(userChosenColor);

	animatePress(userChosenColor);

	console.log(userClickedPattern);

	checkAnswer(userClickedPattern.length-1);
};

// changes clicked buttons color to grey and back

function animatePress(currentColor){
	let buttonSelection = $("." + currentColor);

	buttonSelection.addClass("pressed");

	setTimeout(function(){
		buttonSelection.removeClass("pressed");
	}, 100);
};

// Play "Wrong" sound + return red screen

function wrongAnswer(){
	audioPlay("wrong");
	let wrongBackground = $("body");

	wrongBackground.addClass("game-over");

	setTimeout(function(){
		wrongBackground.removeClass("game-over");
	}, 100);

	return $("h1").text("😵 Game Over! Press any Key to Restart! 😵");
};

// Restart game

function startOver(){
	if (wrongAnswer){
		gamePattern.length = 0;
		userClickedPattern.length = 0;
		level = 0;
	};
}


// checks userClickedPattern against gamePattern

function checkAnswer(currentLevel){

	if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
		if (userClickedPattern.length == gamePattern.length){
			buttonClick
			setTimeout(function(){
				userClickedPattern.length = 0;
				keyPress();
			}, 1000);
		};
	} 
	else {
		wrongAnswer();
		startOver();
	};
};


// eventListeners for buttonClick and keyPress


document.addEventListener("keydown", keyPress);

colorIndex.click(buttonClick);




