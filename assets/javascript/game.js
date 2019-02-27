//variables for the game
var wins = 0;
var losses = 0;
var randomNum = 0;
var jewel1 = 0;
var jewel2 = 0;
var jewel3 = 0;
var jewel4 = 0;
var score = 0;

//after the document is ready, load these
$(document).ready(function () {
    //function to load different sound clips on different scenarios
    function loadSong(flag) {
        var audioToPlay = "assets/audio/Star.mp3";
        if (flag==0) audioToPlay = "assets/audio/SadTrombone.mp3";
        else if (flag==1) audioToPlay = "assets/audio/Applause.mp3";
        audio = new Audio(audioToPlay);
        audio.play();
    }
    //function to get random number between 2 number(inclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //function to start a new game
    function startNewGame() {
        randomNum = getRandomInt(19, 120);
        jewel1 = Math.floor((12 * Math.random()) + 1);
        jewel2 = Math.floor((12 * Math.random()) + 1);
        jewel3 = Math.floor((12 * Math.random()) + 1);
        jewel4 = Math.floor((12 * Math.random()) + 1);
        $("#computer-pick").text(randomNum);
        score = 0;
    }
    $("#about").on("click", function() {
        $("#cover, #aboutDiv").show();
    });
    $("#close").on("click", function() {
        $("#cover, #aboutDiv").hide();
        //$('#cover, #aboutDiv').css('display','none');
    });
    //on page load, start new game
    startNewGame();
    //on click of jewels, run codes inside the function
    $('#jewel1, #jewel2, #jewel3, #jewel4').click(function () {
        loadSong();
        if (this.id == 'jewel1') {
            score += jewel1;
        } else if (this.id == 'jewel2') {
            score += jewel2;
        } else if (this.id == 'jewel3') {
            score += jewel3;
        } else if (this.id == 'jewel4') {
            score += jewel4;
        }

        if (score > randomNum) {
            audio.pause();
            loadSong(0);
            losses++;
            startNewGame();
        } else if (score == randomNum) {
            audio.pause();
            loadSong(1);
            wins++;
            startNewGame();
        }
        $("#score").text(score);
        $("#wins").text(wins);
        $("#losses").text(losses);
    });
});