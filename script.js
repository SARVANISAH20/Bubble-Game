var counter = 60;
var score = 0;
var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var btmpnl = document.querySelector('#btmpnl');
var scoreelem = document.querySelector('#scoreelem');

var guessNumber; //variable declared Globally!
setInterval(function(){
    if (counter > 0){
        timerelem.textContent = --counter;
    }
    else{
        btmpnl.innerHTML = '<h1 id="center" >Game Over</h1>'
    }
},1000);

function makeBubbles(){
    for(var i = 0; i < 152; i++){
        var randomNumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}

function getNewGuess(){
    //get a random number and place the random number in
    //a guess element.
    guessNumber = Math.floor(Math.random() * 10);
    hitelem.textContent =  guessNumber;
}

btmpnl.addEventListener('click',function(details){
    var clickedBblValue = details.target.textContent;
    if(clickedBblValue == guessNumber){
        score = score +  10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();

    }
})
getNewGuess();
makeBubbles();