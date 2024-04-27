let timer; // To hold the interval timer
let startTime; // To hold the start time of the stopwatch
let running = false; // To track if the stopwatch is running

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = ms % 1000;

    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 100 ? '0' : ''}${milliseconds < 10 ? '0' : ''}${milliseconds}`;
}

function updateDisplay() {
    const elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - (elapsedTime || 0);
        timer = setInterval(updateDisplay, 10);
        startStopButton.textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
