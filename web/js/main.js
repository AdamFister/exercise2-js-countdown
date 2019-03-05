
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var x = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            var audio = new Audio('A-Tone-His_Self-1266414414.wav');
            audio.play();
            clearInterval(x);
            
        }
        
    }, 1000);
}

window.onload = function () {
    var secondsCountdown = prompt("Enter a countdown amount in seconds", "");
        display = document.querySelector('#time');
    startTimer(secondsCountdown, display);
};

