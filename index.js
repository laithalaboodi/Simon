var sequenceM=[];
var sequenceU=[];
var soundFX = [
new Audio("./sounds/simonSoundGreen.mp3"), 
new Audio("./sounds/simonSoundBlue.mp3"), 
new Audio("./sounds/simonSoundRed.mp3"), 
new Audio("./sounds/simonSoundYellow.mp3")
];
var counter= 0; 
var level=0;

//Press key to start
//for space
$(document).on("keydown", function(e){
    if (e.keyCode === 32){
    nextSequence();
    }
});


//This generates a random number
function nextSequence() {
 var randomNumber = Math.floor(Math.random()*4);
 sequenceM.push(randomNumber); 
 showSequence(sequenceM[sequenceM.length - 1]);
 changeLevel();
 sequenceU=[];
 
};

//displays color and sound of each option
function showSequence(element) {
    
    switch (element){
        case 0:
            soundFX[0].play();
              $("#green").addClass("dissapear");
              setTimeout(function(){
                  $("#green").removeClass("dissapear");
              },250)
              break;
        case 1:
            soundFX[2].play();
            $("#red").addClass("dissapear");
              setTimeout(function () {
                  $("#red").removeClass("dissapear");
              }, 250)
            break;
        case 2:
            soundFX[3].play();
              $("#yellow").addClass("dissapear");
              setTimeout(function () {
                $("#yellow").removeClass("dissapear");
              }, 250)
            break;
        case 3:
            soundFX[1].play();
            $("#blue").addClass("dissapear");
              setTimeout(function () {
                  $("#blue").removeClass("dissapear");
              }, 250)
            break;
    }
 };

function changeLevel() {
    counter++;
    $("#level-title").text(`Level: ${counter}`);
    
};

//converts clicks into numbers and sets it to a new array
$(".btn").click(function(e){
        var userInput= $(this).attr("id");
        switch(userInput){
            case "green":
                sequenceU.push(0);
                showSequence(0);
                break;

            case "red":
                sequenceU.push(1);
                showSequence(1);
                break;
            
            case "yellow":
                sequenceU.push(2);
                showSequence(2);
                break;
            
            case "blue":
                sequenceU.push(3);
                showSequence(3);
                break;
            }
        checkSequence(sequenceU.length-1);
              
    });     

//checks if the sequences is correct so far
function checkSequence(arrayIndex) { 

    if(sequenceU[arrayIndex] === sequenceM[arrayIndex]){
       
      if(sequenceM.length === sequenceU.length) {
           setTimeout(function () {
            nextSequence();
           }, 1000);
        }
    } else {
      lostError();
    }
}
//Lost sequence
function lostError(){
$("body").css("background-color", "#FF0000")
$("h1").text("You lost");
    setTimeout(function () {
        $("h1").text("*Press Space to Start*");
        $("body").css("background-color", "#ffffff");
    }, 1500)
    var music = new Audio("./sounds/Lose.mp3")
    music.volume = 0.1;
    music.play();
counter=0;
sequenceM = [];
}