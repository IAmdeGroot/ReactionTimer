var canvas, clickedTime, createdTime, reactionTime;
var green = false;
var blue = true;
var red = false;
var changeTime = Math.floor((Math.random() * 8000) + 1000);
canvas = document.getElementById('canvas');
blueText = document.getElementById('blueText');
redText = document.getElementById('redText');
timeText = document.getElementById('timeText');
tooSoonText = document.getElementById('tooSoonText');
refreshPageText = document.getElementById('refreshPageText');
clickText = document.getElementById('clickText');

var greenTimer;
var clicked = false;

canvas.addEventListener('click', function() {


    if (blue) {
canvas.style.setProperty('--background-color', 'rgb(220,20,60)');
blueText.style.setProperty('--visibility1', 'hidden');
redText.style.setProperty('--visibility2','visible');
        red = true;
     greenTimer = setTimeout(changeToGreen, changeTime)
        blue = false;

    } else if (red){
        tooSoonText.style.setProperty('--visibility4', 'visible');
        redText.style.setProperty('--visibility2', 'hidden');
        clearTimeout(greenTimer);



    } else if (green) {

        if (!clicked) {

        clickedTime = Date.now();
        reactionTime = (clickedTime - createdTime) / 1000;

        timeText.style.setProperty('--visibility3', 'visible');
        refreshPageText.style.setProperty('--visibility3', 'visible');
        timeText.textContent = reactionTime + " seconds";
        clicked = true;
        }


    }

});


 function changeToGreen() {
    canvas.style.setProperty('--background-color', 'rgb(50,205,50)');
    redText.style.setProperty('--visibility2', 'hidden');
    createdTime = Date.now();
     green = true;
     red = false;

}

