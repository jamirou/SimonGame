var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var usserClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
   if(!started) {
      $("#level-title").text("level " + level);
      nextSecuence();
      started = true;
   }
}); 

$(".btn").click(function() {
   var userChosenColour = $(this).attr("id");
   usserClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(usserClickedPattern.length-1);
   //check the pattern on usserClickedPattern
   console.log(usserClickedPattern);
});

function checkAnswer(currentLevel) {
   if (gamePattern[currentLevel] === usserClickedPattern[currentLevel]) {
      console.log('success');
   if (usserClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
         nextSecuence();
      }, 1000);
   }

   } else {
      console.log("Your'e Wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function() {
         $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
   };
};


function nextSecuence() {

   usserClickedPattern = [];
   level++;
   $("#level-title").text("Level " + level);

   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); 
   playSound(randomChosenColour);
};

function playSound(name) {
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
   }
   
function animatePress(currentColour) {
   $("#" + currentColour).addClass("pressed");
   setTimeout(function() {
      $("#" + currentColour).removeClass("pressed");
   },100);
};

function startOver() {
      level = 0;
      gamePattern = [];
      started = false;
};

var audioButton = document.getElementById("audio-button");
var audio = new Audio("sounds/thunder.mp3");
var isPlaying = false;

audioButton.addEventListener("click", function(){
  if(!isPlaying){
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
});






